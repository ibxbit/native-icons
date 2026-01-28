import * as React from "react";

export const CircleCopyPlusSVG = () => (
  <g fill="none">
    {/* 1. Background Circle (The "Original" copy) */}
    <path
      d="M9.5 1C14.1944 1 18 4.80558 18 9.5C18 10.5562 17.8062 11.567 17.4541 12.5H18C19.1046 12.5 20 13.3954 20 14.5C20 15.6046 19.1046 16.5 18 16.5H16.5039V18C16.5039 19.1046 15.6085 20 14.5039 20C13.3993 20 12.5039 19.1046 12.5039 18V17.4521C11.5698 17.8052 10.5578 18 9.5 18C4.80558 18 1 14.1944 1 9.5C1 4.80558 4.80558 1 9.5 1Z"
      fill="url(#ccp_grad_0)"
      mask="url(#ccp_mask)"
    />
    
    {/* 2. Blurred Depth Shadow */}
    <path
      d="M9.5 1C14.1944 1 18 4.80558 18 9.5C18 10.5562 17.8062 11.567 17.4541 12.5H18C19.1046 12.5 20 13.3954 20 14.5C20 15.6046 19.1046 16.5 18 16.5H16.5039V18C16.5039 19.1046 15.6085 20 14.5039 20C13.3993 20 12.5039 19.1046 12.5039 18V17.4521C11.5698 17.8052 10.5578 18 9.5 18C4.80558 18 1 14.1944 1 9.5C1 4.80558 4.80558 1 9.5 1Z"
      fill="url(#ccp_grad_0)"
      filter="url(#ccp_filter)"
      clipPath="url(#ccp_clip)"
    />

    {/* 3. Front Glass Circle with Plus Detail */}
    <path
      d="M14.5 6C19.1944 6 23 9.80558 23 14.5C23 19.1944 19.1944 23 14.5 23C9.80558 23 6 19.1944 6 14.5C6 9.80558 9.80558 6 14.5 6ZM14.5039 10C13.9516 10 13.5039 10.4477 13.5039 11V13.5H11C10.4478 13.5001 10 13.9478 10 14.5C10 15.0522 10.4478 15.4999 11 15.5H13.5039V18C13.5039 18.5523 13.9516 19 14.5039 19C15.0562 19 15.5039 18.5523 15.5039 18V15.5H18C18.5523 15.5 19 15.0523 19 14.5C19 13.9477 18.5523 13.5 18 13.5H15.5039V11C15.5039 10.4477 15.0562 10 14.5039 10Z"
      fill="url(#ccp_grad_1)"
    />

    {/* 4. Glossy Highlight Ring */}
    <path
      d="M14.5 6C19.1944 6 23 9.80558 23 14.5C23 19.1944 19.1944 23 14.5 23C9.80558 23 6 19.1944 6 14.5C6 9.80558 9.80558 6 14.5 6ZM14.5 6.75C10.2198 6.75 6.75 10.2198 6.75 14.5C6.75 18.7802 10.2198 22.25 14.5 22.25C18.7802 22.25 22.25 18.7802 22.25 14.5C22.25 10.2198 18.7802 6.75 14.5 6.75Z"
      fill="url(#ccp_grad_2)"
    />

    <defs>
      <linearGradient id="ccp_grad_0" x1="10.25" y1="1" x2="10.25" y2="19.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#575757" />
        <stop offset="1" stopColor="#151515" />
      </linearGradient>
      
      <linearGradient id="ccp_grad_1" x1="14.5" y1="6" x2="14.5" y2="23" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E3E3E5" stopOpacity="0.6" />
        <stop offset="1" stopColor="#BBBBC0" stopOpacity="0.6" />
      </linearGradient>
      
      <linearGradient id="ccp_grad_2" x1="14.5" y1="6" x2="14.5" y2="19" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>

      <filter id="ccp_filter">
        <feGaussianBlur stdDeviation="2" />
      </filter>

      <clipPath id="ccp_clip">
        <path d="M14.5 6C19.1944 6 23 9.80558 23 14.5C23 19.1944 19.1944 23 14.5 23C9.80558 23 6 19.1944 6 14.5C6 9.80558 9.80558 6 14.5 6ZM14.5039 10C13.9516 10 13.5039 10.4477 13.5039 11V13.5H11C10.4478 13.5001 10 13.9478 10 14.5C10 15.0522 10.4478 15.4999 11 15.5H13.5039V18C13.5039 18.5523 13.9516 19 14.5039 19C15.0562 19 15.5039 18.5523 15.5039 18V15.5H18C18.5523 15.5 19 15.0523 19 14.5C19 13.9477 18.5523 13.5 18 13.5H15.5039V11C15.5039 10.4477 15.0562 10 14.5039 10Z" />
      </clipPath>

      <mask id="ccp_mask">
        <rect width="100%" height="100%" fill="#FFF" />
        <path d="M14.5 6C19.1944 6 23 9.80558 23 14.5C23 19.1944 19.1944 23 14.5 23C9.80558 23 6 19.1944 6 14.5C6 9.80558 9.80558 6 14.5 6ZM14.5039 10C13.9516 10 13.5039 10.4477 13.5039 11V13.5H11C10.4478 13.5001 10 13.9478 10 14.5C10 15.0522 10.4478 15.4999 11 15.5H13.5039V18C13.5039 18.5523 13.9516 19 14.5039 19C15.0562 19 15.5039 18.5523 15.5039 18V15.5H18C18.5523 15.5 19 15.0523 19 14.5C19 13.9477 18.5523 13.5 18 13.5H15.5039V11C15.5039 10.4477 15.0562 10 14.5039 10Z" fill="#000" />
      </mask>
    </defs>
  </g>
);

export default function CircleCopyPlus({ size = 24, ...props }: { size?: number; [key: string]: any }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <CircleCopyPlusSVG />
    </svg>
  );
}