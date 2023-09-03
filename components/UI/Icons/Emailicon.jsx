import React from "react";

function Emailicon({ className }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.3492 6.66113H6.54922C5.94422 6.66113 5.45472 7.15613 5.45472 7.76113L5.44922 14.3611C5.44922 14.9661 5.94422 15.4611 6.54922 15.4611H15.3492C15.9542 15.4611 16.4492 14.9661 16.4492 14.3611V7.76113C16.4492 7.15613 15.9542 6.66113 15.3492 6.66113ZM15.3492 8.86113L10.9492 11.6111L6.54922 8.86113V7.76113L10.9492 10.5111L15.3492 7.76113V8.86113Z"
        fill="#4C4639"
      />
      <circle cx="11" cy="11" r="10.5" stroke="#4C4639" />
    </svg>
  );
}

export default Emailicon;
