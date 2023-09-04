"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
function Gallerypage({ galleryData }) {
  console.log(galleryData);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <Container className="py-6">
      <div className="row-max grid grid-cols-12 gap-2">
        {galleryData.acf.gallery[0].gallery_images.map((image, index) => (
          <div className="image-wrapper col-span-6" key={index}>
            <Image
              onClick={() => openModal(image)}
              src={image.url}
              alt={image.alt ? image.alt : image.title}
              fill
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <Modal onClick={closeModal}>
          <ModalImage src={selectedImage.url} alt="" />
        </Modal>
      )}
    </Container>
  );
}

export default Gallerypage;

const Container = styled.section`
  .image-wrapper {
    width: 100%;
    height: 400px;

    position: relative;
    img {
      cursor: pointer;
      transition: 0.3s;
      object-fit: cover;
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;
