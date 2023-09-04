"use client";
import React from "react";
import HeroCentered from "../UI/Hero/HeroCentered";
import DirectorSection from "./DirectorSection/DirectorSection";
import AboutSection from "./AboutSection/AboutSection";

export default function AboutPage({ aboutData }) {
  // hero data
  const heroData = {
    title: aboutData.acf.hero_section.title,
    subtitle: aboutData.acf.hero_section.subtitle,
    desktopImage: aboutData.acf.hero_section.desktop_image,
    mobileImage: aboutData.acf.hero_section.mobile_image,
  };

  //   owner history
  const ownerHistoryData = {
    title: aboutData.acf.owner_history.title,
    image: aboutData.acf.owner_history.image,
    description: aboutData.acf.owner_history.content,
  };

  //   about data
  const aboutDataArr = {
    title: aboutData.acf.about_section.title,
    image: aboutData.acf.about_section.image,
    description: aboutData.acf.about_section.content,
  };
  console.log(aboutData);
  return (
    <>
      <HeroCentered heroData={heroData} />
      <DirectorSection directorData={ownerHistoryData} />
      <AboutSection aboutData={aboutDataArr} />
    </>
  );
}
