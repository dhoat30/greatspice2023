"use client";
import React from "react";
import { styled } from "styled-components";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import AnchorButton from "@/components/UI/Buttons/AnchorButton";
import AnchorLink from "@/components/UI/Buttons/AnchorLink";
import Slider from "react-slick";
import AnchorOutlinedButtonDark from "@/components/UI/Buttons/AnchorOutlinedButtonDark";
function MobileCarouselSection({
  dataArray,
  sectionSubtitle,
  specialsCondition,
  sectionTitle,
  slidesToShow,
}) {
  const cards = dataArray.map((item, index) => {
    if (item.specialType === "dinnerSpecial: Dinner Special") {
      return;
    }
    return (
      <Card
        key={index}
        sx={{
          maxWidth: "97%",
          borderRadius: "12px",
          border: "1px solid var(--material-theme-sys-light-outline, #7D7767)",
        }}
      >
        <div className="card-image-wrapper">
          <Image src={item.image.url} alt={item.image.alt} fill />
        </div>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>

          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: item.description }}
          ></div>
        </CardContent>
        <CardActions sx={{ flexWrap: "wrap" }}>
          {item.callToAction && (
            <AnchorOutlinedButtonDark
              href={item.callToAction.url}
              align="right"
            >
              {item.callToAction.label}
            </AnchorOutlinedButtonDark>
          )}
        </CardActions>
      </Card>
    );
  });

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoPlay: true,

    draggable: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "16px",
        },
      },
    ],
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
          <Slider {...settings}>{cards}</Slider>
        </div>
      </div>
    </Container>
  );
}

export default MobileCarouselSection;
const Container = styled.section`
  background: var(--material-theme-sys-light-surface-container-low, #f9f3ea);
  .wrapper {
    .content-wrapper {
      h3 {
        color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
        font-size: var(--material-theme--headline--large);
        font-weight: 300;
        letter-spacing: 2px;
        line-height: 2.3rem;
      }
      .subtitle-wrapper {
        h4,
        h6 {
          color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
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
      .card-image-wrapper {
        position: relative;
        width: 100%;
        height: 250px;
        img {
          object-fit: cover;
        }
      }
    }
  }
`;
