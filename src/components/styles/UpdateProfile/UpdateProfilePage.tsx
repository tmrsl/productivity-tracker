import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User } from "firebase/auth";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {
  FormBlock,
  HelpersBlock,
  InputlBlock,
  StyledAccountCircle,
  StyledAvatar,
  StyledButton,
  StyledKey,
  TitleBlock
} from "./UpdateProfilePage.styled";
import { TUpdateUserCredentials } from "../../../context/AuthContext";

interface IUpdateProfileProps {
  currentUser: User,
  updateUserCredentials: TUpdateUserCredentials,
}

export const UpdateProfilePage = ({ currentUser, updateUserCredentials }: IUpdateProfileProps) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passConfrim, setPassConfrim] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [loading, setLoading] = useState(false);

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
    updateUserCredentials({ email, password })
      .then(() => {
        setSuccessMsg(true);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <TitleBlock>
        {/* @ts-ignore*/}
        <StyledAvatar variant="circular">
          <LockOutlinedIcon></LockOutlinedIcon>
        </StyledAvatar>
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Update Profile
        </Typography>
      </TitleBlock>
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
      <FormBlock onSubmit={submitHandler}>
        <InputlBlock>
          <StyledAccountCircle />
          <TextField
            id="displayName"
            label="Full name"
            type="text"
            variant="standard"
            fullWidth
            value={displayName}
            required
           // @ts-ignore
            onInput={(evt) => setDisplayName(evt.target.value)}
          />
        </InputlBlock>
        <InputlBlock>
          <StyledAccountCircle />
          <TextField
            id="email"
            label="E-mail"
            type="email"
            variant="standard"
            fullWidth
            autoComplete="email"
            value={email}
            required
            // @ts-ignore
            onInput={(evt) => setEmail(evt.target.value)}
          />
        </InputlBlock>
        <InputlBlock>
          <StyledKey />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="standard"
            fullWidth
            placeholder="Leave blank to keep the same"
            value={password}
             // @ts-ignore
            onInput={(evt) => setPassword(evt.target.value)}
          />
        </InputlBlock>
        <InputlBlock>
          <StyledKey />
          <TextField
            sx={{ mb: 1 }}
            id="confirmPassword"
            label="Password Confirmation"
            type="password"
            variant="standard"
            fullWidth
            placeholder="Leave blank to keep the same"
            value={passConfrim}
            // @ts-ignore
            onInput={(evt) => setPassConfrim(evt.target.value)}
          />
        </InputlBlock>
        <StyledButton
          variant="contained"
          fullWidth
          disabled={loading}
        >
          Update
        </StyledButton>
        <HelpersBlock>
          {/* @ts-ignore*/}
          <Link to="/" variant="body2" underline="hover">
            Cancel
          </Link>
        </HelpersBlock>
      </FormBlock>
    </Container>
  );
};
