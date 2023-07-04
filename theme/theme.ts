"use client";

import { createTheme } from "@mui/material/styles";

export const darkthem = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1F6FFF",
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1F6FFF",
    },
  },
});
