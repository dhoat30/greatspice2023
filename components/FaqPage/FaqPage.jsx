"use client";
import React from "react";
import GuestReviewSection from "../homePage/GuestReviewSection/GuestReviewSection";
import MobileReviewSection from "../homePage/GuestReviewSection/MobileReviewSection";
import MuiAccordion from "../UI/Accordion/CustomAccordion";
import FaqAccordionSection from "./FaqAccordionSection.jsx/FaqAccordionSection";
import HeroVariant from "../UI/Hero/HeroVariant";

function FaqPage({ faqData, guestReviewData }) {
  console.log(faqData.acf.hero_images);
  // hero data
  const heroData = {
    title: "Frequently Asked Questions",
    subtitle: "",
    desktopImage: faqData.acf.hero_images.desktop_image,
    mobileImage: faqData.acf.hero_images.mobile_image,
  };
  // guest review data
  const guestReviewDataArr =
    guestReviewData.acf.reviews_section.review_content.map((item) => {
      return {
        image: item.guest_image,
        title: item.guest_name,
        description: item.review_text,
      };
    });
  const guestReviewSectionSubtitle = guestReviewData.acf.subtitle;
  const guestReviewSectionImage = guestReviewData.acf.image;
  const sectionTitle = guestReviewData.title.rendered;
  return (
    <>
      <HeroVariant heroData={heroData} />
      <FaqAccordionSection qaData={faqData.acf.qa} />
      {/* guest review section  */}
      <GuestReviewSection
        dataArray={guestReviewDataArr}
        sectionTitle={sectionTitle}
        sectionImage={guestReviewSectionImage}
      />

      <MobileReviewSection
        dataArray={guestReviewDataArr}
        sectionTitle={sectionTitle}
      />
    </>
  );
}

export default FaqPage;
