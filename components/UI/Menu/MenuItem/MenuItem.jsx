import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import styled from "styled-components";
import GlutenFreeIcon from "../../Icons/GlutenFreeIcon";
import VeganIcon from "../../Icons/VeganIcon";
import VegetarianIcon from "../../Icons/VegetarianIcon";
import DairyFreeIcon from "../../Icons/DariyFreeIcon";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

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

            {glutenFree && (
              <Tooltip title="Gluten Free" arrow>
                <Button sx={{ padding: "0", minWidth: "0" }}>
                  <GlutenFreeIcon className="inline-block" />
                </Button>
              </Tooltip>
            )}
            {vegan && (
              <Tooltip title="Vegan" arrow>
                <Button sx={{ padding: "0", minWidth: "0" }}>
                  <VeganIcon className="inline-block" />
                </Button>
              </Tooltip>
            )}
            {vegetarian && (
              <Tooltip title="Vegetarian" arrow>
                <Button sx={{ padding: "0", minWidth: "0" }}>
                  <VegetarianIcon className="inline-block" />
                </Button>
              </Tooltip>
            )}
            {dairyFree && (
              <Tooltip title="Dairy Free" arrow>
                <Button sx={{ padding: "0", minWidth: "0" }}>
                  <DairyFreeIcon className="inline-block" />
                </Button>
              </Tooltip>
            )}
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
      width: 16px;
      height: 16px;
      path {
        fill: var(--light-on-surface-variant, #4c4639);
      }
    }
    .dish-name-wrapper {
      .dish-name {
        text-transform: capitalize;
        color: var(--light-on-surface, #1d1b16);
        font-weight: 500;
        font-size: var(--material-theme--body--large);
        line-height: 1rem;
      }
    }
    .dish-price {
      color: var(--light-on-surface, #1d1b16);
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
    color: var(--light-on-surface-variant, #4c4639);
  }
`;
