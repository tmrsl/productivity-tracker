// import { Container } from "@mui/material";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Fab from "@mui/material/Fab";
// import { Link } from "react-router-dom";
// import EditIcon from "@mui/icons-material/Edit";

import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import Feed from "../components/styles/Feed/Feed";
// import Rightbar from "../components/styles/Rightbar/Rightbar";
// import Sidebar from "../components/styles/Sidebar/Sidebar";

import { useActivities } from "../context/UserActivitiesContext";

const Home = () => {
  // const { currentUser } = useAuth();
  const { activities } = useActivities();

  return (
    <Box>
      <Stack direction="row" spacing={2}>
        {/* <Sidebar></Sidebar> */}
        <Feed activities={activities}></Feed>
        {/* <Rightbar></Rightbar> */}
      </Stack>
    </Box>
  );
};

export default Home;
