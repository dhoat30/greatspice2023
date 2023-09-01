import React from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import AnchorButton from "../../Buttons/AnchorButton";
import AnchorOutlinedButton from "../../Buttons/AnchorOutlinedButton";

function CtaButtons() {
  return (
    <div className="flex gap-x-2">
      <AnchorButton href="/home">Order Online</AnchorButton>
      {/* <AnchorOutlinedButton href="/home">Reserve a Table</AnchorOutlinedButton> */}
    </div>
  );
}

export default CtaButtons;
