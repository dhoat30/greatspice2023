"use client";
import React from "react";
import TextHero from "../UI/Hero/TextHero";
import CategoryFilters from "../UI/Filters/CategoryFilters";
import MenuCategorySection from "./MenuCategorySection/MenuCategorySection";
import MobileFilters from "../UI/Filters/MobileFilters";
function MenuPage({ singleMenuData, orderOnlineLink }) {
  //   hero section
  const ctaDataArray = [
    {
      label: "Book a Table",
      url: "/reservation",
    },
  ];

  //filters data
  const filtersData = singleMenuData.acf.menu_category.map((item) => {
    const str = item.acf_fc_layout;
    // Replace underscores with spaces
    const stringWithSpaces = str.replace(/_/g, " ");
    // Capitalize each word
    const capitalizedString = stringWithSpaces.replace(/\b\w/g, (char) =>
      char.toUpperCase()
    );
    return {
      label: capitalizedString,
      value: item.acf_fc_layout,
    };
  });

  return (
    <>
      <TextHero
        title={singleMenuData.title.rendered}
        subtitle={singleMenuData.acf.subtitle}
        buttonArray={ctaDataArray}
      />
      <div
        style={{
          background:
            "var(--material-theme-sys-light-surface-container-low, #F9F3EA)",
        }}
      >
        <div className="row-max  gap-x-24 md:flex  ">
          <CategoryFilters filterArray={filtersData} />
          <MobileFilters filterArray={filtersData} />
          <MenuCategorySection
            menuDataArray={singleMenuData.acf.menu_category}
          />
        </div>
      </div>
    </>
  );
}

export default MenuPage;
