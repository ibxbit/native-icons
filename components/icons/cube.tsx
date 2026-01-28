import * as React from "react";

export const CubeIcon = ({ size = 24, color = "#575757" }) => {
  // Isometric top face (The Glass Layer)
  const topFace = "M12.8126 3.20231C12.3065 2.93256 11.6935 2.93256 11.1874 3.20231L4.85793 6.57641C4.49895 6.76777 4.50657 7.2849 4.87105 7.4656L11.1116 10.5596C11.6714 10.8371 12.3286 10.8371 12.8884 10.5596L19.129 7.4656C19.4934 7.2849 19.5011 6.76777 19.1421 6.57641L12.8126 3.20231Z";

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        {/* Full Hexagonal Silhouette (Base) */}
        <path
          d="M11.0391 1.02565C11.6376 0.69791 12.3624 0.69791 12.9609 1.02565L21.4609 5.68093C22.1016 6.0319 22.4999 6.70432 22.5 7.43483V16.5647C22.5 17.2954 22.1018 17.9686 21.4609 18.3196L12.9609 22.9739C12.3307 23.22 12 23.22 11.0391 22.9739L2.53906 18.3196C1.89821 17.9686 1.5 17.2954 1.5 16.5647V7.43483C1.50006 6.70432 1.89839 6.0319 2.53906 5.68093L11.0391 1.02565Z"
          fill="url(#cube_base_grad)"
          mask="url(#cube_top_mask)"
        />

        {/* Right Side Shadow Panel */}
        <path
          d="M22.5 16.5645C22.5 17.2951 22.1017 17.9684 21.4609 18.3193L12.9609 22.9736C12.3307 23.2197 12 23.2197V13.2295C12.3256 13.2295 12.6517 13.1501 12.9473 12.9912L21.9434 8.15625C22.2122 8.01166 22.3963 7.79257 22.5 7.5459V16.5645Z"
          fill="url(#cube_side_grad)"
        />

        {/* Frosted Top Face */}
        <path d={topFace} fill="url(#cube_glass_grad)" />

        {/* Highlight Rim */}
        <path
          d="M11.1876 3.20213L19.1417 6.57615M19.129 7.4658L12.8888 10.5596"
          stroke="url(#cube_reflect_grad)"
          strokeWidth="0.5"
          strokeLinecap="round"
        />

        <defs>
          <linearGradient id="cube_base_grad" x1="12" y1=".78" x2="12" y2="23.22" gradientUnits="userSpaceOnUse">
            <stop stopColor={color} />
            <stop offset="1" stopColor="#151515" />
          </linearGradient>
          <linearGradient id="cube_side_grad" x1="17.25" y1="7.546" x2="17.25" y2="23.22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#151515" />
            <stop offset="1" stopColor={color} />
          </linearGradient>
          <linearGradient id="cube_glass_grad" x1="12" y1="3" x2="12" y2="11" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E3E3E5" stopOpacity="0.6" />
            <stop offset="1" stopColor="#BBBBC0" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="cube_reflect_grad" x1="12" y1="3" x2="12" y2="7.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id="cube_top_mask">
            <rect width="100%" height="100%" fill="white" />
            <path d={topFace} fill="black" />
          </mask>
        </defs>
      </g>
    </svg>
  );
};