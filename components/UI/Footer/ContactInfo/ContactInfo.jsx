import React from "react";
import PhoneIcon from "../../Icons/PhoneIcon";
import Emailicon from "../../Icons/Emailicon";
import LocationIcon from "../../Icons/LocationIcon";
import Link from "next/link";
export default function ContactInfo({ contactInfo, className }) {
  return (
    <div className={`${className} contact-info-wrapper`}>
      <h4 className="column-title font-serif">Contact Us</h4>
      <ul className="py-6">
        <li>
          <Link
            className="flex gap-2 py-2"
            href={`tel: ${contactInfo.phone_number}`}
          >
            <PhoneIcon />
            <span> {contactInfo.phone_number}</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex gap-2 py-2"
            href={`mailto: ${contactInfo.email}`}
          >
            <Emailicon />
            <span> {contactInfo.email}</span>
          </Link>
        </li>
        <li className="flex gap-2 py-2">
          <LocationIcon />
          <span
            dangerouslySetInnerHTML={{ __html: contactInfo.address }}
          ></span>
        </li>
      </ul>
    </div>
  );
}
