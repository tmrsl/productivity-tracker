import React from "react";
import { withPrivate } from "src/utils/router";
import { Cards } from "../components/styles/Album/Cards";
import { useAlbum } from "../context/AlbumContext";

const Album = () => {
  const { album } = useAlbum();

  return (
    <Cards album={album} />
  );
};

export default withPrivate(Album);
