import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
function AnchorOutlinedButton({ href, children }) {
  return <LinkStyle href={href}>{children}</LinkStyle>;
}

export default AnchorOutlinedButton;
const LinkStyle = styled(Link)`
  border: 1px solid var(--material-theme-sys-light-outline-variant, #cec6b4);
  border-radius: 100px;
  padding: 10px 24px;
  color: var(--material-theme-sys-light-outline-variant, #cec6b4);

  &:hover {
    background: var(--material-theme-sys-dark-primary, #e7c446);
    color: var(--material-theme-sys-dark-on-primary, #3c2f00);
  }
`;
