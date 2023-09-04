import React from "react";
import Link from "next/link";
export default function UsefulLink({ usefulLinks, className }) {
  const usefulLinksList = usefulLinks.map((item) => {
    return (
      <li key={item.id}>
        <Link className="flex gap-2 py-2" href={item.url}>
          {item.title}
        </Link>
      </li>
    );
  });
  return (
    <div className={`${className} useful-links-wrapper`}>
      <h4 className="column-title font-serif">Useful Links</h4>
      <ul className="py-6">{usefulLinksList}</ul>
    </div>
  );
}
