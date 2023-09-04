"use client";
import React from "react";
import HeroVariant from "../UI/Hero/HeroVariant";
import ReservationForm from "../UI/Forms/ReservationForm";

export default function ReservationPage({
  pageData,
  guestReviewData,
  galleryData,
}) {
  // hero data
  const heroData = {
    title: pageData.acf.hero_section.title,
    subtitle: pageData.acf.hero_section.subtitle,
    desktopImage: pageData.acf.hero_section.desktop_image,
    mobileImage: pageData.acf.hero_section.mobile_image,
  };
  //reservation form
  const reservationFormIframe = pageData.acf.reservation_form;
  return (
    <>
      <HeroVariant heroData={heroData} />
      <ReservationForm reservationFormIframe={reservationFormIframe} />
    </>
  );
}
