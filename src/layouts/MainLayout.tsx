import { MainLayoutPage } from "../components/styles/Layouts/MainLayout/MainLayoutPage";

import { useAuth } from "../context/AuthContext";
import { useColorMode } from "../context/ColorModeContext";
import { useActivities } from "../context/UserActivitiesContext";

export const MainLayout = () => {
  const { logOut, currentUser } = useAuth();
  const { activities } = useActivities();
  const { toggleColorMode, mode } = useColorMode();

  return (
    <MainLayoutPage
      logOut={logOut}
      currentUser={currentUser}
      activities={activities}
      toggleColorMode={toggleColorMode}
      mode={mode}
    />
  );
};
