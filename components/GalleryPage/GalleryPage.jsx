"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Gallery from "../UI/Gallery/Gallery";
import GalleryFilter from "./GalleryFilter";
import TextHero from "../UI/Hero/TextHero";

function GalleryPage({ galleryData }) {
  const [filteredPosts, setFilteredPosts] = useState(
    galleryData.acf.gallery[0].gallery_images
  );
  const categoryArray = galleryData.acf.gallery.map((item, index) => {
    return {
      id: index,
      title: item.gallery_category.split(":")[1]?.trim(),
      value: item.gallery_category,
    };
  });
  console.log(filteredPosts);
  //   filter categories based on clicked item in filters component
  const filterPostsByCategory = (categoryId) => {
    console.log(categoryId);
    const newFilteredPosts = galleryData.acf.gallery.filter(
      (item) => item.gallery_category === categoryId
    );
    console.log(newFilteredPosts);
    setFilteredPosts(newFilteredPosts[0].gallery_images);
  };
  console.log(filteredPosts);

  return (
    <Container className="py-6">
      <TextHero
        title={galleryData.title.rendered}
        subtitle={galleryData.acf.hero_section.subtitle}
      />
      <div className=" gallery-section">
        <div className="relative md:grid md:grid-cols-12 md:gap-12 row-max md:py-28 ">
          <GalleryFilter
            className=" md:col-span-5 lg:col-span-3 "
            categoryArray={categoryArray}
            onCategoryClick={filterPostsByCategory}
          />
          <Gallery
            images={filteredPosts}
            className=" mt-28 md:mt-0 md:col-span-7 lg:col-span-9 "
          />
        </div>
      </div>
    </Container>
  );
}

export default GalleryPage;

const Container = styled.section`
  .gallery-section {
    background-color: var(--material-theme--sys--light--surface-container-low);
  }
`;
