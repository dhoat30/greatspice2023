"use client";
import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import GuestReviewSection from "../homePage/GuestReviewSection/GuestReviewSection";
import MobileReviewSection from "../homePage/GuestReviewSection/MobileReviewSection";

function EnquireNowPage({ contactData, guestReviewData, pageData }) {
  console.log(pageData);
  // console.log(contactData);
  const contactInfo = contactData.acf.contact_info;
  const openingHours = contactData.acf.opening_hours;
  const heroData = {
    desktopImage: pageData.acf.hero_section.desktop_image,
    mobileImage: pageData.acf.hero_section.mobile_image,
    title: pageData.acf.hero_section.title,
    subtitle: pageData.acf.hero_section.subtitle,
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
  const guestReviewSectionImage = guestReviewData.acf.image;
  const sectionTitle = guestReviewData.title.rendered;

  return (
    <>
      <>
        <HeroSection
          contactInfo={contactInfo}
          heroData={heroData}
          openingHours={openingHours}
        />
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
    </>
  );
}

export default EnquireNowPage;
