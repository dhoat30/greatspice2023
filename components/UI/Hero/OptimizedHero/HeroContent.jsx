"use client";
import React from "react";

import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Image from "next/image";
import Link from "next/link";
import AnchorLightButton from "../../Buttons/AnchorLightButton";
import AnchorButton from "../../Buttons/AnchorButton";
export default function HeroContent({
  title,
  subtitle,
  description,
  ctaLink,
  className,
  callToAction,
}) {
  return (
    <Div className={className}>
      <div className="content-wrapper row-max ">
        {subtitle && <h2>{subtitle} </h2>}
        {title && <h1 className="font-serif">{title} </h1>}
        {callToAction.length > 0 && (
          <div className="btn-wrapper mt-8 flex gap-x-4">
            <AnchorButton href={callToAction[0].url}>
              {callToAction[0].label}
            </AnchorButton>
            {callToAction[1] && (
              <AnchorLightButton href={callToAction[1].url}>
                {callToAction[1].label}
              </AnchorLightButton>
            )}
          </div>
        )}
      </div>
    </Div>
  );
}

const Div = styled.div`
  /* position: absolute;
  top: 50%;
  left: 0%;
  z-index: 100; */

  .content-wrapper {
    h2 {
      color: var(--light-on-primary, #fff);
      /* material-theme/title/large */

      font-size: 1.5rem;
      line-height: 2rem;
      font-style: normal;
      font-weight: 500;
    }
    h1 {
      font-size: 4.5rem;
      line-height: 5rem;
      font-weight: 400;
      letter-spacing: 0.05em;
      color: var(--light-on-primary, #fff);
      @media (max-width: 600px) {
        font-size: 3rem;
        line-height: 3rem;
      }
    }
  }
  .subtitle {
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
  .title {
    margin: 8px 0;
  }
  @media (max-width: 600px) {
    .btn-wrapper {
      margin-top: 16px;
    }
  }
`;
