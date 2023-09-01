import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
function AnchorButton({ href, children }) {
  return (
    <Button variant="contained">
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export default AnchorButton;
