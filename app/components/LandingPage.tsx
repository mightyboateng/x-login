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
    <div className="landing-page">
      <div className="main-content">
        <div className="photo-section">
          <div className="bg-photo">
            {/* <Image src={Background} className="background-img" alt="logo" /> */}
            {/* <Twitter />
          <Image src={DarkLogo} alt="logo" /> */}

            <svg viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
            </svg>

            {/* <DarkLogo /> */}
          </div>
        </div>
        <div className="content-section">
          {/* <Twitter /> */}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>

          <h1>Happening now</h1>

          <h4>Join Twitter today.</h4>

          <button>
            <Google /> Sign in with Google
          </button>
          <button>
            <Apple /> Sign in with Apple
          </button>

          <div className="or-line">or</div>

          <button className="create-btn">Create account</button>
          <p className="policy">
            By signing up, you agree to the <span>Terms of Service</span> and
            <span> Privacy Policy,</span> including <span>Cookie Use.</span>
          </p>

          <h4 className="already-account">Already have an account</h4>
          <button className="already-account-btn" onClick={switchTheme}>
            Create account
          </button>
        </div>
      </div>

      <div className="min-footer">
        <span>About</span>
        <span>Help Center</span>
        <span>Term of Service</span>
        <span>Privacy Policy</span>
        <span>Cookies</span>
        <span>Accessibility</span>
        <span>Ads Info</span>
        <span>Blog</span>
        <span>Status</span>
        <span>Careers</span>
        <span>Brand Resources</span>
        <span>Advertising</span>
        <span>Marketing</span>
        <span>Twitter for Business</span>
        <span>Developers</span>
        <span>Directory</span>
        <span>Settings</span>
        <span>2023 X Corp.</span>
      </div>
    </div>
  );
};

export default LandingPage;
