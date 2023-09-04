import React from "react";
import styled from "styled-components";
import SingleSection from "./SingleSection/SingleSection";
function MenuCategorySection({ className, menuDataArray }) {
  console.log(menuDataArray);
  const singleSection = menuDataArray.map((item, index) => {
    return <SingleSection key={index} singleSectionData={item} />;
  });
  return <Container className={className}>{singleSection}</Container>;
}

export default MenuCategorySection;
const Container = styled.section`
  width: 100%;
`;
