import * as React from "react";

export const CrosshairsIcon = ({ size = 24, color = "#575757" }) => {
  // Targeting grid (the "+" parts and the inner circle)
  const gridPath = "M12 19.5V23M12 6.5C15 6.5 17.5 9 17.5 12C17.5 15 15 17.5 12 17.5C9 17.5 6.5 15 6.5 12C6.5 9 9 6.5 12 6.5ZM3.5 12H1M23 12H20.5M12 0V3.5";
  
  // The frosted glass lens shape
  const lensPath = "M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2ZM12 8C9.8 8 8 9.8 8 12C8 14.2 9.8 16 12 16C14.2 16 16 14.2 16 12C16 9.8 14.2 8 12 8Z";

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Target Grid */}
      <path
        d={gridPath}
        stroke="url(#cross_base_grad)"
        strokeWidth="2"
        strokeLinecap="round"
        mask="url(#cross_lens_mask)"
      />
      
      {/* Frosted Lens Layer */}
      <path d={lensPath} fill="url(#cross_glass_grad)" fillRule="evenodd" />
      
      {/* Top Edge Rim Reflection */}
      <path
        d="M12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75"
        stroke="url(#cross_reflect_grad)"
        strokeWidth="0.5"
      />

      <defs>
        <linearGradient id="cross_base_grad" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor={color} />
          <stop offset="1" stopColor="#151515" />
        </linearGradient>
        <linearGradient id="cross_glass_grad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E3E3E5" stopOpacity="0.6" />
          <stop offset="1" stopColor="#BBBBC0" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="cross_reflect_grad" x1="12" y1="2" x2="12" y2="13.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="cross_lens_mask">
          <rect width="100%" height="100%" fill="white" />
          <path d={lensPath} fill="black" fillRule="evenodd" />
        </mask>
      </defs>
    </svg>
  );
};