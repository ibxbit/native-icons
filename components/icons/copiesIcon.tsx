import * as React from "react";

export const CopiesIcon = ({ size = 24, color = "#575757" }) => {
  const rectPath = "M1 6.6C1 4.63982 1 3.65972 1.38148 2.91103C1.71703 2.25247 2.25247 1.71703 2.91103 1.38148C3.65972 1 4.63982 1 6.6 1H7.4C9.36018 1 10.3403 1 11.089 1.38148C11.7475 1.71703 12.283 2.25247 12.6185 2.91103C13 3.65972 13 4.63982 13 6.6V7.4C13 9.36018 13 10.3403 12.6185 11.089C12.283 11.7475 11.7475 12.283 11.089 12.6185C10.3403 13 9.36018 13 7.4 13H6.6C4.63982 13 3.65972 13 2.91103 12.6185C2.25247 12.283 1.71703 11.7475 1.38148 11.089C1 10.3403 1 9.36018 1 7.4V6.6Z";

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Document (Top Left) */}
      <path
        d={rectPath}
        fill="url(#copies_base_grad)"
        mask="url(#copies_glass_mask)"
      />
      
      {/* Middle Glass Layer (Frosted Square) */}
      <rect x="6" y="6" width="12" height="12" rx="3.5" fill="url(#copies_glass_grad)" />
      
      {/* Glass Inner Stroke / Reflection */}
      <path 
        d="M12.4 17.25H11.6V18H12.4V17.25ZM17.25 12.4V11.6C17.25 9.6 17.25 8.6 16.95 7.9C16.6 7.25 16.1 6.75 15.4 6.4C14.7 6.1 13.7 6.1 11.7 6.1H11.6C9.6 6.1 8.6 6.1 7.9 6.4C7.25 6.75 6.75 7.25 6.4 7.9C6.1 8.6 6.1 9.6 6.1 11.6V12.4C6.1 14.4 6.1 15.4 6.4 16.1C6.75 16.75 7.25 17.25 7.9 17.6C8.6 17.9 9.6 17.9 11.6 17.9H12.4V17.25Z" 
        fill="url(#copies_reflect_grad)" 
      />

      {/* Foreground Document (Bottom Right) */}
      <path
        d="M11 16.6C11 14.6398 11 13.6597 11.3815 12.911C11.717 12.2525 12.2525 11.717 12.911 11.3815C13.6597 11 14.6398 11 16.6 11H17.4C19.3602 11 20.3403 11 21.089 11.3815C21.7475 11.717 22.283 12.2525 22.6185 12.911C23 13.6597 23 14.6398 23 16.6V17.4C23 19.3602 23 20.3403 22.6185 21.089C22.283 21.7475 21.7475 22.283 21.089 22.6185C20.3403 23 19.3602 23 17.4 23H16.6C14.6398 23 13.6597 23 12.911 22.6185C12.2525 22.283 11.717 21.7475 11.3815 21.089C11 20.3403 11 19.3602 11 17.4V16.6Z"
        fill="url(#copies_base_grad)"
      />

      <defs>
        <linearGradient id="copies_base_grad" x1="12" y1="1" x2="12" y2="23" gradientUnits="userSpaceOnUse">
          <stop stopColor={color} />
          <stop offset="1" stopColor="#151515" />
        </linearGradient>
        <linearGradient id="copies_glass_grad" x1="12" y1="6" x2="12" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E3E3E5" stopOpacity="0.6" />
          <stop offset="1" stopColor="#BBBBC0" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="copies_reflect_grad" x1="12" y1="6" x2="12" y2="14" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" stopOpacity="0.8" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="copies_glass_mask">
          <rect width="100%" height="100%" fill="white" />
          <rect x="6" y="6" width="12" height="12" rx="3.5" fill="black" />
        </mask>
      </defs>
    </svg>
  );
};