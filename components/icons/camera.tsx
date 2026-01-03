import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Mask, Rect } from "react-native-svg";

const Camera = ({ size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G>
      <Path
        d="M18 12.5C18 15.8137 15.3137 18.5 12 18.5C8.68629 18.5 6 15.8137 6 12.5C6 9.18629 8.68629 6.5 12 6.5C15.3137 6.5 18 9.18629 18 12.5Z"
        fill="url(#cam_g1)"
        mask="url(#cam_m1)"
      />
      <Path
        d="M14.4648 2C15.1335 2 15.758 2.33423 16.1289 2.89062L17.5352 5H19C21.2091 5 23 6.79086 23 9V17C23 19.2091 21.2091 21 19 21H5C2.79086 21 1 19.2091 1 17V9C1 6.79086 2.79086 5 5 5H6.46484L7.87109 2.89062C8.24202 2.33424 8.86646 2 9.53516 2H14.4648ZM12 8C9.51472 8 7.5 10.0147 7.5 12.5C7.5 14.9853 9.51472 17 12 17C14.4853 17 16.5 14.9853 16.5 12.5C16.5 10.0147 14.4853 8 12 8Z"
        fill="url(#cam_g2)"
      />
      <Path
        d="M19 20.25V21H5V20.25H19ZM22.25 17V9C22.25 7.20507 20.7949 5.75 19 5.75H17.1338L15.5049 3.30664C15.302 3.00238 14.9779 2.80454 14.6201 2.75977L14.4648 2.75H9.53516C9.11725 2.75001 8.72696 2.95888 8.49512 3.30664L6.86621 5.75H5C3.20508 5.75 1.75 7.20508 1.75 9V17C1.75 18.7949 3.20507 20.25 5 20.25V21C2.79086 21 1 19.2091 1 17V9C1 6.79086 2.79086 5 5 5H6.46484L7.87109 2.89062C8.24202 2.33424 8.86646 2 9.53516 2H14.4648C15.1335 2 15.758 2.33423 16.1289 2.89062L17.5352 5H19C21.2091 5 23 6.79086 23 9V17C23 19.2091 21.2091 21 19 21V20.25C20.7949 20.25 22.25 18.7949 22.25 17Z"
        fill="url(#cam_g3)"
      />
      <Defs>
        <LinearGradient id="cam_g1" x1="12" y1="6.5" x2="12" y2="18.5" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset={1} stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="cam_g2" x1="12" y1="2" x2="12" y2="21" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#E3E3E5" stopOpacity={0.6} />
          <Stop offset={1} stopColor="#BBBBC0" stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="cam_g3" x1="12" y1="2" x2="12" y2="13.003" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <Mask id="cam_m1">
          <Rect width="100%" height="100%" fill="#FFF" />
          <Path
            d="M14.4648 2C15.1335 2 15.758 2.33423 16.1289 2.89062L17.5352 5H19C21.2091 5 23 6.79086 23 9V17C23 19.2091 21.2091 21 19 21H5C2.79086 21 1 19.2091 1 17V9C1 6.79086 2.79086 5 5 5H6.46484L7.87109 2.89062C8.24202 2.33424 8.86646 2 9.53516 2H14.4648ZM12 8C9.51472 8 7.5 10.0147 7.5 12.5C7.5 14.9853 9.51472 17 12 17C14.4853 17 16.5 14.9853 16.5 12.5C16.5 10.0147 14.4853 8 12 8Z"
            fill="#000"
          />
        </Mask>
      </Defs>
    </G>
  </Svg>
);

export default Camera;