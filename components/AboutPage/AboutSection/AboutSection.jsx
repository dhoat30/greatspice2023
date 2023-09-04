import React from "react";
import styled from "styled-components";
import Image from "next/image";
export default function AboutSection({ aboutData }) {
  return (
    <Container>
      <div className="wrapper grid lg:grid-cols-12 gap-16 row-max py-16">
        <div className="content-wrapper col-span-6 self-center">
          <h2 className="title-wrapper font-serif font-medium text-3xl tracking-widest mb-4">
            {aboutData.title}
          </h2>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: aboutData.description }}
          ></div>
        </div>
        <div className="image-wrapper col-span-6">
          <Image
            src={aboutData.image.url}
            alt={aboutData.image.alt ? aboutData.image.alt : aboutData.title}
            fill
          />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  .wrapper {
    .image-wrapper {
      position: relative;
      width: 100%;
      height: 800px;
      @media (max-width: 600px) {
        height: 400px;
      }
      img {
        object-fit: cover;
      }
    }
    .content-wrapper {
      height: auto;
      .title-wrapper {
      }
      .description {
        color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
        font-size: var(--material-theme--body--large);
        p {
          margin: 16px 0;
          line-height: 1.8rem;
        }
      }
    }
  }
`;
