import React from "react";

import { getAuth } from "firebase-admin/auth";
import { withPrivate } from "src/utils/router";
import nookies from "nookies";
import { Cards } from "../components/styles/Album/Cards";
import { loadAlbum } from "../context/AlbumContext";
import firebaseAdmin from "../firebase/firebase.admin";

const Album = ({ album }) => {
  return (
    <Cards album={album} />
  );
};

export async function getServerSideProps(ctx) {
  try {
    const cookies = nookies.get(ctx);
    const user = await getAuth(firebaseAdmin).verifyIdToken(cookies.token);
    const album = await loadAlbum(user);
  
    return { props: { album } };
  } catch (e) {
    return { props: {} as never };
  }
}

export default withPrivate(Album);
