"use client";

import { ThemeProvider } from "next-themes";

const CustomThemeProvider = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
