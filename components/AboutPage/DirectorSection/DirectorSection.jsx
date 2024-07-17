import { Paper } from "@mui/material";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function DirectorSection({ directorData }) {
  return (
    <Container>
      <Paper elevation={3} className="row-max" sx={{ borderRadius: "12px" }}>
        <div className="wrapper grid lg:grid-cols-12  lg:gap-16 align-center p-2 sm:p-6 lg:p-12">
          <div className="image-wrapper col-span-6">
            <Image
              src={directorData.image.url}
              alt={
                directorData.image.alt
                  ? directorData.image.alt
                  : directorData.title
              }
              fill
            />
          </div>
          <div className="content-wrapper lg:col-span-6 self-center mt-6 lg:mt-0">
            <h2 className="title-wrapper font-serif font-medium text-3xl tracking-widest mb-4">
              {directorData.title}
            </h2>
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: directorData.description }}
            ></div>
          </div>
        </div>
      </Paper>
    </Container>
  );
}
const Container = styled.section`
  position: relative;
  top: -200px;
  @media (max-width: 1024px) {
    top: 0;
  }
  @media (max-width: 500px) {
    top: -50px;
  }
  .wrapper {
    .image-wrapper {
      position: relative;
      width: 100%;
      height: 700px;
      @media (max-width: 500px) {
        height: 400px;
      }
      img {
        object-fit: cover;
        object-position: center;
      }
    }
    .content-wrapper {
      height: auto;
      .title-wrapper {
      }
      .description {
        color: var(--light-on-surface-variant, #4c4639);
        font-size: var(--material-theme--body--large);
        p {
          margin: 16px 0;
          line-height: 1.8rem;
        }
      }
    }
  }
`;
