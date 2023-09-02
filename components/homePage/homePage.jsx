"use client";

import Hero from "../UI/Hero/Hero";
import MenuSection from "./MenuSection/MenuSection";
import CarouselSection from "./CarouselSection/CarouselSection";
import MobileCarouselSection from "./CarouselSection/MobileCarouselSection";
import GuestReviewSection from "./GuestReviewSection/GuestReviewSection";
import MobileReviewSection from "./GuestReviewSection/MobileReviewSection";
function HomePage({
  homeData,
  menuData,
  specialsData,
  chefSpecialsData,
  guestReviewData,
}) {
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
        menuLink: item.menu_link,
        orderOnlineLink: item.order_online_link,
      };
    }
  );
  const sectionSubtitle = specialsData.acf.section_subtitle;
  const specialsCondition = specialsData.acf.condition;

  //chef specials data

  const chefSpecialsDataArr =
    chefSpecialsData.acf.specials.specials_content.map((item) => {
      return {
        title: item.title,
        description: item.description,
        image: item.image,
        menuLink: item.menu_link,
      };
    });
  const chefSectionSubtitle = chefSpecialsData.acf.subtitle;

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
      <Hero heroData={heroData} />
      <MenuSection menuData={menuDataArr} />
      {/* great specials sectoins  */}
      <CarouselSection
        dataArray={specialsDataArr}
        sectionSubtitle={sectionSubtitle}
        specialsCondition={specialsCondition}
        sectionTitle="Lunch Specials"
      />
      {/* mobile carousel section  */}
      <MobileCarouselSection
        dataArray={specialsDataArr}
        sectionSubtitle={sectionSubtitle}
        specialsCondition={specialsCondition}
        sectionTitle="Lunch Specials"
      />

      {/* chefs special sections  */}
      <CarouselSection
        dataArray={chefSpecialsDataArr}
        sectionSubtitle={chefSectionSubtitle}
        sectionTitle="Chef's Specials"
      />
      <MobileCarouselSection
        dataArray={chefSpecialsDataArr}
        sectionSubtitle={chefSectionSubtitle}
        sectionTitle="Chef's Specials"
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
  );
}

export default HomePage;
