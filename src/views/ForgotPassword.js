import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { Link } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../context/AuthContext";
import { StyledButton } from "../components/styles/Button/Button.styled";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [confirmMesasge, setConfirmMesasge] = useState(false);
  const [loading, setLoading] = useState(false);

  const { resetPassword } = useAuth();

  const enteredEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  async function submitHandler(e) {
    e.preventDefault();

    try {
      setConfirmMesasge(false);
      setError("");
      setLoading(true);
      await resetPassword(email);
      setConfirmMesasge(true);
    } catch (e) {
      setError("Failed to reset password");
    }

    setLoading(false);
    setEmail("");
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }} variant="circular">
          <LockOutlinedIcon></LockOutlinedIcon>
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Password Reset
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
      {confirmMesasge ? (
        <>
          <Alert
            onClose={() => {
              setConfirmMesasge(false);
            }}
            severity="success"
          >
            "Check your inbox for further instructions"
          </Alert>
          <Link to="/sign-in" variant="body2" underline="hover">
            Sign In
          </Link>
        </>
      ) : (
        <Box component="form" sx={{ mt: 3 }} onSubmit={submitHandler}>
          <Box sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
            <AccountCircle sx={{ color: "primary.main", mr: 1, my: 0.5 }} />
            <TextField
              id="email"
              label="E-mail"
              type="email"
              variant="standard"
              fullWidth
              required
              autoComplete="email"
              autoFocus
              value={email}
              onChange={enteredEmailHandler}
            />
          </Box>
          <StyledButton fullWidth disabled={loading} sx={{ mt: 3, mb: 2 }}>
            Reset Password
          </StyledButton>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/sign-in" variant="body2" underline="hover">
              Sign In
            </Link>
            <Link to="/sign-up" variant="body2" underline="hover">
              Need an account? Sign Up
            </Link>
          </Box>
        </Box>
      )}
    </Container>
  );
}
