import React, { useContext, useEffect, useState } from "react";
import { storage } from "../firebase";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";
import { USERS } from "../app.consts";
import { useAuth } from "./AuthContext";
import { v4 as uid } from "uuid";

const getImageObject = async (imageRef) => {
  const imgUrl = await getDownloadURL(imageRef);
  const { customMetadata } = await getMetadata(imageRef);

  return {
    imgUrl,
    ...customMetadata,
  };
};

const AlbumContext = React.createContext();

export default function AlbumProvider({ children }) {
  const { currentUser } = useAuth();
  const [album, setAlbum] = useState([]);

  const addAlbumCard = async (albumCard) => {
    const { imgFile, title, notes } = albumCard;

    const id = uid();
    const path = `${USERS}/${currentUser.uid}/images/${id}_${imgFile.name}`;

    const customMetadata = {
      title,
      notes,
      id,
    };

    const metadataToSet = {
      customMetadata,
    };

    try {
      const imgRef = ref(storage, path);
      await uploadBytes(imgRef, imgFile, metadataToSet);

      const imgUrl = await getDownloadURL(imgRef);
      const newAlbumCard = { ...customMetadata, imgUrl };
      setAlbum((curAlbum) => [newAlbumCard, ...curAlbum]);
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
}

export const useAlbum = () => useContext(AlbumContext);
