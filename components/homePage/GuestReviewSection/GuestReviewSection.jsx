'use client'
import React from "react";
import { useRef } from "react";

import styled from "styled-components";
import Image from "next/image";
import StarIcon from "@/components/UI/Icons/StarIcon";
import Slider from "react-slick";
import AnchorOutlinedButtonDark from "@/components/UI/Buttons/AnchorOutlinedButtonDark";
import CarouselArrows from "@/components/UI/CarouselArrows/CarouselArrows";
import GoogleReviewCard from "@/components/UI/GoogleReviews/GoogleReviewCard/GoogleReviewCard";
var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoPlay: true,
  draggable: true,
  infinite: true,
};

function GuestReviewSection({
  title,
  sectionImage,
  sectionSubtitle,
  data,
}) {
  // slider arrow functionality
  const sliderRef = useRef(null);
  if (!data?.length) return null;

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

    // filter review comment 
    const filteredReviewData = data.filter((item) => {
      return (item.starRating === "FIVE" &&
          typeof item.comment === "string" && // Ensure comment is a string
          item.comment.length > 250 // Check length of the comment
      )
  });


  const testimonialCardsJSX = filteredReviewData.map(
      (item, index) => {
          if (index > 10) return null;
          return (
              <GoogleReviewCard
                  key={index}
                  name={item.reviewer.displayName}
                  description={item.comment}
                  customerPic={item.reviewer.profilePhotoUrl}
              />
          );
      }
  );

  return (
    <Container className="hidden md:block lg: py-28">
      <div className="position-image">
        <div className="image-wrapper">
          <Image
            src={sectionImage.url}
            alt={sectionImage.alt ? sectionImage.alt : title}
            fill
            quality={70}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="desktop-wrapper row-max ">
        <h3 className="font-serif">{title}</h3>
      </div>
      <div className="content-wrapper row-max">
        <div className="cards">
          <CarouselArrows next={next} previous={previous} />
          <Slider ref={sliderRef} {...settings}>
          {testimonialCardsJSX}
          </Slider>
        </div>
        <div className="button-wrapper mt-8">
          <AnchorOutlinedButtonDark href="https://g.page/r/CUvFfCtRhx8pEAE/review">
            Write a Review
          </AnchorOutlinedButtonDark>
        </div>
      </div>
    </Container>
  );
}

export default GuestReviewSection;
const Container = styled.section`
  position: relative;

  .position-image {
    position: absolute;
    top: 280px;
    @media (max-width: 970px) {
      top: 450px;
    }
    .image-wrapper {
      position: relative;
      width: 500px;
      height: 800px;
      @media (max-width: 970px) {
        width: 350px;
        height: 500px;
      }
      img {
        object-fit: cover;
        object-position: -290px 0;
      }
    }
  }

  .desktop-wrapper {
    h3 {
      color: var(--light-surface-container-lowest, #fffffc);
      text-align: center;
      /* big title */
      font-size: var(--big-title);
      font-style: normal;
      font-weight: 200 !important;
      line-height: 12rem; /* 100% */
      letter-spacing: 2px;
    }
  }
  .content-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;

    height: 800px;
    .cards {
      width: 60%;
      @media (max-width: 1320px) {
        width: 45%;
      }

      .item {
        .head {
          display: flex;
          align-items: center;
          .title-wrapper {
            margin-left: 8px;
            h4 {
              font-size: var(--material-theme--title--medium);
              color: var(--light-on-surface-variant, #4c4639);
              font-weight: 500;
              line-height: 0;
            }
            .stars-wrapper {
              margin-top: 4px;
              margin-bottom: -10px;
            }
          }
        }
        .review-text-wrapper {
          color: var(--light-on-surface-variant, #4c4639);
          font-weight: 400;
          font-size: var(--material-theme--body--large);
          font-style: italic;
          p {
            margin-top: 16px;
          }
          img {
            margin-top: 16px;
          }
        }
      }
    }
    .button-wrapper {
    }
  }
`;
