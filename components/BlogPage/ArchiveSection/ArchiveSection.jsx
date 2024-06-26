import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import AnchorLink from "@/components/UI/Buttons/AnchorLink";
export default function ArchiveSection({ blogDataArr, className }) {
  const cards = blogDataArr.map((item, index) => {
    return (
      <div className="single-card " key={index}>
        <Card key={index} color="secondary">
          <div className="card-image-wrapper">
            <Image
              src={item.desktopImage.url}
              alt={item.desktopImage.alt ? item.desktopImage.alt : item.title}
              fill
              quality={70}
            />
          </div>

          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="h3"
              sx={{ textTransform: "capitalize" }}
              dangerouslySetInnerHTML={{ __html: item.title }}
            ></Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              dangerouslySetInnerHTML={{ __html: item.excerpt }}
            ></Typography>
          </CardContent>
          <CardActions>
            <AnchorLink align="right" href={`/blogs/${item.slug}`}>
              Read more
            </AnchorLink>
          </CardActions>
        </Card>
      </div>
    );
  });
  return (
    <Container className={className}>
      <ul className="cards-wrapper pb-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1  lg:grid-cols-2 md:gap-6">
        {cards}
      </ul>
    </Container>
  );
}

const Container = styled.section`
  .card-image-wrapper {
    position: relative;
    width: 100%;
    height: 250px;
    img {
      object-fit: cover;
    }
  }
  .single-card {
  }
`;
