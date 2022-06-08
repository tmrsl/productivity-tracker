import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        margin: "0 auto",
        padding: "0 40px",
        background: "rgb(225,228,240)",
        background:
          "radial-gradient(circle, rgba(225,228,240,1) 0%, rgba(190,188,233,1) 100%)",
      }}
    >
      <Box
        sx={{
          height: "100%",
          maxWidth: "1200px",
          width: "100%",
          display: "grid",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "none", md: "40px" },
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Outlet />
        </Box>

        <Box
          sx={{
            maxWidth: {
              xs: "300px",
              md: "520px",
            },
            margin: "0 auto",
          }}
        >
          <img src="/start-page.svg" alt="start-page-icon" loading="lazy" />
        </Box>
      </Box>
    </Box>
  );
}
