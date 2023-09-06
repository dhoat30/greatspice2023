import React from "react";
import styled from "styled-components";
function Slogan({ content }) {
  return (
    <Container
      className="row-max  py-8 lg:py-28 lg:px-28"
      dangerouslySetInnerHTML={{ __html: content }}
    ></Container>
  );
}

export default Slogan;
const Container = styled.div`
  text-align: center;
  color: var(--material-theme-sys-light-outline, #7d7767);
  font-weight: 400;
  font-size: var(--material-theme--display--small);
  strong {
    color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
  }
  @media (max-width: 640px) {
    font-size: var(--material-theme--headline--medium);
  }
  @media (max-width: 400px) {
    font-size: var(--material-theme--title--large);
  }
`;
