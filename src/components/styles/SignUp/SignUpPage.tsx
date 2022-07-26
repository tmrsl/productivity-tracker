import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Container } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  FormBlock,
  TitleBlock,
  StyledButton,
  StyledAvatar,
} from "./SignUpPage.styled";
import { TSignUp } from "../../../context/AuthContext";

interface ISignUpProps {
  signUp: TSignUp,
}

export const SignUpPage = ({ signUp }: ISignUpProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useRouter();

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
      navigate.push("/");
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
      <TitleBlock>
        {/* @ts-ignore*/}
        <StyledAvatar variant="circular">
          <LockOutlinedIcon></LockOutlinedIcon>
        </StyledAvatar>
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Sign up
        </Typography>
      </TitleBlock>
      <FormBlock component="form" onSubmit={submitHandler}>
        <TextField
          sx={{ mb: 1 }}
          id="firstName"
          label="First Name"
          name="firstName"
          variant="standard"
          fullWidth
          required
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
        <StyledButton
          type="submit"
          variant="contained"
          fullWidth
          disabled={loading}
        >
          Sign Up
        </StyledButton>
        {/* @ts-ignore*/}
        <Link href="/sign-in" variant="body2" underline="hover">
          Already have an account? Sign in
        </Link>
      </FormBlock>
    </Container>
  );
};
