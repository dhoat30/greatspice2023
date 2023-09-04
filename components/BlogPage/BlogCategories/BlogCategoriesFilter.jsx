import { useState } from "react";
import { Paper } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function BlogCategoriesFilter({
  className,
  blogCategoriesArr,
  onCategoryClick,
}) {
  const [value, setValue] = useState(0);

  const categories = blogCategoriesArr.map((item, index) => {
    if (item.id === 1) return null;
    return (
      <li
        key={item.id}
        onClick={() => onCategoryClick(item.id)}
        className="py-1 px-4 mt-3"
      >
        {item.title}
      </li>
    );
  });

  //   mobile filter list
  const filterList = blogCategoriesArr.map((item) => {
    if (item.id === 1) return null;
    return (
      <Tab
        onClick={() => onCategoryClick(item.id)}
        label={item.title}
        sx={{
          borderBottom: "4px solid #E7E2D9; ",
          color: "var(--material-theme-sys-light-on-surface-variant, #4C4639)",
        }}
        key={item.id}
        value={item.id}
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
            border:
              "1px solid var(--material-theme-sys-light-outline, #7D7767);",
          }}
        >
          <h3>Category Filter</h3>

          <ul className="category-list mt-2 ">
            <li
              className="py-1 px-4 mt-3"
              onClick={() => onCategoryClick(null)}
            >
              All
            </li>
            {categories}
          </ul>
        </Paper>
      </div>
      <div className="mobile-category-wrapper block md:hidden ">
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
                color:
                  "var(--material-theme-sys-light-on-surface-variant, #4C4639)",
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
      color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
      font-weight: 500;

      font-size: var(--material-theme--title--medium);
    }
    .category-list {
      li {
        font-size: var(--material-theme--label--large);
        color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
        font-weight: 400;
        cursor: pointer;

        &:hover {
          color: var(--material-theme-sys-light-on-surface, #1d1b16);
          font-weight: 500;

          border-left: 2px solid
            var(--material-theme-sys-light-on-surface, #1d1b16);
        }
      }
    }
  }
`;
