import React from "react";
import CarouselSection from "../homePage/CarouselSection/CarouselSection";
import MobileCarouselSection from "../homePage/CarouselSection/MobileCarouselSection";

export default function SpecialsPage({
  specialsData,
  chefSpecialsData,
  guestReviewData,
}) {
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

  return (
    <>
      {/* lunch specials  */}
      <CarouselSection
        dataArray={specialsDataArr}
        sectionSubtitle={sectionSubtitle}
        specialsCondition={specialsCondition}
        sectionTitle="Lunch Specials"
      />
      <MobileCarouselSection
        className="mt-8"
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
    </>
  );
}
