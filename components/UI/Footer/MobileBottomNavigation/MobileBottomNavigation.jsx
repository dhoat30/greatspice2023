import { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { styled } from "styled-components";
import { useRouter } from "next/navigation";
export default function SimpleBottomNavigation({
  reservationLink,
  orderOnlineLink,
  viewMenuLink,
}) {
  const router = useRouter();
  const [value, setValue] = useState(0);

  const changeHandler = (event, newValue) => {
    router.push(newValue);
    setValue(newValue);
  };
  return (
    <Container className="block sm:hidden ">
      <Box
        sx={{
          width: "100%",
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={changeHandler}
          sx={{
            width: "100%",
            backgroundColor:
              "var(--material-theme-ref-primary-primary-87, #FCD758)",
          }}
        >
          <BottomNavigationAction
            value={reservationLink}
            label="Reservation"
            icon={<RestaurantMenuIcon />}
          />
          <BottomNavigationAction
            value={orderOnlineLink}
            label="Order Online"
            icon={<PhoneIphoneIcon />}
          />

          <BottomNavigationAction
            value={viewMenuLink}
            label="View Menu"
            icon={<MenuBookIcon />}
          />
        </BottomNavigation>
      </Box>
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  svg {
    path {
      fill: var(--material-theme-sys-dark-on-primary, #3c2f00);
    }
  }
  .Mui-selected {
    color: var(--material-theme-sys-dark-on-primary, #3c2f00);
  }
`;
