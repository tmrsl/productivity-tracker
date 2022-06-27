import Key from "@mui/icons-material/Key";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "../components/styles/Button/Button.styled";
import { AccountCircleIcon } from "../components/styles/Icons/Icons.styled";
import { useAuth } from "../context/AuthContext";

export const UpdateProfile = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passConfrim, setPassConfrim] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  const { currentUser, updateUserCredentials } = useAuth();

  useEffect(() => {
    setEmail(currentUser.email);
    setDisplayName(currentUser.displayName || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== passConfrim) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    updateUserCredentials({ email, password, displayName })
      .then(() => {
        setSuccessMsg(true);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }} variant="circular">
          <LockOutlinedIcon></LockOutlinedIcon>
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Update Profile
        </Typography>
      </Box>
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
      {successMsg && (
        <Alert
          onClose={() => {
            setSuccessMsg(false);
          }}
          severity="success"
        >
          Successfully update
        </Alert>
      )}
      <Box component="form" sx={{ mt: 3 }} onSubmit={submitHandler}>
        <Box sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
          <AccountCircleIcon sx={{ color: "primary.main", mr: 1, my: 0.5 }} />
          <TextField
            id="displayName"
            label="Full name"
            type="text"
            variant="standard"
            fullWidth
            value={displayName}
            required
            onInput={(evt) => setDisplayName(evt.target.value)}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
          <AccountCircleIcon sx={{ color: "primary.main", mr: 1, my: 0.5 }} />
          <TextField
            id="email"
            label="E-mail"
            type="email"
            variant="standard"
            fullWidth
            autoComplete="email"
            value={email}
            required
            onInput={(evt) => setEmail(evt.target.value)}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
          <Key sx={{ color: "primary.main", mr: 1, my: 0.5 }} />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="standard"
            fullWidth
            placeholder="Leave blank to keep the same"
            value={password}
            onInput={(evt) => setPassword(evt.target.value)}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
          <Key sx={{ color: "primary.main", mr: 1, my: 0.5 }} />
          <TextField
            sx={{ mb: 1 }}
            id="confirmPassword"
            label="Password Confirmation"
            type="password"
            variant="standard"
            fullWidth
            placeholder="Leave blank to keep the same"
            value={passConfrim}
            onInput={(evt) => setPassConfrim(evt.target.value)}
          />
        </Box>
        <StyledButton fullWidth disabled={loading} sx={{ mt: 3, mb: 2 }}>
          Update
        </StyledButton>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Link to="/" variant="body2" underline="hover">
            Cancel
          </Link>
        </Box>
      </Box>
    </Container>
  );
};
