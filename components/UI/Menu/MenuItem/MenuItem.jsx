import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import styled from "styled-components";
import GlutenFreeIcon from "../../Icons/GlutenFreeIcon";
import VeganIcon from "../../Icons/VeganIcon";
import VegetarianIcon from "../../Icons/VegetarianIcon";
import DairyFreeIcon from "../../Icons/DariyFreeIcon";
function MenuItem({
  dishName,
  dishDescription,
  dishPrice,
  condition,
  dietaryInformation,
}) {
  const [glutenFree, setGlutenFree] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [dairyFree, setDairyFree] = useState(false);
  useEffect(() => {
    const dietaryInfo = dietaryInformation.map((item, index) => {
      if (item === "vegetarian: Vegetarian") {
        setVegetarian(true);
      } else if (item === "vegan: Vegan") {
        setVegan(true);
      } else if (item === "glutenFree: Gluten Free") {
        setGlutenFree(true);
      } else if (item === "dairyFree: Dairy Free") {
        setDairyFree(true);
      }
    });
  }, []);

  return (
    <Container className="menu-item ">
      <div className="dish-name-price-wrapper flex gap-x-4">
        <div className="dish-name-wrapper flex-initial">
          <h4 className="dish-name">
            {dishName.toLowerCase()}

            {glutenFree && <GlutenFreeIcon className="inline-block" />}
            {vegan && <VeganIcon className="inline-block" />}
            {vegetarian && <VegetarianIcon className="inline-block" />}
            {dairyFree && <DairyFreeIcon className="inline-block" />}
          </h4>
          {condition && (
            <Typography variant="body2" component="div">
              *{condition}
            </Typography>
          )}
        </div>
        <div className="dish-border  flex-1"></div>
        <h6 className="flex-initial dish-price">{dishPrice} </h6>
      </div>
      <p className="dish-description mt-4">{dishDescription} </p>
    </Container>
  );
}

export default MenuItem;
const Container = styled.li`
  width: calc(50% - 16px);
  @media (max-width: 1260px) {
    width: calc(100%);
  }
  @media (max-width: 640px) {
    width: calc(100%);
  }

  .dish-name-price-wrapper {
    svg {
      margin-left: 4px;
      width: 18px;
      height: 18px;
    }
    .dish-name-wrapper {
      .dish-name {
        text-transform: capitalize;
        color: var(--material-theme-sys-light-on-surface, #1d1b16);
        font-weight: 500;
        font-size: var(--material-theme--body--large);
        line-height: 1rem;
      }
    }
    .dish-price {
      color: var(--material-theme-sys-light-on-surface, #1d1b16);
      font-weight: 400;
      font-size: var(--material-theme--body--large);
      line-height: 1rem;
    }
    .dish-border {
      border-bottom: 1px solid #cec6b4;
    }
  }
  .dish-description {
    font-size: var(--material-theme--label--large);
    font-weight: 400;
    color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
  }
`;
