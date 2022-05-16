import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { SubmitButton } from "../components/Button/Button.styled";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();

  const navigate = useNavigate();

  const enteredFirstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const enteredLastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const enteredEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const enteredPassHandler = (e) => {
    setPass(e.target.value);
  };

  const enteredPassConfirmHandler = (e) => {
    setConfirmPass(e.target.value);
  };

  async function submitHandler(e) {
    e.preventDefault();

    if (pass !== confirmPass) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(email, pass);
      navigate("/");
    } catch (e) {
      switch (e.code) {
        case "auth/credential-already-in-use":
          setError("Account already exist");
          break;
        case "auth/invalid-email":
          setError("Invalid email");
          break;
        case "auth/weak-password":
          setError("Weak-password");
          break;
        default:
          console.log(error.code);
          setError("Failed to create an account");
      }
    }
    setLoading(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPass("");
    setConfirmPass("");
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }} variant="circular">
          <LockOutlinedIcon></LockOutlinedIcon>
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Sign up
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
        <TextField
          sx={{ mb: 1 }}
          id="firstName"
          label="First Name"
          name="firstName"
          variant="standard"
          fullWidth
          required
          autoComplete="given-name"
          autoFocus
          value={firstName}
          onChange={enteredFirstNameHandler}
        />
        <TextField
          sx={{ mb: 1 }}
          id="lastName"
          label="Last Name"
          name="lastName"
          variant="standard"
          fullWidth
          required
          autoComplete="given-name"
          value={lastName}
          onChange={enteredLastNameHandler}
        />
        <TextField
          sx={{ mb: 1 }}
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
        <TextField
          sx={{ mb: 1 }}
          id="password"
          label="Password"
          type="password"
          variant="standard"
          fullWidth
          required
          value={pass}
          onChange={enteredPassHandler}
        />
        <TextField
          sx={{ mb: 1 }}
          id="confirmPassword"
          label="Password Confirmation"
          type="password"
          variant="standard"
          fullWidth
          required
          value={confirmPass}
          onChange={enteredPassConfirmHandler}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="I allow send me notifications by email"
        />
        <SubmitButton fullWidth disabled={loading} sx={{ mt: 3, mb: 2 }}>
          Sign Up
        </SubmitButton>
        <Link to="/sign-in" variant="body2" underline="hover">
          Already have an account? Sign in
        </Link>
      </Box>
    </Container>
  );
};

export default SignUp;
