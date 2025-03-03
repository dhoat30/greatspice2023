"use client";
import GallerySection from "@/components/GalleryPage/GallerySection/GallerySection";
import HeroCentered from "@/components/UI/Hero/HeroCentered";
import GuestReviewSection from "@/components/homePage/GuestReviewSection/GuestReviewSection";
import MobileReviewSection from "@/components/homePage/GuestReviewSection/MobileReviewSection";
import React from "react";
import CarouselSection from "./CarouselSection/CarouselSection";
import MobileCarouselSection from "./CarouselSection/MobileCarouselSection";

export default function CateringPackages({
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

  // events data array
  const pageDataArr = pageData.acf.card_information.map((item) => {
    return {
      title: item.title,
      description: item.description,
      backgroundColor: item.background_color,
      menuItems: item.menu_items,
      packageName: item.package_name,
      callToAction: {
        label: item.call_to_action.label,
        url: item.call_to_action.url,
      },
    };
  });
  const sectionTitle = pageData.acf.section_information.title;
  const sectionSubtitle = pageData.acf.section_information.subtitle;

 

  return (
    <>
      {/* hero section  */}
      <HeroCentered heroData={heroData} />
      {/* carousel section  */}
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
   
      <GallerySection galleryData={galleryData} />
    </>
  );
}
