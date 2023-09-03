import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
function Button({ onClick, children, align }) {
  return (
    <Container onClick={onClick} align={align}>
      {children}
    </Container>
  );
}

export default Button;
const Container = styled.button`
  background: var(--material-theme-sys-dark-primary, #e7c446);
  border-radius: 100px;
  padding: 10px 24px;
  color: var(--material-theme-sys-dark-on-primary, #3c2f00);
  margin: ${(props) => (props.align === "right" ? "0 0 0 auto" : "0")};
  display: block;
  &:hover {
    background: var(--material-theme-ref-primary-primary-70, #c9a82c);
  }
`;
