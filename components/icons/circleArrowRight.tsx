import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Mask, Rect } from "react-native-svg";

const CircleArrowRight = ({ size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G>
      {/* Background Arrow Shape */}
      <Path
        d="M8 7.61307C8.0002 5.90648 10.0157 4.90589 11.4824 5.88455L18.0557 10.2713C19.3143 11.1111 19.3143 12.8884 18.0557 13.7283L11.4824 18.115C10.0157 19.0938 8 18.0933 8 16.3865V13.4998H3L2.84668 13.492C2.09029 13.4152 1.5 12.7764 1.5 11.9998C1.50011 11.2232 2.09035 10.5844 2.84668 10.5076L3 10.4998H8V7.61307Z"
        fill="url(#car_grad_1)"
        mask="url(#car_mask_1)"
      />
      
      {/* Glass Circle Base */}
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM9 15.6387C9 17.0545 10.594 17.8842 11.7539 17.0723L16.9521 13.4336C17.9472 12.7369 17.9471 11.2631 16.9521 10.5664L11.7539 6.92773C10.594 6.11583 9 6.94554 9 8.36133V15.6387Z"
        fill="url(#car_grad_2)"
      />
      
      {/* Outer Border Rim Highlight */}
      <Path
        d="M22.25 12C22.25 6.33908 17.6609 1.75 12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25V23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1L12.5664 1.01465C18.3783 1.30945 23 6.11484 23 12L22.9854 12.5664C22.6906 18.3783 17.8852 23 12 23V22.25C17.6609 22.25 22.25 17.6609 22.25 12Z"
        fill="url(#car_grad_3)"
      />

      <Defs>
        <LinearGradient id="car_grad_1" x1="10.25" y1="5.5" x2="10.25" y2="18.5" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset={1} stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="car_grad_2" x1="12" y1="1" x2="12" y2="23" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#E3E3E5" stopOpacity={0.6} />
          <Stop offset={1} stopColor="#BBBBC0" stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="car_grad_3" x1="12" y1="1" x2="12" y2="13.74" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <Mask id="car_mask_1">
          <Rect width="100%" height="100%" fill="white" />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM9 15.6387C9 17.0545 10.594 17.8842 11.7539 17.0723L16.9521 13.4336C17.9472 12.7369 17.9471 11.2631 16.9521 10.5664L11.7539 6.92773C10.594 6.11583 9 6.94554 9 8.36133V15.6387Z"
            fill="black"
          />
        </Mask>
      </Defs>
    </G>
  </Svg>
);

export default CircleArrowRight;