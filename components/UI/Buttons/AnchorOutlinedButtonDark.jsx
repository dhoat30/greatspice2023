import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
function AnchorOutlinedButtonDark({ href, children }) {
  return <LinkStyle href={href}>{children}</LinkStyle>;
}

export default AnchorOutlinedButtonDark;
const LinkStyle = styled(Link)`
  border: 1px solid var(--material-theme-sys-light-outline, #7d7767);
  border-radius: 100px;
  padding: 10px 24px;
  color: var(--material-theme-sys-light-primary, #725c00);

  &:hover {
    background: var(--material-theme-sys-dark-primary, #e7c446);
    color: var(--material-theme-sys-dark-on-primary, #3c2f00);
  }
`;
