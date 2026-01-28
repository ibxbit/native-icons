import * as React from "react";

export const CircleArrowUpSVG = () => (
  <g fill="none">
    {/* 1. Main Arrow Path */}
    <path
      d="M7.61319 16C5.90661 15.9998 4.90601 13.9843 5.88467 12.5176L10.2714 5.94432C11.1112 4.68571 12.8886 4.68571 13.7284 5.94432L18.1151 12.5176C19.0939 13.9843 18.0934 16 16.3866 16H13.4999V21L13.4921 21.1533C13.4153 21.9097 12.7766 22.5 11.9999 22.5C11.2233 22.4999 10.5845 21.9096 10.5077 21.1533L10.4999 21V16H7.61319Z"
      fill="url(#cau_grad_0)"
      mask="url(#cau_mask)"
    />
    {/* 2. Blurred Depth Layer */}
    <path
      d="M7.61319 16C5.90661 15.9998 4.90601 13.9843 5.88467 12.5176L10.2714 5.94432C11.1112 4.68571 12.8886 4.68571 13.7284 5.94432L18.1151 12.5176C19.0939 13.9843 18.0934 16 16.3866 16H13.4999V21L13.4921 21.1533C13.4153 21.9097 12.7766 22.5 11.9999 22.5C11.2233 22.4999 10.5845 21.9096 10.5077 21.1533L10.4999 21V16H7.61319Z"
      fill="url(#cau_grad_0)"
      filter="url(#cau_filter)"
      clipPath="url(#cau_clip)"
    />
    {/* 3. Glass Circle Face */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM15.6387 15C17.0545 15 17.8842 13.406 17.0723 12.2461L13.4336 7.04785C12.7369 6.05282 11.2631 6.05286 10.5664 7.04785L6.92773 12.2461C6.11583 13.406 6.94554 15 8.36133 15H15.6387Z"
      fill="url(#cau_grad_1)"
    />
    {/* 4. Highlight Ring */}
    <path
      d="M22.25 12C22.25 6.33908 17.6609 1.75 12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25V23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1L12.5664 1.01465C18.3783 1.30945 23 6.11484 23 12L22.9854 12.5664C22.6906 18.3783 17.8852 23 12 23V22.25C17.6609 22.25 22.25 17.6609 22.25 12Z"
      fill="url(#cau_grad_2)"
    />

    <defs>
      <linearGradient id="cau_grad_0" x1="12" y1="5" x2="12" y2="22.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#575757" />
        <stop offset="1" stopColor="#151515" />
      </linearGradient>
      <linearGradient id="cau_grad_1" x1="12" y1="1" x2="12" y2="23" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E3E3E5" stopOpacity="0.6" />
        <stop offset="1" stopColor="#BBBBC0" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="cau_grad_2" x1="12" y1="1" x2="12" y2="13.74" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <filter id="cau_filter">
        <feGaussianBlur stdDeviation="2" />
      </filter>
      <clipPath id="cau_clip">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM15.6387 15C17.0545 15 17.8842 13.406 17.0723 12.2461L13.4336 7.04785C12.7369 6.05282 11.2631 6.05286 10.5664 7.04785L6.92773 12.2461C6.11583 13.406 6.94554 15 8.36133 15H15.6387Z" />
      </clipPath>
      <mask id="cau_mask">
        <rect width="100%" height="100%" fill="#FFF" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM15.6387 15C17.0545 15 17.8842 13.406 17.0723 12.2461L13.4336 7.04785C12.7369 6.05282 11.2631 6.05286 10.5664 7.04785L6.92773 12.2461C6.11583 13.406 6.94554 15 8.36133 15H15.6387Z" fill="#000" />
      </mask>
    </defs>
  </g>
);

export default function CircleArrowUp({ size = 24, ...props }: { size?: number; [key: string]: any }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <CircleArrowUpSVG />
    </svg>
  );
}