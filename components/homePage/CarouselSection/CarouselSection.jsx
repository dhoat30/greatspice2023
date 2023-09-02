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
function CarouselSection({ specialsData }) {
  console.log(specialsData);
  const cards = specialsData.map((item, index) => {
    return (
      <Card key={index} sx={{ maxWidth: 345 }}>
        <div className="card-image-wrapper">
          <Image src={item.image.url} alt={item.image.alt} fill />
        </div>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            dangerouslySetInnerHTML={{ __html: item.description }}
          ></Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  });
  return (
    <Container className="py-28">
      <div className="row-max wrapper">
        <div className="content-wrapper">
          <h3 className="font-serif"> Great Specials</h3>
          <div className="subtitle-wrapper">
            <h4>
              Experience the perfect pairing of dishes with our Special Combo
              offerings!
            </h4>
            <h6>
              Between 11:00AM to 2:00PM(Excluding Seafood, Goat & Tandoori)
            </h6>
          </div>
        </div>
        <Divider sx={{ borderColor: "#7D7767" }} />
        <div className="cards mt-4">{cards}</div>
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
