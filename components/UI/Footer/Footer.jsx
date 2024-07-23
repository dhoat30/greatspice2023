"use client";
import React, { useState, useEffect } from "react";
import MobileBottomNavigation from "@/components/UI/Footer/MobileBottomNavigation/MobileBottomNavigation";
import { usefulLinks } from "./footerLink";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import UsefulLink from "./UsefulLinks/UsefulLink";
import ContactInfo from "./ContactInfo/ContactInfo";
import OpeningHours from "./OpeningHours/OpeningHours";
import NewsletterForm from "../Forms/NewsletterForm";
import Copyright from "./Copyright/Copyright";
import { Fab } from "@mui/material";
import { PhoneEnabled } from "@mui/icons-material";
import Container from "@mui/material/Container";

function Footer({ contactData }) {
  const [loadIframe, setLoadIframe] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 200 && !loadIframe) {
        setLoadIframe(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadIframe]);

  const logo = contactData.acf.logo;
  // footer fist column data
  const contactInfo = contactData.acf.contact_info;
  // third column
  const openingHours = contactData.acf.opening_hours;

  // bottom navigation data
  const orderOnlineLink = contactData.acf.contact_info.order_online;
  const copyright = contactData.acf.copyright;

  const awards = contactData.acf.awards.map((item, index) => {
    return (
      <Image
        key={index}
        src={item.awards_image.url}
        alt={item.awards_image.alt}
        width="90"
        height="100"
        quality={70}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    );
  });
  return (
    <>
      <GoogleMapContainer maxWidth="xl">
        {loadIframe && (
          <iframe
            src="https://storage.googleapis.com/maps-solutions-j8atwo95lz/locator-plus/c62h/locator-plus.html"
            width="100%"
            loading="lazy"
            style={{ height: "500px" }} // Set a fixed height or manage via CSS
          ></iframe>
        )}
      </GoogleMapContainer>

      <MobileBottomNavigation
        reservationLink="/reservation"
        orderOnlineLink={orderOnlineLink}
        viewMenuLink="/#menu-section"
      />
      <FooterContainer className="pt-16 pb-3">
        <div className="footer-box md:pt-12 row-max flex gap-4 sm:gap-16 px-6 xl:px-12 flex-wrap justify-center">
          {/* logo wrapper  */}
          <div className="logo-wrapper">
            <Image
              src={logo.url}
              alt={logo.alt}
              width="148"
              height="56"
              quality={70}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
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
            <div className="newsletter-form-wrapper">
              <h4 className="column-title font-serif">Newsletter</h4>
              <NewsletterForm
                formName="Newsletter Form"
                formType="newsletter-form"
                emailRoute={"/api/newsletter-hubspot"}
                emailTo="info@greatspicetauranga.co.nz"
                btnLabel="Sign up"
              />
            </div>
            <div className="awards-wrapper mt-2">
              <h4 className="column-title font-serif">Awards</h4>
              <div className="flex gap-2 py-6">{awards}</div>
            </div>
          </div>
        </div>
        <Copyright
          privacyPolicyLink="/policy/privacy-policy"
          termsAndConditionsLink="/policy/terms-and-conditions"
          copyrightInfo={copyright}
        />
        <Link
          className="phone-fab"
          href={`tel: ${contactInfo.phone_number}`}
          aria-label="Contact us"
        >
          <Fab
            sx={{
              backgroundColor: "var(--light-inverse-primary) !important",
            }}
            color="secondary"
            aria-label="phone"
            size="large"
          >
            {/* <LocalPhoneIcon /> */}
            <PhoneEnabled />
          </Fab>
        </Link>
      </FooterContainer>
    </>
  );
}

export default Footer;
const GoogleMapContainer = styled(Container)`
  margin-top: 16px;
  margin-bottom: 16px;
  height: 500px;
  iframe {
    height: 100% !important;
  }
  @media (max-width: 700px) {
    height: 600px;
  }
`;
const FooterContainer = styled.footer`
  .phone-fab {
    position: fixed;
    bottom: 24px;
    right: 16px;
    z-index: 100;
    @media (max-width: 640px) {
      bottom: 80px;
    }
  }
  background: #2c2614;
  .footer-box {
    .column-title {
      color: var(--dark-on-surface-variant, #cec6b4);
      font-weight: 300;
      letter-spacing: 2px;
      font-size: var(--material-theme--headline--medium);
    }
    position: relative;
    border: 1px solid var(--light-outline, #7d7767);
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
        color: var(--dark-on-surface-variant, #cec6b4);
        cursor: pointer;
        svg {
          width: 30px;
          height: 30px;
          path {
            fill: var(--dark-on-surface-variant, #cec6b4);
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
        color: var(--dark-on-surface-variant, #cec6b4);
        margin-top: 4px;
      }
      svg {
        path {
          fill: var(--dark-on-surface-variant, #cec6b4);
        }
        circle {
          stroke: var(--dark-on-surface-variant, #cec6b4);
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
