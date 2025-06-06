'use client';

import { useRef, useCallback } from "react";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import Slider from "react-slick";
import CarouselArrows from "../CarouselArrows/CarouselArrows";
import Link from "next/link";
import Button from "@mui/material/Button";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import GoogleReviewCard from "./GoogleReviewCard/GoogleReviewCard";
import Typography from "@mui/material/Typography";
var settings = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
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
            },
        },
    ],
};

export default function GoogleReviewsCarousel({ data }) {

    // slider arrow functionality
    const sliderRef = useRef(null);

    if (!data) return null;

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
        <Section>
            <Container maxWidth="xl">
                <div className="title-row">
                    <Typography
                        variant="h2"
                        component="h2"
                        className="title"
                        align="center"
                    >
                        Guest Reviews
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        className="description mt-16"
                        align="center"
                    >
                        Explore authentic customer feedback and see why people trust us. Each review reflects the quality and dedication we bring to every service we provide.        </Typography>
                </div>
                <div className="arrows-wrapper">
                    <CarouselArrows next={next} previous={previous}   color="var(--dark-on-surface-variant)"
                    />
                </div>
            </Container>
            <div className="carousel-wrapper mt-16">
                <Slider ref={sliderRef} {...settings}>
                    {testimonialCardsJSX}
                </Slider>
            </div>
            <Container maxWidth="xl" className="cta-wrapper mt-32">
                <Link href={"https://g.page/r/CU4J4rdwdR0mEAE/review"} target="_blank">
                    <Button variant={`contained`} endIcon={<CallMadeOutlinedIcon />}>
                        Leave a Review
                    </Button>
                </Link>
                <Link href="/all-testimonials">
                    <Button variant={`outlined`}>
                        Read More Reviews
                    </Button>
                </Link>
            </Container>
        </Section>
    );
}

const Section = styled.section`
background:var(--light-surface-container-low);

  padding: 80px 0;
  @media (max-width: 600px) {
    padding: 40px 0;
  }
  .arrows-wrapper {
    display: flex;
    justify-content: flex-end;
  }
  .carousel-wrapper {
  }
  .cta-wrapper {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap; 
  }
`;
