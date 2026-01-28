import * as React from "react";

export const CreditCardsIcon = ({ size = 24, color = "#575757" }) => {
  // The shape of the front card including the magnetic stripe cutout
  const frontCardPath = "M16.5996 7C18.8398 7 19.9608 6.99957 20.8164 7.43555C21.5689 7.81902 22.181 8.43109 22.5645 9.18359C23.0004 10.0392 23 11.1602 23 13.4004V15.5996C23 17.8398 23.0004 18.9608 22.5645 19.8164C22.181 20.5689 21.5689 21.181 20.8164 21.5645C19.9608 22.0004 18.8398 22 16.5996 22H10.4004C8.16018 22 7.03924 22.0004 6.18359 21.5645C5.43109 21.181 4.81902 20.5689 4.43555 19.8164C3.99957 18.9608 4 17.8398 4 15.5996V13.4004C4 11.1602 3.99957 10.0392 4.43555 9.18359C4.81902 8.43109 5.43109 7.81902 6.18359 7.43555C7.03924 6.99957 8.16018 7 10.4004 7H16.5996ZM7 12C6.44772 12 6 12.4477 6 13C6 13.5523 6.44772 14 7 14H20L20.1025 13.9951C20.6067 13.9438 21 13.5177 21 13C21 12.4823 20.6067 12.0562 20.1025 12.0049L20 12H7Z";

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        {/* Back Card (Solid) */}
        <path
          d="M13.6 17H7.4C5.15979 17 4.03968 17 3.18404 16.564C2.43139 16.1805 1.81947 15.5686 1.43597 14.816C1 13.9603 1 12.8402 1 10.6V8.4C1 6.15979 1 5.03968 1.43597 4.18404C1.81947 3.43139 2.43139 2.81947 3.18404 2.43597C4.03969 2 5.15979 2 7.4 2H13.6C15.8402 2 16.9603 2 17.816 2.43597C18.5686 2.81947 19.1805 3.43139 19.564 4.18404C20 5.03969 20 6.15979 20 8.4V11.5L21.4652 12.6037C21.3353 13.736 20.832 14.5061 19.7883 15.2341L18.3057 16.266C18.136 16.3841 17.9701 16.4855 17.816 16.564C16.9603 17 15.8402 17 13.6 17Z"
          fill="url(#cc_base_grad)"
          mask="url(#cc_glass_mask)"
        />

        {/* Front Card (Glass Layer) */}
        <path d={frontCardPath} fill="url(#cc_glass_grad)" />

        {/* Glossy Reflection Highlight */}
        <path
          d="M16.5996 7.75H10.4004C9.26798 7.75 8.46335 7.75035 7.83398 7.80176C7.21336 7.85247 6.82889 7.94936 6.52441 8.10449C5.91304 8.41605 5.41605 8.91305 5.10449 9.52441C4.94936 9.82889 4.85247 10.2134 4.80176 10.834C4.75035 11.4633 4.75 12.268 4.75 13.4004V15.5996"
          stroke="url(#cc_reflect_grad)"
          strokeWidth="0.5"
          fill="none"
        />

        <defs>
          <linearGradient id="cc_base_grad" x1="11.25" y1="2" x2="11.25" y2="17" gradientUnits="userSpaceOnUse">
            <stop stopColor={color} />
            <stop offset="1" stopColor="#151515" />
          </linearGradient>
          <linearGradient id="cc_glass_grad" x1="13.5" y1="7" x2="13.5" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E3E3E5" stopOpacity="0.6" />
            <stop offset="1" stopColor="#BBBBC0" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="cc_reflect_grad" x1="13.5" y1="7" x2="13.5" y2="15.6" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id="cc_glass_mask">
            <rect width="100%" height="100%" fill="white" />
            <path d={frontCardPath} fill="black" />
          </mask>
        </defs>
      </g>
    </svg>
  );
};