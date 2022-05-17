// import { Container } from "@mui/material";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Fab from "@mui/material/Fab";
// import { Link } from "react-router-dom";
// import EditIcon from "@mui/icons-material/Edit";

import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";

// import { StyledButton } from "../components/styles/Button.styled";

// import { useAuth } from "../context/AuthContext";s

const Home = () => {
  // const { currentUser } = useAuth();

  return (
    <Box>
      <Stack direction="row" spacing={2}>
        {/* <Sidebar></Sidebar> */}
        <Feed></Feed>
        <Rightbar></Rightbar>
      </Stack>

      {/* <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            <strong>{currentUser.email}</strong>
          </Typography>
          <Typography component="h1" variant="h5">
            Edit your profile
          </Typography>
          <Link to="/update-profile">
            <Fab
              sx={{ mt: 3, mb: 1 }}
              size="medium"
              color="secondary"
              aria-label="edit"
            >
              <EditIcon />
            </Fab>
          </Link>
        </Box>
        <StyledButton fullWidth sx={{ mt: 3, mb: 2 }}>
          <Link to="/add-activity">Add Activity</Link>
        </StyledButton>
      </Container> */}
    </Box>
  );
};

export default Home;
