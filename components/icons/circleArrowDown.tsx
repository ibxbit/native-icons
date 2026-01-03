import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Mask, Rect } from "react-native-svg";

const CircleArrowDown = ({ size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G>
      {/* Background Arrow Shape */}
      <Path
        d="M16.3867 8C18.0933 8.0002 19.0939 10.0157 18.1152 11.4824L13.7285 18.0557C12.8886 19.3143 11.1113 19.3143 10.2715 18.0557L5.88474 11.4824C4.90598 10.0157 5.90651 8 7.61326 8L10.5 8L10.5 3L10.5078 2.84668C10.5846 2.09029 11.2233 1.5 12 1.5C12.7765 1.50011 13.4154 2.09035 13.4922 2.84668L13.5 3V8L16.3867 8Z"
        fill="url(#cad_grad_1)"
        mask="url(#cad_mask_1)"
      />

      {/* Glass Circle Effect */}
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM8.36133 9C6.94554 9 6.11583 10.594 6.92773 11.7539L10.5664 16.9521C11.2631 17.9472 12.7369 17.9471 13.4336 16.9521L17.0723 11.7539C17.8842 10.594 17.0545 9 15.6387 9L8.36133 9Z"
        fill="url(#cad_grad_2)"
      />

      {/* Outer Border Highlight */}
      <Path
        d="M22.25 12C22.25 6.33908 17.6609 1.75 12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25V23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1L12.5664 1.01465C18.3783 1.30945 23 6.11484 23 12L22.9854 12.5664C22.6906 18.3783 17.8852 23 12 23V22.25C17.6609 22.25 22.25 17.6609 22.25 12Z"
        fill="url(#cad_grad_3)"
      />

      <Defs>
        <LinearGradient id="cad_grad_1" x1="12" y1="1.5" x2="12" y2="19" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset={1} stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="cad_grad_2" x1="12" y1="1" x2="12" y2="23" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#E3E3E5" stopOpacity={0.6} />
          <Stop offset={1} stopColor="#BBBBC0" stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="cad_grad_3" x1="12" y1="1" x2="12" y2="13.74" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <Mask id="cad_mask_1">
          <Rect width="100%" height="100%" fill="white" />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM8.36133 9C6.94554 9 6.11583 10.594 6.92773 11.7539L10.5664 16.9521C11.2631 17.9472 12.7369 17.9471 13.4336 16.9521L17.0723 11.7539C17.8842 10.594 17.0545 9 15.6387 9L8.36133 9Z"
            fill="black"
          />
        </Mask>
      </Defs>
    </G>
  </Svg>
);

export default CircleArrowDown;