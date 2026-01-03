import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Mask, Rect } from "react-native-svg";

const CircleArrowLeft = ({ size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G>
      {/* Arrow Base Shape */}
      <Path
        d="M16.0001 7.61319C15.9999 5.90661 13.9844 4.90601 12.5177 5.88467L5.94444 10.2714C4.68584 11.1112 4.68584 12.8886 5.94444 13.7284L12.5177 18.1151C13.9845 19.0939 16.0001 18.0934 16.0001 16.3866V13.4999H21.0001L21.1534 13.4921C21.9098 13.4153 22.5001 12.7766 22.5001 11.9999C22.5 11.2233 21.9098 10.5845 21.1534 10.5077L21.0001 10.4999H16.0001V7.61319Z"
        fill="url(#cal_grad_1)"
        mask="url(#cal_mask_1)"
      />
      
      {/* Glass Circle Base */}
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM15 15.6387C15 17.0545 13.406 17.8842 12.2461 17.0723L7.04785 13.4336C6.05282 12.7369 6.05286 11.2631 7.04785 10.5664L12.2461 6.92773C13.406 6.11583 15 6.94554 15 8.36133V15.6387Z"
        fill="url(#cal_grad_2)"
      />
      
      {/* Outer Rim Highlight */}
      <Path
        d="M22.25 12C22.25 6.33908 17.6609 1.75 12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25V23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1L12.5664 1.01465C18.3783 1.30945 23 6.11484 23 12L22.9854 12.5664C22.6906 18.3783 17.8852 23 12 23V22.25C17.6609 22.25 22.25 17.6609 22.25 12Z"
        fill="url(#cal_grad_3)"
      />

      <Defs>
        <LinearGradient id="cal_grad_1" x1="13.75" y1="5.5" x2="13.75" y2="18.5" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset={1} stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="cal_grad_2" x1="12" y1="1" x2="12" y2="23" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#E3E3E5" stopOpacity={0.6} />
          <Stop offset={1} stopColor="#BBBBC0" stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="cal_grad_3" x1="12" y1="1" x2="12" y2="13.74" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <Mask id="cal_mask_1">
          <Rect width="100%" height="100%" fill="white" />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM15 15.6387C15 17.0545 13.406 17.8842 12.2461 17.0723L7.04785 13.4336C6.05282 12.7369 6.05286 11.2631 7.04785 10.5664L12.2461 6.92773C13.406 6.11583 15 6.94554 15 8.36133V15.6387Z"
            fill="black"
          />
        </Mask>
      </Defs>
    </G>
  </Svg>
);

export default CircleArrowLeft;