import MenuCard from "@/components/UI/Menu/MenuSection/MenuCard";
import React from "react";
import styled from "styled-components";
function MenuSection({ menuData }) {
  const menuCards = menuData.map((item, index) => {
    return (
      <MenuCard
        className={`${index === 1 && "mt-12"} card-${index} `}
        key={index}
        image={item.desktopImage}
        title={item.title}
        url={item.url}
      />
    );
  });
  return (
    <Container className="hidden lg:block">
      <div className="desktop-wrapper row-max py-28">
        <h3 className="font-serif">View Our Menu</h3>
        <div className="flex-wrapper">{menuCards}</div>
      </div>
    </Container>
  );
}

export default MenuSection;
const Container = styled.section`
  .desktop-wrapper {
    h3 {
      color: var(--material-theme-sys-light-surface-container-lowest, #fffffc);

      text-align: center;
      /* big title */
      font-size: var(--big-title);
      font-style: normal;
      font-weight: 200 !important;
      line-height: 225px; /* 100% */
      letter-spacing: 2px;
    }
    .flex-wrapper {
      display: flex;
      justify-content: space-between;
      gap: 32px;
      position: relative;
      top: -50px;
      .card-0 {
        animation-delay: 1s;
      }

      .card-2 {
        animation-delay: 2s;
      }
    }
  }
`;
