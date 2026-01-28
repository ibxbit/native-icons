import * as React from "react";

export const CircleArrowRightSVG = () => (
  <g fill="none">
    {/* 1. Main Arrow Path */}
    <path
      d="M8 7.61307C8.0002 5.90648 10.0157 4.90589 11.4824 5.88455L18.0557 10.2713C19.3143 11.1111 19.3143 12.8884 18.0557 13.7283L11.4824 18.115C10.0157 19.0938 8 18.0933 8 16.3865V13.4998H3L2.84668 13.492C2.09029 13.4152 1.5 12.7764 1.5 11.9998C1.50011 11.2232 2.09035 10.5844 2.84668 10.5076L3 10.4998H8V7.61307Z"
      fill="url(#car_grad_0)"
      mask="url(#car_mask)"
    />
    {/* 2. Blurred Depth Layer */}
    <path
      d="M8 7.61307C8.0002 5.90648 10.0157 4.90589 11.4824 5.88455L18.0557 10.2713C19.3143 11.1111 19.3143 12.8884 18.0557 13.7283L11.4824 18.115C10.0157 19.0938 8 18.0933 8 16.3865V13.4998H3L2.84668 13.492C2.09029 13.4152 1.5 12.7764 1.5 11.9998C1.50011 11.2232 2.09035 10.5844 2.84668 10.5076L3 10.4998H8V7.61307Z"
      fill="url(#car_grad_0)"
      filter="url(#car_filter)"
      clipPath="url(#car_clip)"
    />
    {/* 3. Glass Circle Face */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM9 15.6387C9 17.0545 10.594 17.8842 11.7539 17.0723L16.9521 13.4336C17.9472 12.7369 17.9471 11.2631 16.9521 10.5664L11.7539 6.92773C10.594 6.11583 9 6.94554 9 8.36133V15.6387Z"
      fill="url(#car_grad_1)"
    />
    {/* 4. Highlight Ring */}
    <path
      d="M22.25 12C22.25 6.33908 17.6609 1.75 12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25V23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1L12.5664 1.01465C18.3783 1.30945 23 6.11484 23 12L22.9854 12.5664C22.6906 18.3783 17.8852 23 12 23V22.25C17.6609 22.25 22.25 17.6609 22.25 12Z"
      fill="url(#car_grad_2)"
    />

    <defs>
      <linearGradient id="car_grad_0" x1="10.25" y1="5.5" x2="10.25" y2="18.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#575757" />
        <stop offset="1" stopColor="#151515" />
      </linearGradient>
      <linearGradient id="car_grad_1" x1="12" y1="1" x2="12" y2="23" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E3E3E5" stopOpacity="0.6" />
        <stop offset="1" stopColor="#BBBBC0" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="car_grad_2" x1="12" y1="1" x2="12" y2="13.74" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <filter id="car_filter">
        <feGaussianBlur stdDeviation="2" />
      </filter>
      <clipPath id="car_clip">
        <path fillRule="evenodd" clipRule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM9 15.6387C9 17.0545 10.594 17.8842 11.7539 17.0723L16.9521 13.4336C17.9472 12.7369 17.9471 11.2631 16.9521 10.5664L11.7539 6.92773C10.594 6.11583 9 6.94554 9 8.36133V15.6387Z" />
      </clipPath>
      <mask id="car_mask">
        <rect width="100%" height="100%" fill="#FFF" />
        <path fillRule="evenodd" clipRule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM9 15.6387C9 17.0545 10.594 17.8842 11.7539 17.0723L16.9521 13.4336C17.9472 12.7369 17.9471 11.2631 16.9521 10.5664L11.7539 6.92773C10.594 6.11583 9 6.94554 9 8.36133V15.6387Z" fill="#000" />
      </mask>
    </defs>
  </g>
);

export default function CircleArrowRight({ size = 24, ...props }: { size?: number; [key: string]: any }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <CircleArrowRightSVG />
    </svg>
  );
}