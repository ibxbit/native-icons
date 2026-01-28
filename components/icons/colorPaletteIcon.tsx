import * as React from "react";

export const ColorPaletteIcon = ({ size = 24, color = "#575757" }) => {
  const dropperPath = "M16.0288 3.02747C17.3956 1.66105 19.6113 1.66108 20.978 3.02747C22.3449 4.3943 22.3449 6.61083 20.978 7.97766L18.0386 10.9171L19.561 12.4396L19.6646 12.5538C20.1444 13.1429 20.1098 14.0117 19.561 14.5607C19.0121 15.1096 18.1433 15.144 17.5542 14.6642L17.4399 14.5607L9.43994 6.56067C8.85415 5.97488 8.85415 5.02536 9.43994 4.43958C10.0257 3.85394 10.9753 3.85384 11.561 4.43958L13.0884 5.96692L16.0288 3.02747Z";

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        {/* Swatch/Base Path */}
        <path
          d="M12.0001 7.05612C12.0282 7.03799 15.0095 5.12181 17.0001 7.05612C18.9886 8.98851 17.0228 11.9218 17.0001 11.9555L8.95615 20.0005C7.83392 21.1226 6.1397 21.3216 4.81259 20.601L3.70712 21.7075C3.31669 22.0978 2.68356 22.0977 2.29306 21.7075C1.90259 21.317 1.90269 20.684 2.29306 20.2934L3.39951 19.186C2.68421 17.8601 2.88608 16.1702 4.00595 15.0503L12.0001 7.05612Z"
          fill="url(#cp_base_grad)"
          mask="url(#cp_glass_mask)"
        />
        {/* Glass Eyedropper Layer */}
        <path d={dropperPath} fill="url(#cp_glass_grad)" />
        {/* Inner Highlight Detail */}
        <path
          d="M16.029 3.02809C17.3958 1.6613 19.6114 1.66128 20.9782 3.02809C22.345 4.39491 22.345 6.61047 20.9782 7.9773L18.0377 10.9168L19.5602 12.4392L16.9772 10.9168L20.4479 7.44703C21.5174 6.15796 21.4547 4.56518 20.4479 3.55836Z"
          fill="url(#cp_white_reflect)"
        />
        <defs>
          <linearGradient id="cp_base_grad" x1="9.945" y1="6.192" x2="9.945" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor={color} />
            <stop offset="1" stopColor="#151515" />
          </linearGradient>
          <linearGradient id="cp_glass_grad" x1="15.502" y1="2.003" x2="15.502" y2="15" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E3E3E5" stopOpacity="0.6" />
            <stop offset="1" stopColor="#BBBBC0" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="cp_white_reflect" x1="15.502" y1="2" x2="15.502" y2="9.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id="cp_glass_mask">
            <rect width="100%" height="100%" fill="white" />
            <path d={dropperPath} fill="black" />
          </mask>
        </defs>
      </g>
    </svg>
  );
};