"use client";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Hero from "../UI/Hero/Hero";
import MenuSection from "./MenuSection/MenuSection";
import CarouselSection from "./CarouselSection/CarouselSection";
function HomePage({ homeData, menuData, specialsData }) {
  // hero data
  const heroData = {
    title: homeData.acf.hero_section.title,
    subtitle: homeData.acf.hero_section.subtitle,
    desktopImage: homeData.acf.hero_section.desktop_image,
    mobileImage: homeData.acf.hero_section.mobile_image,
    callToAction: homeData.acf.hero_section.call_to_action_group.call_to_action,
  };

  // menu Data array
  const menuDataArr = menuData.map((item) => {
    return {
      title: item.title.rendered,
      desktopImage: item.acf.images.desktop_image,
      mobileImage: item.acf.images.mobile_image,
      url: `/${item.slug}`,
    };
  });

  // specials data array
  const specialsDataArr = specialsData.acf.specials.special_content.map(
    (item) => {
      return {
        title: item.special_title,
        description: item.special_description,
        image: item.image,
        specialType: item.special_type[0],
        takeawayOrDineIn: item.takeaway_or_dine_in[0],
      };
    }
  );

  return (
    <>
      <Hero heroData={heroData} />
      <MenuSection menuData={menuDataArr} />
      <CarouselSection specialsData={specialsDataArr} />
      <h1 className="mt-2">hello</h1>
    </>
  );
}

export default HomePage;
