"use client";
import { useRef } from "react";
import { styled } from "styled-components";

import Image from "next/image";
import AnchorButton from "@/components/UI/Buttons/AnchorButton";
import AnchorLink from "@/components/UI/Buttons/AnchorLink";
import Slider from "react-slick";
import AnchorOutlinedButtonDark from "@/components/UI/Buttons/AnchorOutlinedButtonDark";
import StarIcon from "@/components/UI/Icons/StarIcon";
import CarouselArrows from "@/components/UI/CarouselArrows/CarouselArrows";
import GoogleReviewCard from "@/components/UI/GoogleReviews/GoogleReviewCard/GoogleReviewCard";

function MobileReviewSection({
  data,
  sectionSubtitle,
  specialsCondition,
  title,
  slidesToShow,
}) {
  // slider arrow functionality
  const sliderRef = useRef(null);
  if (!data.length) return null;

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
    return (
      item.starRating === "FIVE" &&
      typeof item.comment === "string" && // Ensure comment is a string
      item.comment.length > 250 // Check length of the comment
    );
  });

  const testimonialCardsJSX = filteredReviewData.map((item, index) => {
    if (index > 10) return null;
    return (
      <GoogleReviewCard
        key={index}
        name={item.reviewer.displayName}
        description={item.comment}
        customerPic={item.reviewer.profilePhotoUrl}
        characterLimit={250}
      />
    );
  });

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    draggable: true,
    infinite: true,
  };
  return (
    <Container className="pt-6 pb-12 mt-2 md:hidden">
      <div className="row-max wrapper">
        <div className="content-wrapper">
          <h3 className="font-serif">{title}</h3>
          <div className="subtitle-wrapper mt-2">
            <h4>{sectionSubtitle}</h4>
            <h6 className="mt-1">{specialsCondition}</h6>
          </div>
        </div>
        {/* <Divider sx={{ borderColor: "#7D7767", marginTop: "24px" }} /> */}
        <div className="cards mt-4">
          <CarouselArrows next={next} previous={previous} />

          <Slider ref={sliderRef} {...settings}>
            {testimonialCardsJSX}
          </Slider>
        </div>
        <div className="button-wrapper">
          <AnchorButton href="/all-testimonials">Read All Reviews</AnchorButton>
          <AnchorOutlinedButtonDark href="https://www.google.com/maps/place/Great+Spice+Tauranga/@-37.6684018,176.1535385,17z/data=!3m1!4b1!4m6!3m5!1s0x6d6ddb8cc27d86e7:0x291f87512b7cc54b!8m2!3d-37.6684018!4d176.1535385!16s%2Fg%2F11cltfvk0t?entry=ttu">
            Write a Review
          </AnchorOutlinedButtonDark>
        </div>
      </div>
    </Container>
  );
}

export default MobileReviewSection;
const Container = styled.section`

  background: var(--light-surface-container-low, #f9f3ea);

  .wrapper {
    .content-wrapper {
      h3 {
        color: var(--light-on-surface-variant, #4c4639);
        font-size: var(--material-theme--headline--large);
        font-weight: 300;
        letter-spacing: 2px;
        line-height: 2.3rem;
      }
      .subtitle-wrapper {
        h4,
        h6 {
          color: var(--light-on-surface-variant, #4c4639);
        }
        h4 {
          font-size: var(--material-theme--body--large);
        }
        h6 {
          font-size: var(--material-theme--label--large);
        }
      }
    }
    .cards {
      .item {
        border-radius: 12px;
        border: 1px solid var(--m-3-sys-light-outline, #79747e);
        background: var(--light-surface-container-lowest, #fffffc);
        padding: 16px;
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

  }
  .button-wrapper {
          gap: 16px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          margin-top: 40px;
        }
`;
