import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

import { useAuth } from "../context/AuthContext";

const Home = () => {
  const [error, setError] = useState("");

  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();

  async function logOutHandler() {
    setError("");

    try {
      await logOut();
      navigate("/sign-in");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {error && (
          <Alert
            onClose={() => {
              setError("");
            }}
            severity="error"
          >
            {error}
          </Alert>
        )}
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
        <Typography component="h1" variant="h5">
          Add your first goal
        </Typography>
        <Link to="/add-goal">
          <Fab
            sx={{ mt: 3, mb: 1 }}
            size="medium"
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </Link>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={logOutHandler}
          sx={{ mt: 3, mb: 2 }}
        >
          Log out
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
