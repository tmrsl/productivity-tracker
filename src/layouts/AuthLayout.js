import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <Box
      sx={{
        height: "100%",
        maxWidth: "1200px",
        width: "100%",
        display: "grid",
        gap: "40px",
        gridTemplateColumns: {
          sm: "1fr",
          md: "1fr 1fr",
        },
        margin: "0 auto",
        padding: "0 40px",
      }}
    >
      <Box
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          alignItems: "center",
        }}
      >
        <img
          src="/undraw_access_account_re_8spm.svg"
          srcSet=""
          alt=""
          loading="lazy"
          style={{ maxWidth: "520px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
