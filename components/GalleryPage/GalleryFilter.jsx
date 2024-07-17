import { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function GalleryFilter({
  className,
  categoryArray,
  onCategoryClick,
}) {
  const [value, setValue] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  // fix mobile filter
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const categories = categoryArray.map((item, index) => {
    return (
      <li
        key={index}
        onClick={() => onCategoryClick(item.value)}
        className="py-1 px-4 mt-3"
      >
        {item.title}
      </li>
    );
  });

  //   mobile filter list
  const filterList = categoryArray.map((item, index) => {
    return (
      <Tab
        onClick={() => onCategoryClick(item.value)}
        label={item.title}
        sx={{
          borderBottom: "4px solid #E7E2D9; ",
          color: "var(--light-on-surface-variant, #4C4639)",
        }}
        key={index}
        value={item.value}
      >
        {item.title}
      </Tab>
    );
  });
  return (
    <Container className={`${className} `}>
      <div className="category-wrapper hidden md:block">
        <Paper
          variant="outlined"
          sx={{
            borderRadius: "8px",
            padding: "16px",
            border: "1px solid var(--light-outline, #7D7767);",
          }}
        >
          <h3>Category Filter</h3>

          <ul className="category-list mt-2 ">{categories}</ul>
        </Paper>
      </div>

      <div
        className={` ${
          isFixed && "fixed-filter"
        }  mobile-category-wrapper block md:hidden `}
      >
        <Box sx={{}}>
          <Tabs
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs "
          >
            <Tab
              onClick={() => onCategoryClick(null)}
              label="All"
              sx={{
                borderBottom: "4px solid #E7E2D9; ",
                color: "var(--light-on-surface-variant, #4C4639)",
              }}
              value="All"
            >
              All
            </Tab>
            {filterList}
          </Tabs>
        </Box>
      </div>
    </Container>
  );
}
const Container = styled.section`
  height: 100%;

  .category-wrapper {
    position: sticky;
    top: 24px;

    h3 {
      color: var(--light-on-surface-variant, #4c4639);
      font-weight: 500;

      font-size: var(--material-theme--title--medium);
    }
    .category-list {
      li {
        font-size: var(--material-theme--label--large);
        color: var(--light-on-surface-variant, #4c4639);
        font-weight: 400;
        cursor: pointer;

        &:hover {
          color: var(--light-on-surface, #1d1b16);
          font-weight: 500;

          border-left: 2px solid var(--light-on-surface, #1d1b16);
        }
      }
    }
  }
  .mobile-category-wrapper {
    background: var(--light-surface-container-lowest, #fffffc);

    .Mui-selected {
      color: var(--light-on-surface-variant, #4c4639);
      border-bottom: 2px solid var(--light-outline, #7d7767);
    }
    .MuiTabs-indicator {
      border-bottom: 4px solid var(--light-outline, #7d7767);
    }
    .MuiButtonBase-root {
      border-bottom: 4px solid var(--light-outline-variant, #cec6b4);
    }
  }
  @media (max-width: 768px) {
    width: calc(100% + 16px);
    height: auto;
    position: absolute;
    left: -8px;
    z-index: 10;
    top: -60px;
    background: var(--light-surface-container-lowest, #fffffc);
  }
`;
