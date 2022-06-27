import React from "react";
import { Cards } from "../components/styles/Album/Cards";
import { useAlbum } from "../context/AlbumContext";

export const Album = () => {
  const { album } = useAlbum();

  return (
    <Cards album={album} />
  );
};
