import * as React from "react";

export const MessageSVG = ({ color = "#262522" }: { color?: string }) => (
  <g>
    <path
      fill="url(#msg_a)"
      d="M1 9.993c0 1.631.44 3.154 1.196 4.472.19.46.082 1.03-.04 1.492-.185.705-.534 1.383-.942 1.791a.73.73 0 0 0 .477 1.245c.824.044 1.738-.119 2.535-.351a9.247 9.247 0 0 0 1.658-.653A8.995 8.995 0 0 0 10 18.995 8.998 8.998 0 0 0 10.078 1C5.108 1 1 5.024 1 9.993Z"
      mask="url(#msg_b)"
    />
    <path
      fill="url(#msg_e)"
      d="M22.75 14.497a7.21 7.21 0 0 1-.962 3.595c-.35.655.292 1.921.742 2.373a.75.75 0 0 1-.49 1.28c-.675.036-1.414-.098-2.05-.283a7.597 7.597 0 0 1-1.255-.485 7.243 7.243 0 0 1-3.236.77 7.247 7.247 0 1 1 .002-14.497 7.249 7.249 0 0 1 7.249 7.247Z"
    />
    <defs>
      <linearGradient id="msg_a" x1="10" x2="10" y1="1" y2="19" gradientUnits="userSpaceOnUse">
        <stop stopColor={color} />
        <stop offset="1" stopColor={color} stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="msg_e" x1="15.5" x2="15.5" y1="7.25" y2="21.75" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E3E3E5" stopOpacity="0.6" />
        <stop offset="1" stopColor="#BBBBC0" stopOpacity="0.6" />
      </linearGradient>
      <mask id="msg_b">
        <rect width="100%" height="100%" fill="#FFF" />
        <path fill="#000" d="M22.75 14.497a7.21 7.21 0 0 1-.962 3.595c-.35.655.292 1.921.742 2.373a.75.75 0 0 1-.49 1.28c-.675.036-1.414-.098-2.05-.283a7.597 7.597 0 0 1-1.255-.485 7.243 7.243 0 0 1-3.236.77 7.247 7.247 0 1 1 .002-14.497 7.249 7.249 0 0 1 7.249 7.247Z" />
      </mask>
    </defs>
  </g>
);

export default function Message({ size = 24, color = "#262522", ...props }: any) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <MessageSVG color={color} />
    </svg>
  );
}