import MenuCard from "@/components/UI/Menu/MenuSection/MenuCard";
import React from "react";
import styled from "styled-components";
function MenuSection({ menuData }) {
  const menuCards = menuData.map((item, index) => {
    if (item.url === "/catering-menu") return null;

    return (
      <MenuCard
        className={`${index === 1 && "mt-12"} card-${index} card`}
        key={index}
        image={item.desktopImage}
        title={item.title}
        url={`/menu${item.url}`}
      />
    );
  });
  return (
    <Container className="block" id="menu-section">
      <div className="desktop-wrapper row-max py-12 lg:py-28">
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
      @media (max-width: 1024px) {
        font-size: var(--material-theme--display--large);
        color: var(--material-theme--sys--light--on-surface-variant);
        line-height: 3.5rem;
      }
    }
    .flex-wrapper {
      display: flex;
      justify-content: space-between;
      gap: 32px;
      position: relative;
      top: -50px;
      @media (max-width: 1024px) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;
        top: 0;
      }
      .card {
        @media (max-width: 1024px) {
          width: 45%;
        }
        @media (max-width: 700px) {
          width: 100%;
        }
      }
      .card-0 {
        animation-delay: 1s;
      }
      .card-2 {
        animation-delay: 2s;
      }
    }
  }
`;
