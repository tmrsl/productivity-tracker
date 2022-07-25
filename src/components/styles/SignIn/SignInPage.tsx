import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  EmailBlock,
  FormBlock,
  HelpersBlock,
  PassBlock,
  StyledAccountCircle,
  StyledAvatar,
  StyledButton,
  StyledKey,
  TitleBlock,
} from "./SignInPage.styled";
import { TSignIn } from "../../../context/AuthContext";

interface ISignInProps {
  signIn: TSignIn,
}

export const SignInPage = ({ signIn }: ISignInProps ) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useRouter();

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
      navigate.replace("/");
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
      <TitleBlock>
        {/* @ts-ignore*/}
        <StyledAvatar variant="circular">
          <LockOutlinedIcon></LockOutlinedIcon>
        </StyledAvatar>
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Sign in
        </Typography>
      </TitleBlock>
      <FormBlock component="form" onSubmit={submitHandler}>
        <EmailBlock>
          <StyledAccountCircle />
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
        </EmailBlock>
        <PassBlock>
          <StyledKey />
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
        </PassBlock>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <StyledButton
          type="submit"
          variant="contained"
          fullWidth
          disabled={loading}
        >
          Sign In
        </StyledButton>
        <HelpersBlock>
          {/* @ts-ignore*/}
          <Link href="/forgot-password" variant="body2" underline="hover">
            Forgot password?
          </Link>
          {/* @ts-ignore*/}
          <Link href="/sign-up" variant="body2" underline="hover">
            Sign Up
          </Link>
        </HelpersBlock>
      </FormBlock>
    </Container>
  );
};
