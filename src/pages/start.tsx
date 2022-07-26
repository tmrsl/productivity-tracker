import React from "react";
import { withPublic } from "../utils/router";
import { MainPage } from "../components/styles/Main/MainPage";

const StartPage = () => {
  return <MainPage />;
};

export default withPublic(StartPage);
