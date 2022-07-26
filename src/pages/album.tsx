// import { getAuth } from "firebase/auth";
import { getAuth } from "firebase-admin/auth";
import React from "react";
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
  console.log("[getServerSideProps]");
  try {
    const cookies = nookies.get(ctx);
    const user = await getAuth(firebaseAdmin).verifyIdToken(cookies.token);
    const album = await loadAlbum(user);
    console.log("album; ", album.length);
  
    return { props: { album } };
  } catch (e) {
    // ctx.res.writeHead(302, { Location: "/sign-in" });
    // ctx.res.end();

    return { props: {} as never };
  }
}

export default withPrivate(Album);
