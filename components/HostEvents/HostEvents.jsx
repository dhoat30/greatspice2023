"use client";
import React from "react";
import HeroCentered from "../UI/Hero/HeroCentered";
import Slogan from "../UI/Slogan/Slogan";
import MobileCarouselSection from "./CarouselSection/MobileCarouselSection";
import CarouselSection from "./CarouselSection/CarouselSection";
import GuestReviewSection from "../homePage/GuestReviewSection/GuestReviewSection";
import MobileReviewSection from "../homePage/GuestReviewSection/MobileReviewSection";
import GallerySection from "../GalleryPage/GallerySection/GallerySection";

export default function HostEvents({
  eventsData,
  galleryData,
  guestReviewData,
}) {
  //   hero data
  const heroData = {
    title: eventsData.acf.hero_section.title,
    subtitle: eventsData.acf.hero_section.subtitle,
    desktopImage: eventsData.acf.hero_section.desktop_image,
    mobileImage: eventsData.acf.hero_section.mobile_image,
    callToAction:
      eventsData.acf.hero_section.call_to_action_group.call_to_action,
  };
  const slogan = eventsData.acf.slogan;

  // events data array
  const eventsDataArr = eventsData.acf.event_information.map((item) => {
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
  const sectionTitle = eventsData.acf.section_information.title;
  const sectionSubtitle = eventsData.acf.section_information.subtitle;


  return (
    <>
      <HeroCentered heroData={heroData} />
      <Slogan content={slogan} />

      <CarouselSection
        dataArray={eventsDataArr}
        sectionSubtitle={sectionSubtitle}
        sectionTitle={sectionTitle}
      />
      <MobileCarouselSection
        dataArray={eventsDataArr}
        sectionSubtitle={sectionSubtitle}
        sectionTitle={sectionTitle}
      />
 
      {/* gallery section  */}
      <GallerySection galleryData={galleryData} />
    </>
  );
}
