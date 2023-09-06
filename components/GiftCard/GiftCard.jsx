"use client";
import React from "react";
import HeroVariant from "../UI/Hero/HeroVariant";
import Slogan from "../UI/Slogan/Slogan";
import Image from "next/image";
import styled from "styled-components";
export default function GiftCard({ pageData }) {
  console.log(pageData);
  const heroData = {
    title: pageData.acf.hero_section.title,
    subtitle: pageData.acf.hero_section.sub_title,
    desktopImage: pageData.acf.hero_section.desktop_section,
    mobileImage: pageData.acf.hero_section.mobile_image,
  };
  const slogan = pageData.acf.slogan;
  const restAssociationData = {
    title: pageData.acf.restaurant_association_section.title,
    image: pageData.acf.restaurant_association_section.image,
  };
  return (
    <>
      <HeroVariant heroData={heroData} />
      <Slogan content={slogan} />

      <ImageContainer className="row-max">
        <div className="image-wrapper">
          <Image
            src={pageData.acf.image.url}
            alt={
              pageData.acf.image.alt
                ? pageData.acf.image.alt
                : pageData.title.rendered
            }
            fill
          />
        </div>
      </ImageContainer>
      <ImageContainer className="row-max py-8 lg:py-28">
        <h2 className="font-serif pb-8"> {restAssociationData.title}</h2>
        <div className="image-wrapper ">
          <Image
            src={restAssociationData.image.url}
            alt={
              restAssociationData.image.alt
                ? restAssociationData.image.alt
                : restAssociationData.title
            }
            fill
          />
        </div>
      </ImageContainer>
    </>
  );
}

const ImageContainer = styled.div`
  .image-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 54%;
  }
  img {
    object-fit: cover;
  }
  h2 {
    font-size: var(--material-theme--display--large);
    text-align: center;
    line-height: 3.5rem;
    @media (max-width: 1024px) {
      font-size: var(--material-theme--headline--medium);
      line-height: 2rem;
    }
  }
`;
