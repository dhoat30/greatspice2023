import React from "react";
import styled from "styled-components";
import Image from "next/image";
import StarIcon from "@/components/UI/Icons/StarIcon";
import Slider from "react-slick";
import AnchorOutlinedButtonDark from "@/components/UI/Buttons/AnchorOutlinedButtonDark";

var settings = {
  dots: true,
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
  sectionTitle,
  sectionImage,
  sectionSubtitle,
  dataArray,
}) {
  const items = dataArray.map((item, index) => {
    return (
      <div className="item" key={index}>
        <div className="head">
          <div className="image-wrapper">
            <Image
              src={item.image.url}
              alt={item.image.alt ? item.image.alt : item.title}
              width="38"
              height="38"
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
          />
        </div>
      </div>
    );
  });
  return (
    <Container className="hidden md:block lg: py-28">
      <div className="position-image">
        <div className="image-wrapper">
          <Image
            src={sectionImage.url}
            alt={sectionImage.alt ? sectionImage.alt : sectionTitle}
            fill
          />
        </div>
      </div>
      <div className="desktop-wrapper row-max ">
        <h3 className="font-serif">{sectionTitle}</h3>
      </div>
      <div className="content-wrapper row-max">
        <div className="cards">
          <Slider {...settings}> {items}</Slider>
        </div>
        <div className="button-wrapper mt-8">
          <AnchorOutlinedButtonDark href="https://www.google.com/maps/place/Great+Spice+Tauranga/@-37.6684018,176.1535385,17z/data=!3m1!4b1!4m6!3m5!1s0x6d6ddb8cc27d86e7:0x291f87512b7cc54b!8m2!3d-37.6684018!4d176.1535385!16s%2Fg%2F11cltfvk0t?entry=ttu">
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
      color: var(--material-theme-sys-light-surface-container-lowest, #fffffc);
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
              color: var(
                --material-theme-sys-light-on-surface-variant,
                #4c4639
              );
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
          color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
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
