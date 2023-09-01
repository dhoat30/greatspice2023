"use client";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Hero from "../UI/Hero/Hero";
import MenuSection from "./MenuSection/MenuSection";
function HomePage({ homeData, menuData }) {
  const heroData = {
    title: homeData.acf.hero_section.title,
    subtitle: homeData.acf.hero_section.subtitle,
    desktopImage: homeData.acf.hero_section.desktop_image,
    mobileImage: homeData.acf.hero_section.mobile_image,
    callToAction: homeData.acf.hero_section.call_to_action_group.call_to_action,
  };
  // console.log(menuData);
  const menuDataArr = menuData.map((item) => {
    return {
      title: item.title.rendered,
      desktopImage: item.acf.images.desktop_image,
      mobileImage: item.acf.images.mobile_image,
      url: `/${item.slug}`,
    };
  });

  return (
    <>
      <Hero heroData={heroData} />
      <MenuSection menuData={menuDataArr} />
    </>
  );
}

export default HomePage;
