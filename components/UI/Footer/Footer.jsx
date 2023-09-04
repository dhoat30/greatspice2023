"use client";
import React, { use } from "react";
import MobileBottomNavigation from "@/components/UI/Footer/MobileBottomNavigation/MobileBottomNavigation";
import { usefulLinks } from "./footerLink";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import UsefulLink from "./UsefulLinks/UsefulLink";
import ContactInfo from "./ContactInfo/ContactInfo";
import OpeningHours from "./OpeningHours/OpeningHours";
import NewsletterForm from "../Forms/NewsletterForm";

function Footer({ contactData }) {
  const logo = contactData.acf.logo;
  // footer fist column data
  const contactInfo = contactData.acf.contact_info;
  // third column
  const openingHours = contactData.acf.opening_hours;

  // bottom navigation data
  const orderOnlineLink = contactData.acf.contact_info.order_online;

  return (
    <>
      <MobileBottomNavigation
        reservationLink="/reservation"
        orderOnlineLink={orderOnlineLink}
        viewMenuLink="/#menu-section"
      />
      <FooterContainer className=" py-16">
        <div className="footer-box py-12 md:py-28 row-max flex gap-4 sm:gap-16 px-6 xl:px-12 flex-wrap justify-center">
          {/* logo wrapper  */}
          <div className="logo-wrapper">
            <Image src={logo.url} alt={logo.alt} width="148" height="56" />
          </div>

          {/* footer columns  */}
          {/* first column  */}
          <ContactInfo contactInfo={contactInfo} className="flex-1" />

          {/* second column  */}
          <UsefulLink usefulLinks={usefulLinks} className="flex-auto" />

          {/* third column */}
          <OpeningHours
            openingHours={openingHours}
            contactInfo={contactInfo}
            className="flex-auto"
          />

          {/* fourth column  */}
          <div className="Newsletter-wrapper flex-auto xl:flex-auto">
            <h4 className="column-title font-serif">Newsletter</h4>
            <NewsletterForm
              formName="Newsletter Form"
              formType="newsletter-form"
              emailRoute={"/api/sendEmail"}
              emailTo="info@greatspicetauranga.co.nz"
            />
          </div>
        </div>
      </FooterContainer>
    </>
  );
}

export default Footer;
const FooterContainer = styled.footer`
  background: #2c2614;
  .footer-box {
    .column-title {
      color: var(--material-theme-sys-dark-on-surface-variant, #cec6b4);
      font-weight: 300;
      letter-spacing: 2px;
      font-size: var(--material-theme--headline--medium);
    }
    position: relative;
    border: 1px solid var(--material-theme-sys-light-outline, #7d7767);
    .logo-wrapper {
      background-color: #2c2614;
      position: absolute;
      top: -28px;
      left: 50%;
      transform: translateX(-50%);
      padding: 0 8px;
    }
    ul {
      li {
        font-size: var(--material-theme--body--large);
        letter-spacing: 1px;
        font-weight: 300;
        color: var(--material-theme-sys-dark-on-surface-variant, #cec6b4);
        cursor: pointer;
        svg {
          width: 30px;
          height: 30px;
          path {
            fill: var(--material-theme-sys-dark-on-surface-variant, #cec6b4);
          }
        }
        &:hover {
          span {
            text-decoration: underline;
          }
          color: white;
          svg {
            path {
              fill: white;
            }
            circle {
              stroke: white;
            }
          }
        }
      }
    }
    .opening-hours-social-wrapper {
      p {
        font-size: var(--material-theme--body--large);
        letter-spacing: 1px;
        font-weight: 300;
        color: var(--material-theme-sys-dark-on-surface-variant, #cec6b4);
        margin-top: 4px;
      }
      svg {
        path {
          fill: var(--material-theme-sys-dark-on-surface-variant, #cec6b4);
        }
        circle {
          stroke: var(--material-theme-sys-dark-on-surface-variant, #cec6b4);
        }
        &:hover {
          path {
            fill: white;
          }
          circle {
            stroke: white;
          }
        }
      }
    }
  }
`;
