import React from "react";
import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";
function MenuCard({ image, title, url, className }) {
  return (
    <Container className={className}>
      <Link href={url}>
        <div className="overlay"></div>
        <div className="image-wrapper">
          <Image src={image.url} alt={image.alt} fill quality={70} />
        </div>
        <div className="title-wrapper">
          <h4 className="text-center font-serif">{title}</h4>
        </div>
      </Link>
    </Container>
  );
}

export default MenuCard;
const Container = styled.div`
  width: 33%;
  border-radius: 12px;
  height: 584px;
  @media (max-width: 640px) {
    height: 300px;
  }
  position: relative;
  cursor: pointer;
  animation: moveUpDown 3s ease-in-out infinite;
  @keyframes moveUpDown {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  .overlay {
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.58);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    img {
      object-fit: cover;
      border-radius: 12px;
    }
  }
  .title-wrapper {
    position: relative;
    bottom: 60px;
    z-index: 10;
    h4 {
      color: var(--material-theme-white, #fff);
      font-size: var(--material-theme--headline--small);
      font-weight: 300;
      letter-spacing: 1px;
    }
  }
`;
