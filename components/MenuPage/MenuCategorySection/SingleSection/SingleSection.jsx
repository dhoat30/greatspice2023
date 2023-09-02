import { useState, useEffect } from "react";
import styled from "styled-components";
import Divider from "@mui/material/Divider";
import MenuItem from "@/components/UI/Menu/MenuItem/MenuItem";
import MenuItemImage from "@/components/UI/Menu/MenuItem/MenuItemWithImage";

function SingleSection({ singleSectionData }) {
  // split the array to get the first item with an image
  let singleImageItem = null;
  let imageItemSet = false;

  const remainingItems = singleSectionData.menu_content.filter((dish) => {
    if (dish.dish_image && !imageItemSet) {
      singleImageItem = dish;
      imageItemSet = true;
      return false;
    }
    return true;
  });

  // get the category name from the value
  const str = singleSectionData.acf_fc_layout;
  // Replace underscores with spaces
  const stringWithSpaces = str.replace(/_/g, " ");
  // Capitalize each word
  const sectionTitle = stringWithSpaces.replace(/\b\w/g, (char) =>
    char.toUpperCase()
  );

  const menuCards = remainingItems.map((item, index) => {
    return (
      <MenuItem
        key={index}
        dishName={item.dish_name}
        dishDescription={item.dish_description}
        dishPrice={item.dish_price}
      />
    );
  });
  return (
    <Container id={singleSectionData.acf_fc_layout} className="py-16">
      <div className="title-wrapper">
        <h3 className="section-title font-serif">{sectionTitle}</h3>
        <Divider sx={{ borderColor: "#7D7767", marginTop: "8px" }} />
      </div>
      <div className="cards-wrapper mt-8 ">
        <ul className="card-with-image">
          {singleImageItem && (
            <MenuItemImage
              dishName={singleImageItem.dish_name}
              dishDescription={singleImageItem.dish_description}
              dishPrice={singleImageItem.dish_price}
              dishImage={singleImageItem.dish_image}
            />
          )}
        </ul>
        <ul className="cards flex">{menuCards}</ul>
      </div>
    </Container>
  );
}

export default SingleSection;

const Container = styled.div`
  .title-wrapper {
    .section-title {
      color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
      font-size: var(--material-theme--display--large);
      font-weight: 300;
      letter-spacing: 2px;
      line-height: 4rem;
    }
  }
  .cards-wrapper {
    flex-wrap: wrap;
    flex-direction: row;
    display: flex;
    border: solid green;
    gap: 32px;
    .card-with-image {
      width: calc(33% - 16px);
      border: solid blue;
    }
    .cards {
      width: calc(66% - 16px);
      flex-wrap: wrap;
      gap: 32px;
      border: solid orange;
    }
  }
`;
