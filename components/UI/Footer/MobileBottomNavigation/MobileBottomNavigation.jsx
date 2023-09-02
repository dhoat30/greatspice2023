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
export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);

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
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            width: "100%",
            backgroundColor:
              "var(--material-theme-ref-primary-primary-87, #FCD758)",
          }}
        >
          <BottomNavigationAction
            label="Reservation"
            icon={<RestaurantMenuIcon />}
          />
          <BottomNavigationAction
            label="Order Online"
            icon={<PhoneIphoneIcon />}
          />

          <BottomNavigationAction label="View Menu" icon={<MenuBookIcon />} />
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
