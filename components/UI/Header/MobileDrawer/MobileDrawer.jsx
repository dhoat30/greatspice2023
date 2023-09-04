import { useState, useRef, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import style from "styled-components";
import MenuIcon from "../../Icons/MenuIcon";
import Link from "next/link";
import ArrowIcon from "../../Icons/ArrowIcon";
const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function MobileDrawer({ menuLinks }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(-1);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (event, index) => {
    event.preventDefault();
    setShowMenu(index === showMenu ? -1 : index);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItems = menuLinks.map((item, index) => {
    return (
      <li
        className="flex-auto text-center relative"
        key={index}

        // onMouseLeave={() => setShowMenu({ [index]: false })}
      >
        <Link
          href={item.url}
          className=" text-white font-light text-base hover:text-primary-dark text-center"
          onClick={
            item.subLinks ? (event) => toggleDropdown(event, index) : null
          }
        >
          {item.title}
          {item.subLinks && <ArrowIcon className="arrow " />}
        </Link>

        {item.subLinks && (
          <ul
            className={`${
              showMenu === index ? "block" : "hidden"
            }  bg-primary-dark text-surface-dark top-8  dropdown	`}
          >
            {item.subLinks.map((subLink, subIndex) => (
              <li key={subIndex} className="text-left">
                <Divider key={subIndex + 100} />
                <Link href={subLink.url} className="dropdown-link">
                  {subLink.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <Divider key={index + 122} />
      </li>
    );
  });

  return (
    <>
      <MenuIcon onClick={handleDrawerOpen} />
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          zIndex: "100",
        }}
      >
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor:
                "var(--material-theme-sys-dark-primary, #E7C446)",
            },
          }}
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIconStyle />
              ) : (
                <ChevronRightIconStyle />
              )}
            </IconButton>
          </DrawerHeader>
          <ListContainer>{menuItems}</ListContainer>
        </Drawer>
      </Box>
    </>
  );
}
const ListContainer = style.ul`
    li{ 
        a{ 
            display: block; 
            text-align: left; 
            padding: 16px 16px; 
            color: black; 
            font-weight: 400;
            position: relative;
            &:hover{ 
                color: black;
            }
        }
        svg{ 
            position: absolute; 
            right: 24px; 
            top: 26px; 
            transform: rotate(180deg);
            path{ 
                fill: black !important; 
            }
        }
        .dropdown{ 
                .dropdown-link{ 
                    padding: 16px 28px ;
                }
        }
    }
`;
const ChevronLeftIconStyle = style(ChevronLeftIcon)`
path{ 
    fill: black !important; 
}
`;
const ChevronRightIconStyle = style(ChevronLeftIcon)`
path{ 
    fill: black !important; 
}
`;
