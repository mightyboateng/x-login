"use client";
import React, { useEffect } from "react";
import { Apple, Google, Twitter } from "@mui/icons-material";
import Image from "next/image";
import DarkLogo from "@/public/images/logo-dark.svg";
import Background from "../../public/images/landing-page-img.png";
import { useTheme } from "next-themes";

const LandingPage = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setTheme("system");
  });

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="show-landing-page">
      <div className="show-main">
        <div className="show-photo">Photo Section</div>
        <div className="show-content">Content Section</div>
      </div>

      <div className="show-mini-footer">Mini footer section</div>
    </div>
  );
};

export default LandingPage;
