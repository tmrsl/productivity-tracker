import React, { useState } from "react";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import {
  EmailBlock,
  FormBlock,
  HelpersBlock,
  StyledAccountCircle,
  StyledAvatar,
  StyledButton,
  StyledTitle,
  TitleBox
} from "./ForgotPassword.styled";
import { TResetPassword } from "../../../context/AuthContext";

interface IForgotPasswordProps {
  resetPassword: TResetPassword,
}

export const ForgotPasswordPage = ({ resetPassword }: IForgotPasswordProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [confirmMesasge, setConfirmMesasge] = useState(false);
  const [loading, setLoading] = useState(false);

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
      <TitleBox>
        <StyledAvatar variant="circular">
          <LockOutlinedIcon></LockOutlinedIcon>
        </StyledAvatar>
        <StyledTitle component="h1" variant="h5">
          Password Reset
        </StyledTitle>
      </TitleBox>
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
            Check your inbox for further instructions
          </Alert>
          {/* @ts-ignore*/}
          <Link to="/sign-in" variant="body2" underline="hover">
            Sign In
          </Link>
        </>
      ) : (
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
          <StyledButton
            variant="contained"
            fullWidth
            disabled={loading}
          >
            Reset Password
          </StyledButton>
          <HelpersBlock>
            {/* @ts-ignore*/}
            <Link href="/sign-in" variant="body2" underline="hover">
              Sign In
            </Link>
            {/* @ts-ignore*/}
            <Link href="/sign-up" variant="body2" underline="hover">
              Need an account? Sign Up
            </Link>
          </HelpersBlock>
        </FormBlock>
      )}
    </Container>
  );
};
