"use client";
import React from "react";
import GuestReviewSection from "../homePage/GuestReviewSection/GuestReviewSection";
import MobileReviewSection from "../homePage/GuestReviewSection/MobileReviewSection";
import MuiAccordion from "../UI/Accordion/CustomAccordion";
import FaqAccordionSection from "./FaqAccordionSection.jsx/FaqAccordionSection";
import HeroVariant from "../UI/Hero/HeroVariant";

function FaqPage({ faqData, guestReviewData }) {
  // hero data
  const heroData = {
    title: "Frequently Asked Questions",
    subtitle: "",
    desktopImage: faqData.acf.hero_images.desktop_image,
    mobileImage: faqData.acf.hero_images.mobile_image,
  };

  return (
    <>
      <HeroVariant heroData={heroData} />
      <FaqAccordionSection qaData={faqData.acf.qa} />
    
    </>
  );
}

export default FaqPage;
