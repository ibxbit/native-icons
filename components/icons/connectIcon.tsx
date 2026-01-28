import * as React from "react";

export const ConnectIcon = ({ size = 24, color = "#575757" }) => {
  // These nodes act as the "glass" layer
  const glassNodesPath = "M6 14C8.20914 14 10 15.7909 10 18C10 20.2091 8.20914 22 6 22C3.79086 22 2 20.2091 2 18C2 15.7909 3.79086 14 6 14ZM18 2C20.2091 2 22 3.79086 22 6C22 8.20914 20.2091 10 18 10C15.7909 10 14 8.20914 14 6C14 3.79086 15.7909 2 18 2Z";

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        {/* Background Connector Line */}
        <path
          d="M17.2929 5.29295C17.6834 4.90243 18.3164 4.90243 18.707 5.29295C19.0975 5.68348 19.0975 6.31649 18.707 6.70702L6.70696 18.707C6.31643 19.0975 5.68342 19.0975 5.29289 18.707C4.90237 18.3165 4.90237 17.6835 5.29289 17.293L17.2929 5.29295Z"
          fill="url(#conn_base_grad)"
          mask="url(#conn_glass_mask)"
        />
        
        {/* Static Background Nodes (Top Left & Bottom Right) */}
        <path d="M10 6C10 8.20914 8.20914 10 6 10C3.79086 10 2 8.20914 2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6Z" fill="url(#conn_base_grad)" />
        <path d="M22 18C22 20.2091 20.2091 22 18 22C15.7909 22 14 20.2091 14 18C14 15.7909 15.7909 14 18 14C20.2091 14 22 15.7909 22 18Z" fill="url(#conn_base_grad)" />

        {/* Glass Layer Nodes */}
        <path d={glassNodesPath} fill="url(#conn_glass_grad)" />

        {/* Glossy Highlights */}
        <path d="M9.25 18C9.25 16.2051 7.79493 14.75 6 14.75C4.20507 14.75 2.75 16.2051 2.75 18C2.75 19.7949 4.20507 21.25 6 21.25V22C3.79086 22 2 20.2091 2 18C2 15.7909 3.79086 14 6 14V14.75Z" fill="url(#conn_white_reflect)" />
        <path d="M21.25 6C21.25 4.20507 19.7949 2.75 18 2.75C16.2051 2.75 14.75 4.20507 14.75 6C14.75 7.79493 16.2051 9.25 18 9.25V10C15.7909 10 14 8.20914 14 6C14 3.79086 15.7909 2 18 2V2.75Z" fill="url(#conn_white_reflect)" />

        <defs>
          <linearGradient id="conn_base_grad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor={color} />
            <stop offset="1" stopColor="#151515" />
          </linearGradient>
          <linearGradient id="conn_glass_grad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E3E3E5" stopOpacity="0.6" />
            <stop offset="1" stopColor="#BBBBC0" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="conn_white_reflect" x1="12" y1="2" x2="12" y2="10" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id="conn_glass_mask">
            <rect width="100%" height="100%" fill="white" />
            <path d={glassNodesPath} fill="black" />
          </mask>
        </defs>
      </g>
    </svg>
  );
};