import React from "react";
import { withPrivate } from "../utils/router";
import { useAuth } from "../context/AuthContext";
import { UpdateProfilePage } from "../components/styles/UpdateProfile/UpdateProfilePage";

const UpdateProfile = () => {
  const { currentUser, updateUserCredentials } = useAuth();

  return (
    <UpdateProfilePage
      currentUser={currentUser}
      updateUserCredentials={updateUserCredentials}
    />
  );
};

export default withPrivate(UpdateProfile);
