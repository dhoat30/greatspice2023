"use client";
import { useState } from "react";
import HeroVariant from "../UI/Hero/HeroVariant";
import ArchiveSection from "./ArchiveSection/ArchiveSection";
import BlogCategoriesFilter from "./BlogCategories/BlogCategoriesFilter";

export default function BlogArchive({
  blogData,
  contactData,
  blogCategoriesData,
}) {
  console.log(blogData);

  // hero data
  const heroData = {
    title: contactData.acf.blog_page_hero_section.title,
    subtitle: contactData.acf.blog_page_hero_section.subtitle,
    desktopImage: contactData.acf.blog_page_hero_section.desktop_image,
    mobileImage: contactData.acf.blog_page_hero_section.mobile_image,
  };

  //   blog data
  const blogDataArr = blogData.map((item) => {
    let excerpt;
    excerpt = item.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "");

    const words = excerpt.split(" ");
    if (words.length >= 30) {
      const trimmed = words.slice(0, 30).join(" ");
      excerpt = `${trimmed}...`;
    }

    return {
      id: item.id,
      categoryID: item.categories[0],
      title: item.title.rendered,
      excerpt: excerpt,
      date: item.acf.publish_date,
      slug: item.slug,
      desktopImage: item.acf.hero_section.desktop_image,
      mobileImage: item.acf.hero_section.mobile_image,
    };
  });
  const [filteredPosts, setFilteredPosts] = useState(blogDataArr);

  //   categories filter
  const blogCategoriesArr = blogCategoriesData.map((item) => {
    return {
      title: item.name,
      id: item.id,
      slug: item.slug,
    };
  });

  //   filter categories based on clicked item in filters component
  const filterPostsByCategory = (categoryId) => {
    if (categoryId === null) {
      setFilteredPosts(blogDataArr);
    } else {
      const newFilteredPosts = blogDataArr.filter(
        (post) => post.categoryID === categoryId
      );
      setFilteredPosts(newFilteredPosts);
    }
  };

  return (
    <>
      <HeroVariant heroData={heroData} />
      <div className="grid grid-cols-12 gap-12 row-max py-28">
        <BlogCategoriesFilter
          className="col-span-5 lg:col-span-3 "
          blogCategoriesArr={blogCategoriesArr}
          onCategoryClick={filterPostsByCategory}
        />

        <ArchiveSection
          blogDataArr={filteredPosts}
          className="col-span-7 lg:col-span-9 "
        />
      </div>
    </>
  );
}
