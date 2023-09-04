import React from "react";

function StarIcon({ className }) {
  return (
    <svg
      className={className}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
    >
      <g clipPath="url(#clip0_188_3308)">
        <path
          d="M7.5 10.7938L11.3625 13.125L10.3375 8.73125L13.75 5.775L9.25625 5.39375L7.5 1.25L5.74375 5.39375L1.25 5.775L4.6625 8.73125L3.6375 13.125L7.5 10.7938Z"
          fill="#E36C1E"
        />
      </g>
      <defs>
        <clipPath id="clip0_188_3308">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default StarIcon;
