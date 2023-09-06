import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

export default function Gallery({ images, className }) {
  const [lightbox, setLightbox] = useState({ isOpen: false, imageIndex: 0 });

  const openLightbox = (index) => {
    setLightbox({ isOpen: true, imageIndex: index });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, imageIndex: 0 });
  };

  const nextImage = (event) => {
    event.stopPropagation();

    setLightbox((prev) => ({
      ...prev,
      imageIndex: (prev.imageIndex + 1) % images.length,
    }));
  };

  const prevImage = (event) => {
    event.stopPropagation();

    setLightbox((prev) => ({
      ...prev,
      imageIndex: (prev.imageIndex - 1 + images.length) % images.length,
    }));
  };

  return (
    <>
      <GalleryContainer className={` ${className} grid grid-cols-12 gap-4`}>
        {images.map((src, index) => (
          <ImageWrapper className="col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-6 ">
            <Image
              key={index}
              src={src.url}
              onClick={() => openLightbox(index)}
              fill
            />
          </ImageWrapper>
        ))}
      </GalleryContainer>

      {lightbox.isOpen && (
        <LightboxContainer onClick={closeLightbox}>
          <Arrow direction="left" onClick={(e) => prevImage(e)}>
            ←
          </Arrow>
          <LightBoxImageWrapper>
            <Image
              src={images[lightbox.imageIndex].url}
              alt="title"
              width={1000}
              height={500}
            />
          </LightBoxImageWrapper>
          <Arrow direction="right" onClick={(e) => nextImage(e)}>
            →
          </Arrow>
        </LightboxContainer>
      )}
    </>
  );
}
const GalleryContainer = styled.div``;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  @media (max-width: 700px) {
    height: 300px;
  }

  img {
    object-fit: cover;
  }
  cursor: pointer;
`;

const LightboxContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const LightBoxImageWrapper = styled.div`
  max-width: 80%;
  max-height: 80%;
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === "left" ? "left: 15px;" : "right: 15px;")}
  background: none;
  border: none;
  color: white;
  font-size: 2em;
  cursor: pointer;
`;
