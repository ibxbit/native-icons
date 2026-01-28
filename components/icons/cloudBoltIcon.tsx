import * as React from "react";

export const CloudBoltIcon = ({ size = 24, color = "#575757" }) => {
  const cloudPath = "M4.55541 7.05505C5.02189 3.67429 8.00356 1 11.5833 1C15.1216 1 17.9883 3.5354 18.5755 6.83044C20.5176 7.17843 22 8.86597 22 10.8824C22 13.1489 20.1269 15 17.8333 15H6.16667C3.8731 15 2 13.1489 2 10.8824C2 9.1615 3.0571 7.66265 4.55541 7.05505Z";

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        {/* Dark Bolt Background */}
        <path
          d="M12.6934 6C12.8627 6.00002 13 6.1436 13 6.32031V14H12V15H16.1855C16.9731 15 17.4518 15.8683 17.0312 16.5342L12.9229 23.0391C12.6553 23.4625 12.0004 23.2732 12 22.7725V18H8.04297C7.2112 18 6.7428 17.0437 7.25293 16.3867L9.30078 13.7471C9.01557 13.4726 8.90291 13.0188 9.09863 12.6104L11.6455 6.2627C11.7239 6.10159 11.8825 6.00009 12.0557 6H12.6934Z"
          fill="url(#cb_bolt_grad)"
          mask="url(#cb_cloud_mask)"
        />
        {/* Glass Cloud */}
        <path d={cloudPath} fill="url(#cb_cloud_grad)" />
        {/* Top White Reflection */}
        <path
          d="M11.583 1.75C8.37857 1.75016 5.71432 4.14739 5.29883 7.15723L5.23926 7.58691L4.83691 7.75C3.61814 8.24437 2.75 9.47131 2.75 10.8828C2.75025 12.7266 4.2794 14.25 6.16699 14.25H17.833C19.7206 14.25 21.2497 12.7266 21.25 10.8828C21.25 9.24336 20.0416 7.85476 18.4434 7.56836L17.9287 7.47656L17.8369 6.96191C17.3118 4.01645 14.7493 1.75 11.583 1.75Z"
          fill="url(#cb_white_reflect)"
        />
        <defs>
          <linearGradient id="cb_bolt_grad" x1="12" y1="6" x2="12" y2="23" gradientUnits="userSpaceOnUse">
            <stop stopColor={color} />
            <stop offset="1" stopColor="#151515" />
          </linearGradient>
          <linearGradient id="cb_cloud_grad" x1="12" y1="1" x2="12" y2="15" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E3E3E5" stopOpacity="0.6" />
            <stop offset="1" stopColor="#BBBBC0" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="cb_white_reflect" x1="12" y1="1" x2="12" y2="9" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id="cb_cloud_mask">
            <rect width="100%" height="100%" fill="white" />
            <path d={cloudPath} fill="black" />
          </mask>
        </defs>
      </g>
    </svg>
  );
};