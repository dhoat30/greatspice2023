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

function MobileReviewSection({
  dataArray,
  sectionSubtitle,
  specialsCondition,
  sectionTitle,
  slidesToShow,
}) {
  // slider arrow functionality
  const sliderRef = useRef(null);
  if (!dataArray.length) return null;

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
  // slider arrow functionality ends
  const cards = dataArray.map((item, index) => {
    if (item.specialType === "dinnerSpecial: Dinner Special") {
      return;
    }
    return (
      <div className="item" key={index}>
        <div className="head">
          <div className="image-wrapper">
            <Image
              src={item.image.url}
              alt={item.image.alt ? item.image.alt : item.title}
              width="38"
              height="38"
              quality={70}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="title-wrapper">
            <h4>{item.title} </h4>
            <div className="stars-wrapper ">
              {/* loop over 5 stars here  */}
              <StarIcon className="inline-block" />
              <StarIcon className="inline-block" />
              <StarIcon className="inline-block" />
              <StarIcon className="inline-block" />
              <StarIcon className="inline-block" />
            </div>
          </div>
        </div>
        <div className="review-text-wrapper">
          <p>{item.description} </p>
          <Image
            src="/google-review.png"
            width="97"
            height="30"
            alt="google review"
            quality={70}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
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
          <h3 className="font-serif">{sectionTitle}</h3>
          <div className="subtitle-wrapper mt-2">
            <h4>{sectionSubtitle}</h4>
            <h6 className="mt-1">{specialsCondition}</h6>
          </div>
        </div>
        {/* <Divider sx={{ borderColor: "#7D7767", marginTop: "24px" }} /> */}
        <div className="cards mt-4">
          <CarouselArrows next={next} previous={previous} />

          <Slider ref={sliderRef} {...settings}>
            {cards}
          </Slider>
        </div>
        <div className="button-wrapper mt-12 flex justify-center">
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
`;
