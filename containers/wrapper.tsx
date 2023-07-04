"use client";

import React, { useState } from "react";
import { darkthem, lightTheme } from "@/theme/theme";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Header from "@/components/Header";
const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const switchTheam = () => {
    setIsDark(!isDark);
  };
  return (
    <div>
      <ThemeProvider theme={isDark ? darkthem : lightTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CssBaseline />
          <Header switchTheme={switchTheam} />
          {children}
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
};

export default Wrapper;
