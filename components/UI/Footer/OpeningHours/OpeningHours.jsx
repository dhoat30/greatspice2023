import React from "react";
import Link from "next/link";
import Facebook from "../../Icons/Facebook";
import Instagram from "../../Icons/Instagram";

export default function OpeningHours({ className, openingHours, contactInfo }) {
  return (
    <div className={`${className} opening-hours-social-wrapper`}>
      <div className="opening-hours-wrapper">
        <h4 className="column-title font-serif">Opening Hours</h4>
        <div
          className="opening-hours py-8"
          dangerouslySetInnerHTML={{ __html: openingHours }}
        ></div>
      </div>
      <div className="social-wrapper mt-2">
        <h4 className="column-title font-serif">Follow Us</h4>
        <div className="flex gap-2 py-6">
          <Link
            href={contactInfo.facebook_link}
            target="_blank"
            aria-label="Facebook"
          >
            <Facebook />
          </Link>
          <Link
            href={contactInfo.instagram_link}
            target="_blank"
            aria-label="Instagram"
          >
            <Instagram />
          </Link>
        </div>
      </div>
    </div>
  );
}
