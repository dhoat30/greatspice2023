import React from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import AnchorButton from "../../Buttons/AnchorButton";

function CtaButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <AnchorButton href="/home">Order Online</AnchorButton>
      {/* <ContainedButton color="dark" link="/home">
        Order Online
      </ContainedButton>
      <OutlinedButton color="dark" link="/home">
        Reserve a Table
      </OutlinedButton> */}
    </Stack>
  );
}

export default CtaButtons;
