import React, { useContext, useEffect, useState } from "react";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  getMetadata,
  StorageReference,
} from "firebase/storage";

import { User } from "firebase/auth";

import { v4 as uid } from "uuid";
import { useAuth } from "./AuthContext";
import { USERS } from "../app.consts";
import { storage } from "../firebase";
interface IAlbumItemRaw {
  imgUrl: string;
  title: string;
  notes: string;
}

export interface IAddAlbumCardPayload {
  imgFile: File;
  title: string;
  notes: string;
}
export interface IAlbumItem extends IAlbumItemRaw {
  id: string;
}

// eslint-disable-next-line
type TAddAlbumCard = (albumCard: IAddAlbumCardPayload) => Promise<void>;

// eslint-disable-next-line
type TBuildRefPath = (payload: { albumCard: IAddAlbumCardPayload, currentUser: User } ) => IBuildRefPath;

interface IAlbumContext {
  album: IAlbumItem[],
  addAlbumCard: TAddAlbumCard;
}

interface IAlbumProviderProps {
  children: React.ReactNode,
}

interface IBuildRefPath {
  path: string,
  meta: {
    customMetadata: {
      [key: string]: string,
    }
  }
  imgFile: File,
}

const getImageObject = async (imageRef: StorageReference): Promise<IAlbumItem> => {

  const imgUrl = await getDownloadURL(imageRef);
  const { customMetadata } = await getMetadata(imageRef);

  return {
    imgUrl,
    ...customMetadata,
  } as IAlbumItem;
};

const buildRefPath: TBuildRefPath = ({ albumCard, currentUser }) => {
  const id = uid();
  const { imgFile, title, notes } = albumCard;

  const path = `${USERS}/${currentUser.uid}/images/${id}_${imgFile.name}`;
  const customMetadata = {
    title,
    notes,
    id,
  };

  return {
    path,
    meta: { customMetadata },
    imgFile
  };
};

const AlbumContext = React.createContext<IAlbumContext>(null);

export const AlbumProvider = ({ children }: IAlbumProviderProps) => {
  const { currentUser } = useAuth();
  const [album, setAlbum] = useState<IAlbumItem[]>([]);

  const addAlbumCard = async (albumCard: IAddAlbumCardPayload) => {
    const { path, imgFile, meta } = buildRefPath({ albumCard, currentUser });

    try {
      const imgRef = ref(storage, path);
      await uploadBytes(imgRef, imgFile, meta);

      const imgUrl = await getDownloadURL(imgRef);
      const newAlbumCard = { ...meta, imgUrl };
      setAlbum((curAlbum) => [newAlbumCard, ...curAlbum] as IAlbumItem[]);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    async function fetchAlbumContent() {
      const path = `${USERS}/${currentUser.uid}/images`;
      const userImagesRef = ref(storage, path);

      try {
        const { items } = await listAll(userImagesRef);
        const promises = items.map(getImageObject);

        const albumItems = await Promise.all(promises);

        setAlbum(albumItems);
      } catch (e) {
        console.log("e: ", e);
      }
    }

    fetchAlbumContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    album,
    addAlbumCard,
  };

  return (
    <AlbumContext.Provider value={value}>{children}</AlbumContext.Provider>
  );
};

export const useAlbum = () => useContext(AlbumContext);
