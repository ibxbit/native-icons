import * as React from "react";

export const CloudDownloadIcon = ({ size = 24, color = "#575757" }) => {
  const arrowPath = "M7.12097 13L10.0001 13L10.0001 8.5C10.0001 7.67157 10.6716 7 11.5001 7L12.5001 7C13.3285 7 14.0001 7.67157 14.0001 8.5V13L16.8792 13C18.1369 13 18.8362 14.4549 18.0504 15.4371L13.1714 21.5359C12.5709 22.2865 11.4292 22.2865 10.8288 21.5359L5.94968 15.4371C5.16396 14.4549 5.86322 13 7.12097 13Z";

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        {/* Dark Cloud Background */}
        <path
          d="M3.0665 9.35256C3.62627 5.24736 7.20427 2 11.5 2C15.7459 2 19.1859 5.0787 19.8907 9.07982C22.2211 9.50238 24 11.5515 24 14C24 16.7523 21.7523 19 19 19H5C2.24772 19 0 16.7523 0 14C0 11.9104 1.26852 10.0904 3.0665 9.35256Z"
          fill="url(#dl_cloud_base)"
          mask="url(#dl_arrow_mask)"
        />
        {/* Glass Arrow Foreground */}
        <path d={arrowPath} fill="url(#dl_glass_grad)" />
        {/* Shine/Reflect Outline */}
        <path
          d="M13.2501 8.5C13.2501 8.08579 12.9143 7.75 12.5001 7.75H11.5001C11.0859 7.75003 10.7501 8.08581 10.7501 8.5V13.75H7.12121C6.49233 13.75 6.14242 14.4777 6.53527 14.9688L11.4142 21.0674C11.7144 21.4427 12.2858 21.4427 12.5861 21.0674L17.465 14.9688C17.8578 14.4777 17.5079 13.75 16.879 13.75H13.2501V8.5Z"
          fill="url(#dl_white_reflect)"
        />
        <defs>
          <linearGradient id="dl_cloud_base" x1="12" y1="2" x2="12" y2="19" gradientUnits="userSpaceOnUse">
            <stop stopColor={color} />
            <stop offset="1" stopColor="#151515" />
          </linearGradient>
          <linearGradient id="dl_glass_grad" x1="12" y1="7" x2="12" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E3E3E5" stopOpacity="0.6" />
            <stop offset="1" stopColor="#BBBBC0" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="dl_white_reflect" x1="12" y1="7" x2="12" y2="15.7" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id="dl_arrow_mask">
            <rect width="100%" height="100%" fill="white" />
            <path d={arrowPath} fill="black" />
          </mask>
        </defs>
      </g>
    </svg>
  );
};