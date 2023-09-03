"use client";
import React from "react";
import MobileBottomNavigation from "@/components/UI/Footer/MobileBottomNavigation/MobileBottomNavigation";
function Footer({ contactData }) {
  const orderOnlineLink = contactData.acf.contact_info.order_online;
  return (
    <MobileBottomNavigation
      reservationLink="/reservation"
      orderOnlineLink={orderOnlineLink}
      viewMenuLink="/menu"
    />
  );
}

export default Footer;
