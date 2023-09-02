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

function CarouselSection({
  dataArray,
  sectionSubtitle,
  specialsCondition,
  sectionTitle,
}) {
  const cards = dataArray.map((item, index) => {
    if (item.specialType === "dinnerSpecial: Dinner Special") {
      return;
    }
    return (
      <Card
        key={index}
        sx={{
          maxWidth: "90%",
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
          {item.orderOnlineLink && (
            <AnchorButton href={item.orderOnlineLink}>
              Order Online
            </AnchorButton>
          )}
          {item.menuLink && (
            <AnchorLink href={item.menuLink}> View Menu</AnchorLink>
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
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoPlay: true,
    centerMode: true,
    centerPadding: "40px",
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
    <Container className="py-28 hidden mt-4 md:block ">
      <div className="row-max wrapper">
        <div className="content-wrapper">
          <h3 className="font-serif"> {sectionTitle}</h3>
          <div className="subtitle-wrapper">
            <h4>{sectionSubtitle}</h4>
            <h6>{specialsCondition}</h6>
          </div>
        </div>
        <Divider sx={{ borderColor: "#7D7767", marginTop: "24px" }} />
        <div className="cards mt-12">
          <Slider {...settings}>{cards}</Slider>
        </div>
      </div>
    </Container>
  );
}

export default CarouselSection;
const Container = styled.section`
  background: var(--material-theme-sys-light-surface-container-low, #f9f3ea);
  .wrapper {
    .content-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      h3 {
        color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
        font-size: var(--desktop-display);
        font-weight: 300;
        letter-spacing: 2px;
        line-height: 5rem;
      }
      .subtitle-wrapper {
        width: 35%;
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
