"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Slider from "react-slick";
import { Divider } from "@mui/material";
import AnchorOutlinedButtonDark from "@/components/UI/Buttons/AnchorOutlinedButtonDark";
function GallerySection({ galleryData }) {
  const cards = galleryData.acf.gallery[0].gallery_images.map(
    (image, index) => {
      if (index > 5) return;
      return (
        <div className="image-wrapper col-span-4 ">
          <Image
            key={index}
            src={image.url}
            alt={image.alt ? image.alt : image.title}
            fill
          />
        </div>
      );
    }
  );
  return (
    <Container className="py-28 hidden md:block">
      <div className="row-max wrapper">
        <div className="content-wrapper">
          <h3 className="font-serif"> Gallery</h3>
          <div className="subtitle-wrapper">
            <h4>Experience Great Spice, one snapshot at a time.</h4>
          </div>
        </div>
        <Divider sx={{ borderColor: "#7D7767", marginTop: "24px" }} />

        <div className=" grid grid-cols-12 gap-2 mt-12">{cards}</div>
        <div className="flex justify-center mt-8">
          <AnchorOutlinedButtonDark href="/gallery">
            Gallery
          </AnchorOutlinedButtonDark>
        </div>
      </div>
    </Container>
  );
}

export default GallerySection;

const Container = styled.section`
  background: var(--material-theme-sys-light-surface-container-low, #f9f3ea);

  .wrapper {
    .content-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      h3 {
        color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
        font-size: var(--desktop-display);
        font-weight: 300;
        letter-spacing: 2px;
        line-height: 5rem;
      }
      .subtitle-wrapper {
        width: 35%;
        h4,
        h6 {
          color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
        }
        h4 {
          font-size: var(--material-theme--body--large);
        }
        h6 {
          font-size: var(--material-theme--label--large);
        }
      }
    }
  }
  .image-wrapper {
    width: 100%;
    height: 400px;

    position: relative;
    img {
      cursor: pointer;
      transition: 0.3s;
      object-fit: cover;
    }
  }
`;
