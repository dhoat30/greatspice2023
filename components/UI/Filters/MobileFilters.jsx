import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import styled from "styled-components";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function MobileFilters({ filterArray }) {
  const [isFixed, setIsFixed] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState(0);

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
  console.log(isFixed);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    router.replace(`${pathname}#${newValue}`);
  };
  const filterList = filterArray.map((category, index) => {
    const categoryValue = category.value;
    return (
      <Tab
        label={category.label}
        sx={{
          borderBottom: "4px solid #E7E2D9; ",
          color: "var(--material-theme-sys-light-on-surface-variant, #4C4639)",
        }}
        key={index}
        value={categoryValue}
      >
        <Link
          onClick={() => setActiveItem(categoryValue)}
          //   className={activeItem === categoryValue ? "active" : ""}
          href={`#${categoryValue}`}
        >
          {category.label}
        </Link>
      </Tab>
    );
  });

  return (
    <Container className={`${isFixed && "fixed-filter"} block md:hidden`}>
      <Box sx={{}}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs "
        >
          {filterList}
        </Tabs>
      </Box>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;

  z-index: 10;
  background: var(--material-theme-sys-light-surface-container-lowest, #fffffc);
  .Mui-selected {
    color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
    border-bottom: 2px solid var(--material-theme-sys-light-outline, #7d7767);
  }
  .MuiTabs-indicator {
    border-bottom: 4px solid var(--material-theme-sys-light-outline, #7d7767);
  }
`;
