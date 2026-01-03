import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Mask, Rect } from "react-native-svg";

const Button = ({ size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G>
      <Path
        d="M6 13H18C18.9293 13 19.394 13 19.7804 12.9231C21.3671 12.6075 22.6075 11.3671 22.9231 9.78036C23 9.39397 23 8.92931 23 8C23 7.07069 23 6.60603 22.9231 6.21964C22.6075 4.63288 21.3671 3.39249 19.7804 3.07686C19.394 3 18.9293 3 18 3H6C5.07069 3 4.60603 3 4.21964 3.07686C2.63288 3.39249 1.39249 4.63288 1.07686 6.21964C1 6.60603 1 7.07069 1 8C1 8.92931 1 9.39397 1.07686 9.78036C1.39249 11.3671 2.63288 12.6075 4.21964 12.9231C4.60603 13 5.07069 13 6 13Z"
        fill="url(#btn_g1)"
        mask="url(#btn_m1)"
      />
      <Path
        d="M8.24247 10.4549C7.78665 9.08694 9.08838 7.78521 10.4563 8.24103L21.7466 12.0044C23.319 12.5289 23.3487 14.7428 21.7907 15.3093L17.0385 17.037L15.3108 21.7893C14.7442 23.3473 12.5304 23.3176 12.0059 21.7451L8.24247 10.4549Z"
        fill="url(#btn_g2)"
      />
      <Path
        d="M8.24219 10.4552C7.78643 9.0873 9.08818 7.78564 10.4561 8.2413L21.7471 12.005C23.1085 12.4596 23.312 14.1794 22.3301 15.0001H20.4463L21.5342 14.6046C22.4244 14.2807 22.4071 13.0166 21.5088 12.7169L10.2197 8.95224C9.43808 8.69179 8.69372 9.43622 8.9541 10.2179L10.5479 15.0001H9.75684L8.24219 10.4552Z"
        fill="url(#btn_g3)"
      />
      <Defs>
        <LinearGradient id="btn_g1" x1="12" y1="3" x2="12" y2="13" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset={1} stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="btn_g2" x1="8.665" y1="8.664" x2="18.672" y2="18.67" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#E3E3E5" stopOpacity={0.6} />
          <Stop offset={1} stopColor="#BBBBC0" stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="btn_g3" x1="15.546" y1="8.149" x2="15.546" y2="15" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" stopOpacity={1} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <Mask id="btn_m1">
          <Rect width="100%" height="100%" fill="#FFF" />
          <Path
            d="M8.24247 10.4549C7.78665 9.08694 9.08838 7.78521 10.4563 8.24103L21.7466 12.0044C23.319 12.5289 23.3487 14.7428 21.7907 15.3093L17.0385 17.037L15.3108 21.7893C14.7442 23.3473 12.5304 23.3176 12.0059 21.7451L8.24247 10.4549Z"
            fill="#000"
          />
        </Mask>
      </Defs>
    </G>
  </Svg>
);

export default Button;