"use client";
import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import GuestReviewSection from "../homePage/GuestReviewSection/GuestReviewSection";
import styled from "styled-components";
import MobileReviewSection from "../homePage/GuestReviewSection/MobileReviewSection";
function ContactPage({ contactData, guestReviewData }) {
  const contactInfo = contactData.acf.contact_info;
  const openingHours = contactData.acf.opening_hours;
  const heroData = {
    desktopImage: contactData.acf.hero_section.desktop_image,
    mobileImage: contactData.acf.hero_section.mobile_image,
  };
  // google map
  const googleMapIframe = contactData.acf.contact_info.google_map;


  return (
    <>
      <HeroSection
        contactInfo={contactInfo}
        heroData={heroData}
        openingHours={openingHours}
      />

    
    </>
  );
}

export default ContactPage;
const GoogleMapContainer = styled.div`
  width: 100%;
  height: 450px;
  @media (max-width: 500px) {
    height: 300px;
  }
  iframe {
    width: 100%;
    @media (max-width: 500px) {
      height: 300px;
    }
  }
`;
