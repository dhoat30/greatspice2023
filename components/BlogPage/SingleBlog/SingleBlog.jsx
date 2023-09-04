"use client";
import HeroVariant from "@/components/UI/Hero/HeroVariant";
import LongArrowIcon from "@/components/UI/Icons/LongArrowIcon";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

export default function SingleBlog({ singleBlogData }) {
  const router = useRouter();

  // hero data
  const heroData = {
    desktopImage: singleBlogData.acf.hero_section.desktop_image,
    mobileImage: singleBlogData.acf.hero_section.mobile_image,
  };
  return (
    <>
      <HeroVariant heroData={heroData} />
      <Container className="row-max">
        <div className="back-wrapper py-16" onClick={() => router.back()}>
          <LongArrowIcon />
          <span> Back to news </span>
        </div>
        <div className="blog-content ">
          <div className="date">
            Published on: {singleBlogData.acf.publish_date}{" "}
          </div>
          <h1 className="mt-2 mb-8 blog-title font-serif">
            {singleBlogData.title.rendered}
          </h1>
          <div
            dangerouslySetInnerHTML={{
              __html: singleBlogData.content.rendered,
            }}
          ></div>
        </div>
      </Container>
    </>
  );
}
const Container = styled.section`
  .back-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
    span {
      font-size: var(--material-theme--title--medium);
      color: var(--material-theme-sys-light-outline, #7d7767);
    }
    &:hover {
      path {
         {
          fill: var(--material-theme-sys-light-on-surface-variant, #4c4639);
        }
      }

      span {
        color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
      }
    }

    cursor: pointer;
  }
  .blog-content {
    max-width: 800px;
    margin: 0 auto;
    .date {
      color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
      font-size: var(--material-theme--body--medium);
    }
    .blog-title {
      color: var(--material-theme-sys-light-on-surface, #1d1b16);
      font-size: var(--material-theme--display--large);
      letter-spacing: 2px;
      line-height: 4rem;
    }
    p {
      font-size: var(--material-theme--body--large);
      color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
      font-weight: 400;
      line-height: 1.7rem; /* 150% */
      margin: 16px 0;
    }
    h2 {
      color: var(--material-theme-sys-light-on-surface, #1d1b16);
      font-size: var(--material-theme--headline--large);
      letter-spacing: 2px;
      font-weight: 500;
      font-family: var(--font-neuton), serif;
    }
    h3 {
      color: var(--material-theme-sys-light-on-surface, #1d1b16);
      font-size: var(--material-theme--headline--medium);
      letter-spacing: 2px;
      font-weight: 500;
      font-family: var(--font-neuton), serif;
    }
  }
`;
