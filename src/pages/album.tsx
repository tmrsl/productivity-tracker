import React from "react";
import { GetServerSideProps } from "next";
import { withPrivate } from "src/utils/router";
import { getUser } from "src/utils/ssr-utils";

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
    const user = await getUser(ctx);
    const album = await loadAlbum(user);
  
    return { props: { album } };
  } catch (e) {
    return { props: {} as never };
  }
};

export default withPrivate(Album);
