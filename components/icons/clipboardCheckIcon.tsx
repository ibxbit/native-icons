import * as React from "react";

export const ClipboardCheckIcon = ({ size = 24, color = "#575757" }) => {
  // This path represents the 'glass' parts: the top clip and the circular badge
  const glassPath = "M17 12C20.3137 12 23 14.6863 23 18C23 21.3137 20.3137 24 17 24C13.6863 24 11 21.3137 11 18C11 14.6863 13.6863 12 17 12ZM20.207 15.793C19.8165 15.4024 19.1835 15.4024 18.793 15.793L16.5 18.0859L15.707 17.293L15.6309 17.2246C15.2381 16.9043 14.6591 16.9269 14.293 17.293C13.9024 17.6835 13.9024 18.3165 14.293 18.707L15.793 20.207C16.1835 20.5976 16.8165 20.5976 17.207 20.207L20.207 17.207C20.5976 16.8165 20.5976 16.1835 20.207 15.793ZM14.75 1C15.9926 1 17 2.00736 17 3.25C17 4.49264 15.9926 5.5 14.75 5.5H9.25C8.00736 5.5 7 4.49264 7 3.25C7 2.00736 8.00736 1 9.25 1H14.75Z";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        {/* 1. The Main Clipboard Body */}
        <path
          d="M3 9.4C3 7.15979 3 6.03969 3.43597 5.18404C3.81947 4.43139 4.43139 3.81947 5.18404 3.43597C6.03969 3 7.15979 3 9.4 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V15.6C21 17.8402 21 18.9603 20.564 19.816C20.1805 20.5686 19.5686 21.1805 18.816 21.564C17.9603 22 16.8402 22 14.6 22H9.4C7.15979 22 6.03969 22 5.18404 21.564C4.43139 21.1805 3.81947 20.5686 3.43597 19.816C3 18.9603 3 17.8402 3 15.6V9.4Z"
          fill="url(#web_cbc_bg)"
          mask="url(#web_cbc_mask)"
        />

        {/* 2. The Glass Morphism Foreground */}
        <path d={glassPath} fill="url(#web_cbc_glass)" />

        {/* 3. Glossy Ring Outline around Checkmark */}
        <path
          d="M17 12.75C14.1005 12.75 11.75 15.1005 11.75 18C11.75 20.8995 14.1005 23.25 17 23.25C19.8995 23.25 22.25 20.8995 22.25 18C22.25 15.1005 19.8995 12.75 17 12.75Z"
          fill="url(#web_cbc_gloss)"
        />

        <defs>
          <linearGradient id="web_cbc_bg" x1="12" y1="3" x2="12" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor={color} />
            <stop offset="1" stopColor="#151515" />
          </linearGradient>
          <linearGradient id="web_cbc_glass" x1="15" y1="1" x2="15" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E3E3E5" stopOpacity="0.6" />
            <stop offset="1" stopColor="#BBBBC0" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="web_cbc_gloss" x1="17" y1="12" x2="17" y2="18.9" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id="web_cbc_mask">
            <rect width="100%" height="100%" fill="white" />
            <path d={glassPath} fill="black" />
          </mask>
        </defs>
      </g>
    </svg>
  );
};