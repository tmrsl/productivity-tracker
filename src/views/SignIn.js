import AccountCircle from "@mui/icons-material/AccountCircle";
import Key from "@mui/icons-material/Key";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledButton } from "../components/styles/Button/Button.styled";

import { useAuth } from "../context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  const navigate = useNavigate();

  const enteredEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const enteredPassHandler = (e) => {
    setPass(e.target.value);
  };

  async function submitHandler(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signIn(email, pass);
      navigate("/");
    } catch (e) {
      switch (e.code) {
        case "auth/invalid-credential":
          setError("Invalid account name");
          break;
        case "auth/invalid-email":
          setError("Invalid email");
          break;
        case "auth/wrong-password":
          setError("Wrong-password");
          break;
        default:
          setError("Failed to sign in");
      }
    }

    setLoading(false);
    setEmail("");
    setPass("");
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
          Sign in
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
            value={email}
            onChange={enteredEmailHandler}
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
            required
            value={pass}
            onChange={enteredPassHandler}
          />
        </Box>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <StyledButton
          type="submit"
          fullWidth
          disabled={loading}
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </StyledButton>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/forgot-password" variant="body2" underline="hover">
            Forgot password?
          </Link>
          <Link to="/sign-up" variant="body2" underline="hover">
            Sign Up
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
