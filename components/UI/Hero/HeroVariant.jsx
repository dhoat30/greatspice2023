import Image from "next/image";
import React from "react";
import styled from "styled-components";
import AnchorButton from "../Buttons/AnchorButton";
import AnchorOutlinedButtonDark from "../Buttons/AnchorOutlinedButtonDark";
import AnchorLightButton from "../Buttons/AnchorLightButton";
function HeroVariant({ heroData }) {
  return (
    <Container>
      <div className="desktop-wrapper hidden lg:block">
        <div className="image-container">
          <div className="overlay"></div>
          <Image
            src={heroData.desktopImage.url}
            alt={heroData.desktopImage.alt}
            fill
            priority
          />
        </div>
        <div className="content-wrapper row-max ">
          {heroData.subtitle && <h2 className="mb-2">{heroData.subtitle} </h2>}
          {heroData.title && <h1 className="font-serif">{heroData.title} </h1>}
          {heroData.callToAction && (
            <div className="btn-wrapper mt-12 flex gap-x-4">
              <AnchorButton href={heroData.callToAction[0].url}>
                {heroData.callToAction[0].label}
              </AnchorButton>
              {heroData.callToAction[1] && (
                <AnchorLightButton href={heroData.callToAction[1].url}>
                  {heroData.callToAction[1].label}
                </AnchorLightButton>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mobile-wrapper lg:hidden">
        <div className="image-container">
          <Image
            src={heroData.mobileImage.url}
            alt={heroData.mobileImage.alt}
            fill
            priority
          />
        </div>
        <div className="content-wrapper p-6 border-r-12">
          {heroData.subtitle && (
            <h2 className="mb text-center">{heroData.subtitle} </h2>
          )}
          {heroData.title && (
            <h1 className="font-serif text-center">{heroData.title} </h1>
          )}
          {heroData.callToAction && (
            <div className="btn-wrapper mt-8 ">
              <AnchorButton href={heroData.callToAction[0].url}>
                {heroData.callToAction[0].label}
              </AnchorButton>
              {heroData.callToAction[1] && (
                <AnchorOutlinedButtonDark href={heroData.callToAction[1].url}>
                  {heroData.callToAction[1].label}
                </AnchorOutlinedButtonDark>
              )}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default HeroVariant;
const Container = styled.section`
  .desktop-wrapper {
    position: relative;
    width: 100%;
    height: 500px;
    .image-container {
      .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          180deg,
          #000 0%,
          rgba(0, 0, 0, 0.33) 59.9%,
          rgba(0, 0, 0, 0) 100%
        );
        z-index: 10;
      }
      position: relative;
      width: 100%;
      height: 100%;
      img {
        object-fit: cover;
      }
    }
    .content-wrapper {
      width: 100%;
      position: relative;
      top: -50%;

      z-index: 11;
      transform: translate(-0%, -50%);
      @media (max-width: 1376px) {
        left: 8px;
      }
      @media (max-width: 1024px) {
        width: 100%;
      }
      h2 {
        color: var(--material-theme-sys-light-on-primary, #fff);
        /* material-theme/title/large */

        font-size: var(--material-theme--headline--medium);
        line-height: 2.5rem;
        font-style: normal;
        font-weight: 500;
        text-align: center;
      }
      h1 {
        font-size: 5rem;
        line-height: 5.5rem;
        font-weight: 300;
        color: var(--material-theme-sys-light-on-primary, #fff);
        text-align: center;
      }
    }
  }
  .mobile-wrapper {
    position: relative;
    width: 100%;
    height: 320px;

    .image-container {
      position: relative;
      width: 100%;
      height: 100%;
      img {
        object-fit: cover;
        border-radius: 12px !important;
      }
    }
    .content-wrapper {
      width: 90%;
      position: absolute;
      top: 180px;
      z-index: 11;
      border-radius: 12px;
      background: var(
        --material-theme-sys-light-surface-container-low,
        #f9f3ea
      );
      @media (max-width: 1376px) {
        left: 50%;
        transform: translate(-50%, -0%);
      }

      h2 {
        color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
        /* material-theme/title/large */
        font-size: var(--material-theme--title--medium);
        line-height: 1.5rem;
        font-style: normal;
        font-weight: 500;
      }
      h1 {
        font-size: var(--material-theme--headline--medium);
        line-height: 2rem;
        letter-spacing: 4px;
        font-weight: 400;
        color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
      }
      .btn-wrapper {
        display: flex;
        justify-content: center;
        gap: 16px;
        @media (max-width: 450px) {
          flex-wrap: wrap;
        }
      }
    }
  }
`;
