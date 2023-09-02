import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import ArrowIcon from "../Icons/ArrowIcon";
function AnchorLink({ href, children }) {
  return (
    <LinkStyle href={href}>
      {children}
      {/* <ArrowIcon /> */}
    </LinkStyle>
  );
}

export default AnchorLink;
const LinkStyle = styled(Link)`
  padding: 10px 24px;
  color: var(--material-theme-sys-light-primary, #725c00);
  text-decoration: underline;
  font-weight: 500;
  /* border-bottom: 1px solid var(--material-theme-sys-light-outline, #7d7767); */
  &:hover {
    color: var(--material-theme-sys-light-on-primary-container, #231b00);
  }
  /* svg {
    transform: rotate(90deg);
    margin-left: 4px;

    path {
      fill: var(--material-theme-sys-light-primary, #725c00);
    }
  } */
`;
