import React from "react";
import styled from "styled-components";
import Image from "next/image";

function MenuItemImage({ dishName, dishDescription, dishPrice, dishImage }) {
  return (
    <Container className="image-item">
      <div className="dish-image-wrapper">
        <Image src={dishImage.url} alt={dishImage.alt} fill />
      </div>
      <div className="dish-name-price-wrapper flex gap-x-4">
        <div className="dish-name-wrapper flex-initial">
          <h4 className="dish-name">{dishName}</h4>
        </div>
        <div className="dish-border  flex-1"></div>
        <h6 className="flex-initial dish-price">{dishPrice} </h6>
      </div>
      <p className="dish-description mt-4">{dishDescription} </p>
    </Container>
  );
}

export default MenuItemImage;
const Container = styled.li`
  width: 100%;
  height: 100%;
  .dish-image-wrapper {
    position: relative;
    width: 90%;
    height: 250px;
    img {
      object-fit: cover;
    }
  }
  .dish-name-price-wrapper {
    .dish-name-wrapper {
      .dish-name {
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
