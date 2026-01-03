import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Mask, Rect } from "react-native-svg";

type BoxArchiveProps = {
  size?: number;
  color?: string;
} & React.ComponentProps<typeof Svg>;

const BoxArchive = ({ size = 24, color = "#262522", ...props }: BoxArchiveProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G>
      {/* Top small archive box (dark with customizable color) */}
      <Path
        d="M13.3431 1C14.404 1 15.4214 1.42143 16.1716 2.17157L18.8284 4.82843C19.5786 5.57857 20 6.59599 20 7.65685V13C20 15.2091 18.2091 17 16 17H8C5.79086 17 4 15.2091 4 13L4 4.5C4 2.567 5.567 1 7.5 1H13.3431Z"
        fill="url(#paint0_linear)"
        mask="url(#mask0)"
      />

      {/* Bottom large archive box (semi-transparent glow) */}
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5996 9C18.8398 9 19.9608 8.99957 20.8164 9.43555C21.5689 9.81902 22.181 10.4311 22.5645 11.1836C23.0004 12.0392 23 13.1602 23 15.4004V15.5996C23 17.8398 23.0004 18.9608 22.5645 19.8164C22.181 20.5689 21.5689 21.181 20.8164 21.5645C19.9608 22.0004 18.8398 22 16.5996 22H7.40039C5.16018 22 4.03924 22.0004 3.18359 21.5645C2.43109 21.181 1.81902 20.5689 1.43555 19.8164C0.999573 18.9608 1 17.8398 1 15.5996V15.4004C1 13.1602 0.999573 12.0392 1.43555 11.1836C1.81902 10.4311 2.43109 9.81902 3.18359 9.43555C4.03924 8.99957 5.16018 9 7.40039 9H16.5996ZM8.5 12C7.94772 12 7.5 12.4477 7.5 13C7.5 13.5523 7.94772 14 8.5 14H15.5C16.0523 14 16.5 13.5523 16.5 13C16.5 12.4477 16.0523 12 15.5 12H8.5Z"
        fill="url(#paint1_linear)"
      />
    </G>

    <Defs>
      {/* Gradient for the top small box - customizable color */}
      <LinearGradient id="paint0_linear" x1="12" y1="1" x2="12" y2="17" gradientUnits="userSpaceOnUse">
        <Stop stopColor={color} />
        <Stop offset="1" stopColor={color} stopOpacity="0.8" />
      </LinearGradient>

      {/* Gradient for the bottom large box - glow effect */}
      <LinearGradient id="paint1_linear" x1="12" y1="9" x2="12" y2="22" gradientUnits="userSpaceOnUse">
        <Stop stopColor="#E3E3E5" stopOpacity="0.6" />
        <Stop offset="1" stopColor="#BBBBC0" stopOpacity="0.6" />
      </LinearGradient>

      {/* Mask to cut out the bottom box from the top one (glass overlap effect) */}
      <Mask id="mask0">
        <Rect width="24" height="24" fill="white" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.5996 9C18.8398 9 19.9608 8.99957 20.8164 9.43555C21.5689 9.81902 22.181 10.4311 22.5645 11.1836C23.0004 12.0392 23 13.1602 23 15.4004V15.5996C23 17.8398 23.0004 18.9608 22.5645 19.8164C22.181 20.5689 21.5689 21.181 20.8164 21.5645C19.9608 22.0004 18.8398 22 16.5996 22H7.40039C5.16018 22 4.03924 22.0004 3.18359 21.5645C2.43109 21.181 1.81902 20.5689 1.43555 19.8164C0.999573 18.9608 1 17.8398 1 15.5996V15.4004C1 13.1602 0.999573 12.0392 1.43555 11.1836C1.81902 10.4311 2.43109 9.81902 3.18359 9.43555C4.03924 8.99957 5.16018 9 7.40039 9H16.5996ZM8.5 12C7.94772 12 7.5 12.4477 7.5 13C7.5 13.5523 7.94772 14 8.5 14H15.5C16.0523 14 16.5 13.5523 16.5 13C16.5 12.4477 16.0523 12 15.5 12H8.5Z"
          fill="black"
        />
      </Mask>
    </Defs>
  </Svg>
);

export default BoxArchive;