"use client";

import Hero from "../UI/Hero/Hero";
import MenuSection from "./MenuSection/MenuSection";
import CarouselSection from "./CarouselSection/CarouselSection";
import MobileCarouselSection from "./CarouselSection/MobileCarouselSection";
import GuestReviewSection from "./GuestReviewSection/GuestReviewSection";
import MobileReviewSection from "./GuestReviewSection/MobileReviewSection";
import USP from "../UI/USP/USP";
// events carousel
import EventsCarouselSection from "../HostEvents/CarouselSection/CarouselSection";
import EventsMobileCarouselSection from "../HostEvents/CarouselSection/MobileCarouselSection";

function HomePage({
  homeData,
  menuData,
  specialsData,
  chefSpecialsData,
  guestReviewData,
  cateringData,
  eventsData,
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

  // catering data array
  const cateringDataArr = cateringData.acf.event_information.map((item) => {
    return {
      title: item.title,
      description: item.description,
      image: item.image,
      callToAction: {
        label: "Enquire Now",
        url: "/host-events/enquire",
      },
      callToAction2: {
        label: "View Menu",
        url: item.call_to_action.url,
      },
    };
  });

  const cateringSectionSubtitle = cateringData.acf.section_information.subtitle;

  // events data array
  const eventsDataArr = eventsData.acf.event_information.map((item) => {
    return {
      title: item.title,
      description: item.description,
      image: item.image,
      callToAction: {
        label: item.call_to_action.label,
        url: item.call_to_action.url,
      },
    };
  });
  const eventsSectionTitle = eventsData.acf.section_information.title;
  const eventsSectionSubtitle = eventsData.acf.section_information.subtitle;

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
      {/* <Hero heroData={heroData} className="md:mb-14 lg:mb-0" /> */}
      <USP />
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
      {/* catering section  */}
      <EventsCarouselSection
        dataArray={cateringDataArr}
        sectionSubtitle={cateringSectionSubtitle}
        sectionTitle="Catering"
      />

      <EventsMobileCarouselSection
        dataArray={cateringDataArr}
        sectionSubtitle={cateringSectionSubtitle}
        sectionTitle="Catering"
      />
      {/* catering section  */}
      <EventsCarouselSection
        dataArray={eventsDataArr}
        sectionSubtitle={eventsSectionSubtitle}
        sectionTitle={eventsSectionTitle}
      />
      <EventsMobileCarouselSection
        dataArray={eventsDataArr}
        sectionSubtitle={eventsSectionSubtitle}
        sectionTitle={eventsSectionTitle}
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
