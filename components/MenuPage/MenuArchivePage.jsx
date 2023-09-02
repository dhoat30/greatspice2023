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
      <MenuSection menuData={menuDataArr} />

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

export default MenuArchivePage;
