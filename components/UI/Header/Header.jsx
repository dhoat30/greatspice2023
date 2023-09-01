import React from "react";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar/Navbar";
import { headerLinks } from "./headerLinks";
import styled from "styled-components";
import CtaButtons from "./CtaButtons/CtaButtons";
function Header({ contactData }) {
  console.log(contactData);
  const logoSrc = contactData.acf.logo.url;

  return (
    <Container className="bg-surface-2-dark">
      <div className="flex flex-row container xl mx-auto items-center">
        <Link className="logo" href="/">
          <Image
            src={logoSrc}
            width="148"
            height="56"
            alt="Great Spice Tauranga Logo"
          />
        </Link>
        <Navbar menuLinks={headerLinks} className="flex-1" />
        <CtaButtons />
      </div>
    </Container>
  );
}

export default Header;
const Container = styled.header`
  background-color: var(--material-theme--surfaces--dark--surface3);
`;
