"use client";
import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import GuestReviewSection from "../homePage/GuestReviewSection/GuestReviewSection";
import MobileReviewSection from "../homePage/GuestReviewSection/MobileReviewSection";

function EnquireNowPage({ contactData, guestReviewData, pageData }) {
  const contactInfo = contactData.acf.contact_info;
  const openingHours = contactData.acf.opening_hours;
  const heroData = {
    desktopImage: pageData.acf.hero_section.desktop_image,
    mobileImage: pageData.acf.hero_section.mobile_image,
    title: pageData.acf.hero_section.title,
    subtitle: pageData.acf.hero_section.subtitle,
  };


  return (
    <>
      <>
        <HeroSection
          contactInfo={contactInfo}
          heroData={heroData}
          openingHours={openingHours}
        />
   
      </>
    </>
  );
}

export default EnquireNowPage;
