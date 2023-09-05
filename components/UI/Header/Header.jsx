"use client";
import "../../../app/globals.css";
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar/Navbar";
import { headerLinks } from "./headerLinks";
import styled from "styled-components";
import CtaButtons from "./CtaButtons/CtaButtons";
import MenuIcon from "../Icons/MenuIcon";
import CloseIcon from "../Icons/CloseIcon";
import { Typography } from "@mui/material";
import MobileDrawer from "./MobileDrawer/MobileDrawer";
import AnchorButton from "../Buttons/AnchorButton";
function Header({ contactData }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const logoSrc = contactData.acf.logo.url;

  return (
    <Container>
      <div className="row-max flex flex-row  items-center desktop-header ">
        <Link className="logo" href="/">
          <Image
            src={logoSrc}
            width="148"
            height="56"
            alt="Great Spice Tauranga Logo"
          />
        </Link>
        <Navbar menuLinks={headerLinks} className="flex-1" />
        {/* <CtaButtons /> */}
        <AnchorButton href="/">Order Online</AnchorButton>
      </div>
      <div className="mobile-header px-2 flex flex-row row-max items-center justify-between">
        {/* icons to toggle the menu  */}
        <MobileDrawer menuLinks={headerLinks} />

        {/* <Typography
          variant="h6"
          sx={{
            color:
              "var(--material-theme-sys-light-inverse-on-surface, #F6F0E7)",
          }}
          className="flex-1 text-center"
        >
          Home
        </Typography> */}
        <Image
          src={logoSrc}
          width="103"
          height="39"
          alt="Great Spice Tauranga Logo"
        />
      </div>
    </Container>
  );
}

export default Header;
const Container = styled.header`
  background-color: var(--material-theme--surfaces--dark--surface3);
  padding: 4px 0;
  .desktop-header {
    @media (max-width: 1024px) {
      display: none;
    }
  }
  .mobile-header {
    background-color: var(--material-theme--surfaces--dark--surface3);
    position: fixed;
    left: -8px;
    top: 0;
    width: 100%;
    z-index: 100;
    height: auto;
    display: none;
    @media (max-width: 1024px) {
      display: flex;
    }
    svg {
      path {
        fill: #f6f0e7;
      }
    }
  }
`;
