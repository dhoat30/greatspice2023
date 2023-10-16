import EnquireForm from "@/components/UI/Forms/EnquireForm";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Paper from "@mui/material/Paper";
import ArrowIcon from "@/components/UI/Icons/ArrowIcon";
import Link from "next/link";
import PhoneIcon from "@/components/UI/Icons/PhoneIcon";
import Emailicon from "@/components/UI/Icons/Emailicon";
import LocationIcon from "@/components/UI/Icons/LocationIcon";
import ParkingIcon from "@/components/UI/Icons/ParkingIcon";
import WifiIcon from "@/components/UI/Icons/WifiIcon";
import BYOIcon from "@/components/UI/Icons/BYOIcon";
import AwardIcons from "@/components/UI/Icons/AwardIcons";
import WheelchairIcon from "@/components/UI/Icons/WheelchairIcon";
import Facebook from "@/components/UI/Icons/Facebook";
import Instagram from "@/components/UI/Icons/Instagram";

function HeroSection({ contactInfo, heroData, openingHours }) {
  return (
    <Container>
      <div className="hero-section">
        <div className="image-wrapper">
          <Image
            className="hidden lg:block"
            src={heroData.desktopImage.url}
            fill
            alt={heroData.desktopImage.alt}
            quality={70}
          />
          <Image
            className="block lg:hidden"
            src={heroData.mobileImage.url}
            fill
            alt={heroData.mobileImage.alt}
            quality={70}
          />
        </div>
      </div>
      <div className="content-wrapper ">
        <div className="lg:flex justify-between row-max gap-16 row-max ">
          <div className="form-wrapper flex-1 ">
            <Paper
              elevation={1}
              sx={{ borderRadius: "12px" }}
              className="p-4 sm:py-8 sm:px-8"
            >
              <EnquireForm
                title={heroData.title}
                subtitle={heroData.subtitle}
                formName="Enquire Now Form"
                emailTo="info@greatspicetauranga.co.nz"
                emailRoute="/api/sendmail"
                formType="enquire-form"
              />
            </Paper>
          </div>
          <div className="info-wrapper flex-1 sm:flex justify-between py-4 lg:py-28">
            <div className="contact-usp-wrapper ">
              <div className="contact-wrapper">
                <h4 className="column-title font-serif">Contact Us</h4>
                <ul>
                  <li>
                    <Link href={`tel: ${contactInfo.phone_number}`}>
                      <PhoneIcon />
                      <span> {contactInfo.phone_number}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={`mailto: ${contactInfo.email}`}>
                      <Emailicon />
                      <span> {contactInfo.email}</span>
                    </Link>
                  </li>
                  <li>
                    <LocationIcon />
                    <span
                      dangerouslySetInnerHTML={{ __html: contactInfo.address }}
                    ></span>
                  </li>
                </ul>
              </div>
              <div className="usp-wrapper mt-8">
                <ul>
                  <li>
                    <ParkingIcon />
                    <span> Free Parking</span>
                  </li>
                  <li>
                    <WifiIcon />
                    <span> Free Wifi</span>
                  </li>
                  <li>
                    <BYOIcon />
                    <span> BYO - Wine</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <AwardIcons />
                    <span> Award Winning</span>
                  </li>
                  <li>
                    <WheelchairIcon />
                    <span> Wheelchair Accessible</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="opening-hours-social-wrapper mt-8">
              <div className="opening-hours-wrapper">
                <h4 className="column-title font-serif">Opening Hours</h4>
                <div
                  className="opening-hours"
                  dangerouslySetInnerHTML={{ __html: openingHours }}
                ></div>
              </div>
              <div className="social-wrapper mt-6">
                <h4 className="column-title font-serif">Follow Us</h4>
                <div className="flex gap-2">
                  <Link href={contactInfo.facebook_link} target="_blank">
                    <Facebook />
                  </Link>
                  <Link href={contactInfo.instagram_link} target="_blank">
                    <Instagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HeroSection;
const Container = styled.section`
  .hero-section {
    position: relative;
    width: 100%;
    height: 60vh;
    img {
      object-fit: cover;
    }
  }
  .content-wrapper {
    background: var(--material-theme-sys-light-surface-container-low, #f9f3ea);

    .form-wrapper {
      position: relative;
      top: -15vh;
    }
    .column-title {
      color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
      font-size: var(--material-theme--headline--medium);
      font-weight: 400;
      letter-spacing: 1px;
    }
    ul {
      li {
        margin-top: 16px;
        display: flex;
        &:hover {
          svg {
            path {
              fill: #32302a;
            }
          }
          span {
            color: #32302a;
          }
        }
        span {
          margin-left: 8px;
          color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
          font-weight: 400;
          font-size: var(--material-theme--body--large);
        }
        svg {
          width: 25px;

          height: 25px;
          path {
            fill: var(--material-theme-sys-light-on-surface-variant, #4c4639);
          }
        }
        a {
          display: flex;
        }
      }
    }
    .info-wrapper {
      @media (max-width: 1024px) {
        margin-top: -100px;
      }
      .contact-usp-wrapper {
        .usp-wrapper {
          display: flex;
          gap: 24px;
          @media (max-width: 460px) {
            display: block;
          }
          svg {
            width: 40px;
          }
        }
      }
    }
    .opening-hours-social-wrapper {
      .opening-hours-wrapper {
        .opening-hours {
          margin-top: 16px;
          color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
          font-weight: 400;
          font-size: var(--material-theme--body--large);
          strong {
            font-weight: 600;
          }
        }
      }
      .social-wrapper {
        div {
          margin-top: 16px;
        }
      }
    }
  }
`;
