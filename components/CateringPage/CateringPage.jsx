"use client";
import React from "react";
import HeroCentered from "../UI/Hero/HeroCentered";
import Slogan from "../UI/Slogan/Slogan";
import MobileCarouselSection from "../HostEvents/CarouselSection/MobileCarouselSection";
import CarouselSection from "../HostEvents/CarouselSection/CarouselSection";
import GuestReviewSection from "../homePage/GuestReviewSection/GuestReviewSection";
import MobileReviewSection from "../homePage/GuestReviewSection/MobileReviewSection";
import GallerySection from "../GalleryPage/GallerySection/GallerySection";

export default function CateringPage({
  pageData,
  galleryData,
  guestReviewData,
}) {
  //   hero data
  const heroData = {
    title: pageData.acf.hero_section.title,
    subtitle: pageData.acf.hero_section.subtitle,
    desktopImage: pageData.acf.hero_section.desktop_image,
    mobileImage: pageData.acf.hero_section.mobile_image,
    callToAction: pageData.acf.hero_section.call_to_action_group.call_to_action,
  };
  const slogan = pageData.acf.slogan;

  // events data array
  const pageDataArr = pageData.acf.event_information.map((item) => {
    return {
      title: item.title,
      description: item.description,
      image: item.image,
      callToAction: {
        label: item.call_to_action.label,
        url: item.call_to_action.url,
      },
    };
  });
  const sectionTitle = pageData.acf.section_information.title;
  const sectionSubtitle = pageData.acf.section_information.subtitle;

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
  const guestReviewSectionTitle = guestReviewData.title.rendered;
  return (
    <>
      <HeroCentered heroData={heroData} />
      <Slogan content={slogan} />

      <CarouselSection
        dataArray={pageDataArr}
        sectionSubtitle={sectionSubtitle}
        sectionTitle={sectionTitle}
      />
      <MobileCarouselSection
        dataArray={pageDataArr}
        sectionSubtitle={sectionSubtitle}
        sectionTitle={sectionTitle}
      />
      {/* review section  */}
      <GuestReviewSection
        dataArray={guestReviewDataArr}
        sectionTitle={guestReviewSectionTitle}
        sectionImage={guestReviewSectionImage}
      />
      <MobileReviewSection
        dataArray={guestReviewDataArr}
        sectionTitle={guestReviewSectionTitle}
      />
      {/* gallery section  */}
      <GallerySection galleryData={galleryData} />
    </>
  );
}
