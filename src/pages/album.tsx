import React from "react";
import nookies from "nookies";
import { GetServerSideProps } from "next";
import { getAuth } from "firebase-admin/auth";
import { withPrivate } from "src/utils/router";
import firebaseAdmin from "../firebase/firebase.admin";

import { loadAlbum, IAlbumItem } from "../context/AlbumContext";

import { Cards } from "../components/styles/Album/Cards";

interface IAlbumProps {
  album: IAlbumItem[],
}

const Album = ({ album }: IAlbumProps) => {
  return (
    <Cards album={album} />
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const cookies = nookies.get(ctx);
    const user = await getAuth(firebaseAdmin).verifyIdToken(cookies.token);
    const album = await loadAlbum(user);
  
    return { props: { album } };
  } catch (e) {
    return { props: {} as never };
  }
};

export default withPrivate(Album);
