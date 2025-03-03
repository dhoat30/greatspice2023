"use client";

import Hero from "../UI/Hero/Hero";
import MenuSection from "../homePage/MenuSection/MenuSection";
import GuestReviewSection from "../homePage/GuestReviewSection/GuestReviewSection";
import MobileReviewSection from "../homePage/GuestReviewSection/MobileReviewSection";
function MenuArchivePage({ menuData, guestReviewData }) {
  // menu Data array
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
      <MenuSection menuData={menuDataArr} />

  
    </>
  );
}

export default MenuArchivePage;
