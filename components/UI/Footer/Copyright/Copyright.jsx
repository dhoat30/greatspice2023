import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function Copyright({
  privacyPolicyLink,
  termsAndConditionsLink,
  copyrightInfo,
}) {
  return (
    <Container className="row-max flex flex-wrap justify-between gap-2  py-2 pb-16 sm:py-2">
      <div className="links-wrapper flex divide-x flex-wrap">
        <div className="copyright-text pr-2"> {copyrightInfo} </div>
        <Link className="pr-2 pl-2" href={privacyPolicyLink}>
          Privacy Policy
        </Link>
        <Link className="pr-2 pl-2" href={termsAndConditionsLink}>
          Terms & Conditions
        </Link>
      </div>
      <div className="webduel">
        <a
          href="https://webduel.co.nz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed & Developed by web<strong>DUEL</strong>
        </a>
      </div>
    </Container>
  );
}
const Container = styled.div`
  color: var(--material-theme-sys-dark-on-surface, #cbc6bd);
  font-weight: 300;
  font-size: var(--material-theme--body--large);
`;
