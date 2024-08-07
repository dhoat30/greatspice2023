import Link from "next/link";
import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

function Navbar({ menuLinks, className }) {
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
          {item.subLinks && (
            <ArrowIcon
              className={`${showMenu === index && "arrow-up"} arrow `}
            />
          )}
        </Link>

        {item.subLinks && (
          <ul
            className={`${
              showMenu === index ? "block" : "hidden"
            } absolute bg-primary-dark text-surface-dark top-8 w-52	drop-down-menu`}
          >
            {item.subLinks.map((subLink, subIndex) => (
              <li key={subIndex} className="text-left">
                <Link
                  href={subLink.url}
                  className="py-3 px-3 block border-t border-surface-dark "
                >
                  {subLink.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  });

  return (
    <ListContainer className={`${className} flex`} ref={menuRef}>
      {menuItems}
    </ListContainer>
  );
}

export default Navbar;
const ListContainer = styled.ul`
  li {
    a {
      &:hover {
        svg {
          path {
            fill: #cdad3a !important;
          }
        }
      }
    }
  }
  .drop-down-menu {
    z-index: 12;
    li {
      &:hover {
        background: #cdad3a;
      }
      a {
      }
    }
  }

  .arrow {
    transform: rotate(180deg);
    position: relative;
    left: 4px;
  }
  .arrow-up {
    transform: rotate(0deg);
  }
  /* list-style: none;
  display: flex;
  li {
    .MuiPaper-root {
      background: var(--material-theme--surfaces--dark-surface3) !important;
    }
  } */
`;
