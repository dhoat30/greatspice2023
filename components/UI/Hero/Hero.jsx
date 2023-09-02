import Image from "next/image";
import React from "react";
import styled from "styled-components";
import AnchorButton from "../Buttons/AnchorButton";
import AnchorOutlinedButtonDark from "../Buttons/AnchorOutlinedButtonDark";
import AnchorLightButton from "../Buttons/AnchorLightButton";
function Hero({ heroData }) {
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

export default Hero;
