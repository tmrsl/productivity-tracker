import { useAuth } from "../context/AuthContext";
import { UpdateProfilePage } from "../components/styles/UpdateProfile/UpdateProfilePage";

export const UpdateProfile = () => {
  const { currentUser, updateUserCredentials } = useAuth();

  return (
    <UpdateProfilePage
      currentUser={currentUser}
      updateUserCredentials={updateUserCredentials}
    />
  );
};

export default UpdateProfile;
