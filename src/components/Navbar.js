import React from "react";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StyledButton from "../components/Button/Button";
import { AccountCircle } from "@mui/icons-material";
import { StyledNavbar, StyledToolbar } from "./styles/Navbar.styled";

// const StyledToolbar = styled(Toolbar)({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
// });

export default function Navbar(props) {
  return (
    <StyledNavbar>
      <StyledToolbar>
        <Typography component="h6">
          <strong>Welcome to Activity Tracker</strong>
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <StyledButton onClick={props.onLogout}>Log out</StyledButton>
        </Box>
      </StyledToolbar>
    </StyledNavbar>
  );
}
