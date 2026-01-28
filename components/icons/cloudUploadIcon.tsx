import * as React from "react";

export const CloudUploadIcon = ({ size = 24, color = "#575757" }) => {
  const uploadPath = "M16.8791 16L14 16.0001V20.5C14 21.3285 13.3284 22 12.5 22H11.5C10.6716 22 10 21.3285 10 20.5V16.0001L7.1209 16C5.86315 16 5.1639 14.5451 5.94961 13.563L10.8287 7.46413C11.4292 6.71352 12.5708 6.71352 13.1713 7.46413L18.0504 13.563C18.8361 14.5451 18.1368 16 16.8791 16Z";

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        {/* Dark Cloud Background */}
        <path
          d="M3.0665 9.35256C3.62627 5.24736 7.20427 2 11.5 2C15.7459 2 19.1859 5.0787 19.8907 9.07982C22.2211 9.50238 24 11.5515 24 14C24 16.7523 21.7523 19 19 19H5C2.24772 19 0 16.7523 0 14C0 11.9104 1.26852 10.0904 3.0665 9.35256Z"
          fill="url(#up_cloud_base)"
          mask="url(#up_arrow_mask)"
        />
        {/* Glass Upload Arrow */}
        <path d={uploadPath} fill="url(#up_glass_grad)" />
        {/* Shine/Reflect Outline */}
        <path
          d="M9.99989 20.25V16H7.12098V15.25H10.7499V20.25C10.7499 20.8023 11.1976 21.25 11.7499 21.25V22C10.7834 22 9.99989 21.2165 9.99989 20.25ZM13.2499 20.25V15.25H16.8788V16H13.9999V20.25C13.9999 21.2165 13.2164 22 12.2499 22V21.25C12.8022 21.25 13.2499 20.8023 13.2499 20.25ZM10.829 7.46384C11.4295 6.71371 12.5703 6.71371 13.1708 7.46384L18.0507 13.5635C18.8358 14.5456 18.1363 16 16.8788 16V15.25L12.5858 7.93259C12.2856 7.55729 11.7142 7.55729 11.414 7.93259L6.53504 14.0312C6.14219 14.5223 6.4921 15.25 7.12098 15.25V16Z"
          fill="url(#up_white_reflect)"
        />
        <defs>
          <linearGradient id="up_cloud_base" x1="12" y1="2" x2="12" y2="19" gradientUnits="userSpaceOnUse">
            <stop stopColor={color} />
            <stop offset="1" stopColor="#151515" />
          </linearGradient>
          <linearGradient id="up_glass_grad" x1="12" y1="6" x2="12" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E3E3E5" stopOpacity="0.6" />
            <stop offset="1" stopColor="#BBBBC0" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="up_white_reflect" x1="12" y1="6.9" x2="12" y2="15.6" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id="up_arrow_mask">
            <rect width="100%" height="100%" fill="white" />
            <path d={uploadPath} fill="black" />
          </mask>
        </defs>
      </g>
    </svg>
  );
};