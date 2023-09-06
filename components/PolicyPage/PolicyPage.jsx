"use client";
import { Typography } from "@mui/material";
import React from "react";
import { styled } from "styled-components";

export default function PolicyPage({ pageData }) {
  return (
    <Container className="row-max py-28">
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontWeight: "300 !important" }}
      >
        {pageData.title.rendered}
      </Typography>
      <div
        className="mt-8"
        dangerouslySetInnerHTML={{ __html: pageData.content.rendered }}
      ></div>
    </Container>
  );
}
const Container = styled.section`
  h2 {
    font-family: var(--font-neuton), serif;
    font-size: var(--material-theme--display--small);
    font-weight: 400;
    margin-top: 24px;
    letter-spacing: 1px;
    @media (max-width: 600px) {
      font-size: var(--material-theme--title--large);
    }
  }
  p,
  li {
    line-height: 1.8rem;
    margin-top: 8px;
    color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
  }
  strong {
    font-weight: 600;
  }
`;
