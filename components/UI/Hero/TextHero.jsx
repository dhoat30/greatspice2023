import Image from "next/image";
import React from "react";
import styled from "styled-components";
import AnchorButton from "../Buttons/AnchorButton";
import AnchorOutlinedButtonDark from "../Buttons/AnchorOutlinedButtonDark";
import AnchorLightButton from "../Buttons/AnchorLightButton";

function TextHero({ title, subtitle, buttonArray }) {
  return (
    <Container>
      <div className="content-wrapper row-max py-12 lg:py-28">
        {subtitle && <h2 className="mb">{subtitle} </h2>}
        {title && <h1 className="font-serif">{title} </h1>}
        {buttonArray && (
          <div className="btn-wrapper mt-8 flex gap-x-4 justify-center">
            <AnchorButton href={buttonArray[0].url}>
              {buttonArray[0].label}
            </AnchorButton>
            {buttonArray[1] && (
              <AnchorLightButton href={buttonArray[1].url}>
                {buttonArray[1].label}
              </AnchorLightButton>
            )}
          </div>
        )}
      </div>
    </Container>
  );
}

export default TextHero;
const Container = styled.section`
  color: var(--light-on-surface-variant, #4c4639);
  text-align: center;
  .content-wrapper {
    h2 {
      /* material-theme/title/large */

      font-size: var(--material-theme--title--large);
      line-height: 2.5rem;
      font-style: normal;
      font-weight: 400;
    }
    h1 {
      font-size: 5rem;
      line-height: 5.5rem;
      font-weight: 400;
      letter-spacing: 4px;
    }
  }
`;
