import React from "react";
import styled from "styled-components";
import ParkingIcon from "@/components/UI/Icons/ParkingIcon";
import WifiIcon from "@/components/UI/Icons/WifiIcon";
import BYOIcon from "@/components/UI/Icons/BYOIcon";
import AwardIcons from "@/components/UI/Icons/AwardIcons";
import WheelchairIcon from "@/components/UI/Icons/WheelchairIcon";
import GlutenFreeIcon from "../Icons/GlutenFreeIcon";

export default function USP({ className }) {
  return (
    <Container className={`${className} py-8`}>
      <ul className="row-max grid grid-cols-2 gap-y-6 sm:grid-cols-3 sm:gap-y-8 lg:grid-cols-6 lg:divide-x sm:items-center  place-items-stretch">
        <li>
          <ParkingIcon />
          <span> Free Parking</span>
        </li>
        <li>
          <WifiIcon />
          <span> Free Wifi</span>
        </li>
        <li>
          <BYOIcon />
          <span> BYO - Wine</span>
        </li>
        <li>
          <AwardIcons />
          <span> Award Winning</span>
        </li>
        <li>
          <WheelchairIcon />
          <span> Wheelchair Accessible</span>
        </li>
        <li>
          <GlutenFreeIcon />
          <span>Gluten Free Options </span>
        </li>
      </ul>
    </Container>
  );
}
const Container = styled.section`
  background: var(--material-theme-sys-light-surface-container-low, #f9f3ea);

  svg {
    margin: 0 auto;
    width: 50px;
    height: 50px;
    margin-bottom: 8px;
    @media (max-width: 500px) {
      width: 35px;
      height: 35px;
    }
    path {
      fill: #4c4639;
    }
  }
  text-align: center;
  span {
    @media (max-width: 500px) {
      font-size: var(--material-theme--body--medium);
    }
  }
`;
