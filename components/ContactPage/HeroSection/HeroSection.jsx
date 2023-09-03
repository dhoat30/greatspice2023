import ContactForm from "@/components/UI/Forms/ContactForm";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Paper from "@mui/material/Paper";
import ArrowIcon from "@/components/UI/Icons/ArrowIcon";
import Link from "next/link";
import PhoneIcon from "@/components/UI/Icons/PhoneIcon";
import Emailicon from "@/components/UI/Icons/Emailicon";
import LocationIcon from "@/components/UI/Icons/LocationIcon";

function HeroSection({ contactInfo, heroData }) {
  console.log(contactInfo);

  return (
    <Container>
      <div className="hero-section">
        <div className="image-wrapper">
          <Image
            className="hidden lg:block"
            src={heroData.desktopImage.url}
            fill
            alt={heroData.desktopImage.alt}
          />
          <Image
            className="block lg:hidden"
            src={heroData.mobileImage.url}
            fill
            alt={heroData.mobileImage.alt}
          />
        </div>
      </div>
      <div className="content-wrapper ">
        <div className="flex justify-between row-max gap-16 row-max">
          <div className="form-wrapper flex-1 ">
            <Paper
              elevation={1}
              sx={{ padding: "16px 32px", borderRadius: "12px" }}
            >
              <ContactForm
                title="Contact Us"
                content="Let's talk flavors, reservations, and special events!"
                formName="Contact Us Form"
                emailTo="designer@webduel.co.nz"
                leadType="lead"
                emailRoute="/api/sendEmail"
                formType="contact-form"
              />
            </Paper>
          </div>
          <div className="info-wrapper flex-1 flex justify-between py-28">
            <div className="contact-usp-wrapper ">
              <div className="contact-wrapper">
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
            </div>
            <div className="opening-hours-social-wrapper "></div>
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
    .info-wrapper {
      .contact-usp-wrapper {
        .contact-wrapper {
          ul {
            li {
              margin-top: 16px;
              display: flex;
              span {
                margin-left: 8px;
                color: var(
                  --material-theme-sys-light-on-surface-variant,
                  #4c4639
                );
                font-weight: 400;
                font-size: var(--material-theme--body--large);
              }
              svg {
                path {
                  fill: var(
                    --material-theme-sys-light-on-surface-variant,
                    #4c4639
                  );
                }
              }
              a {
                display: flex;
              }
            }
          }
        }
      }
    }
  }
`;
