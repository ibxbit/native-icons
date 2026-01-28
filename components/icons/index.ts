import House from './house';
import AppStack from './AppStack';
import Message from './message';
import ArrowsBold from './arrows';
import Award from './award';
import Bell from './bell';
import Bolt from './bolt';
import BookOpen from './bookOpen';
import BoxArchive from './boxArchive';
import BrightnessIncrease from './brightnessIncrease';
import Bug from './bug';
// import Button from './button';
import Calendar from './calender';
import Camera from './camera';
import Cart from './cart';
import Chair from './chair';
import CircleArrowDown from './circleArrowDown';
import CircleArrowLeft from './circleArrowLeft';

import CircleArrowRight from './circleArrowRight';
import CircleArrowUp from './circleArrowUp';
import CircleChartLine from './circleChartLine';
import CircleCoin from './circleCoin'
import CircleCopyPlus from './circleCopyPlus';
import CircleQuestion from './circleQuestion';
import { ClipboardIcon } from './clipBoard';
import { ClipboardCheckIcon } from './clipboardCheckIcon';
import { CloudBoltIcon } from './cloudBoltIcon';
import { CloudDownloadIcon } from './cloudDownloadIcon';
import { CloudUploadIcon } from './cloudUploadIcon';
import { CodeEditorIcon } from './codeEditorIcon';
import { ColorPaletteIcon } from './colorPaletteIcon';
import { ConnectIcon } from './connectIcon';
import { CopiesIcon } from './copiesIcon';
import { CreditCardsIcon } from './creditCards';
import { CrosshairsIcon } from './crosshairs';
import { CubeIcon } from './cube';


// Export components for the Icon Grid UI
export { House, AppStack, Message, ArrowsBold, Award, Bell, Bolt, BookOpen, BoxArchive, BrightnessIncrease, Bug, Calendar, Camera, Cart, Chair, CircleArrowDown, CircleArrowLeft, CircleArrowRight, CircleArrowUp, CircleChartLine, CircleCoin, CircleCopyPlus, CircleQuestion, ClipboardIcon, ClipboardCheckIcon, CloudBoltIcon, CloudDownloadIcon, CloudUploadIcon, CodeEditorIcon,ColorPaletteIcon, ConnectIcon, CopiesIcon, CreditCardsIcon, CrosshairsIcon, CubeIcon };
// Export raw React Native code strings
export const RAW_CODE = {
  // These keys MUST match the export names above exactly

  AppStack: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg";

const AppStack = ({ size = 24, color = "#262522", ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G>
      <Path
        d="M1 8.349c0-1.037 0-1.555.154-2.016.136-.408.358-.782.651-1.097.331-.356.786-.604 1.696-1.1L7.268 2.08C8.826 1.231 9.606.806 10.243.884c.556.068 1.058.366 1.384.821.373.522.373 1.41.373 3.186V12.65c0 1.037 0 1.555-.154 2.016a2.247 2.247 0 01-.651 1.097c-.331.356-.786.604-1.696 1.1L5.732 18.919c-1.558.85-2.338 1.275-2.975 1.197a2.246 2.246 0 01-1.384-.821C1 18.773 1 17.885 1 16.11V8.349z"
        fill="url(#s0)"
      />
      <Path
        d="M6.5 9.849c0-1.037 0-1.555.154-2.016a2.247 2.247 0 01.651-1.097c.331-.356.786-.604 1.696-1.1L12.768 3.58c1.558-.85 2.338-1.275 2.975-1.197a2.246 2.246 0 011.384.821c.373.522.373 1.41.373 3.186v7.76c0 1.037 0 1.555-.154 2.016a2.247 2.247 0 01-.651 1.097c-.331.356-.786.604-1.696 1.1L11.232 20.42c-1.558.85-2.338 1.275-2.975 1.197a2.246 2.246 0 01-1.384-.821C6.5 20.273 6.5 19.385 6.5 17.61V9.849z"
        fill="url(#s1)"
      />
      <Defs>
        <LinearGradient id="s0" x1="6.5" y1="-0.5" x2="6.5" y2="21.5" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset="1" stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="s1" x1="12" y1="1" x2="12" y2="23" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#E3E3E5" stopOpacity={0.6} />
          <Stop offset="1" stopColor="#BBBBC0" stopOpacity={0.6} />
        </LinearGradient>
      </Defs>
    </G>
  </Svg>
);`,



  ArrowsBold: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Mask, Rect } from "react-native-svg";

const Swap = ({ size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G>
      <Path d="M12 15.1099V12.134H18.5C19.3284 12.134 20 11.4624 20 10.634L20 6.63397C20 5.80555 19.3284 5.13398 18.5 5.13398L12 5.13398V2.15802C12 0.917543 10.58 0.213184 9.59238 0.963774L1.07138 7.43974C0.281546 8.04001 0.281546 9.22795 1.07138 9.82822L9.59238 16.3042C10.58 17.0548 12 16.3504 12 15.1099Z" fill="url(#s_g1)" mask="url(#s_m1)" />
      <Path d="M12 21.976L12 19L5.50001 19C4.67158 19 4 18.3284 4.00001 17.5L4.00003 13.5C4.00003 12.6716 4.67161 12 5.50003 12L12 12L12 9.02404C12 7.78356 13.42 7.07921 14.4076 7.8298L22.9286 14.3058C23.7185 14.906 23.7185 16.094 22.9286 16.6942L14.4076 23.1702C13.42 23.9208 12 23.2164 12 21.976Z" fill="url(#s_g2)" />
      <Path d="M4 17.4996V13.4996C4.0001 12.6712 4.67165 11.9996 5.5 11.9996H12V9.024C12 7.78361 13.4196 7.07932 14.4072 7.82966L22.9287 14.3052C23.7185 14.9055 23.7184 16.0936 22.9287 16.6939L14.4072 23.1695C13.4505 23.8966 12.0881 23.2588 12.0039 22.0904L12 21.9761V18.9996H5.5V18.2496H12.75V21.9761C12.7503 22.5961 13.4604 22.948 13.9541 22.5728L22.4746 16.0972C22.8695 15.7971 22.8695 15.203 22.4746 14.9029L13.9541 8.42634C13.4603 8.05104 12.75 8.40376 12.75 9.024V12.7496H5.5C5.08586 12.7496 4.7501 13.0855 4.75 13.4996V17.4996C4.75 17.9138 5.08579 18.2496 5.5 18.2496V18.9996L5.34668 18.9918C4.59028 18.915 4 18.2762 4 17.4996Z" fill="url(#s_g3)" />
      <Defs>
        <LinearGradient id="s_g1" x1="10.239" y1=".655" x2="10.239" y2="16.613" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset={1} stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="s_g2" x1="24.5" y1="15.5" x2="4" y2="15.5" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#E3E3E5" stopOpacity={0.6} />
          <Stop offset={1} stopColor="#BBBBC0" stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="s_g3" x1="13.761" y1="7.521" x2="13.761" y2="16.762" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <Mask id="s_m1">
          <Rect width="100%" height="100%" fill="#FFF" />
          <Path d="M12 21.976L12 19L5.50001 19C4.67158 19 4 18.3284 4.00001 17.5L4.00003 13.5C4.00003 12.6716 4.67161 12 5.50003 12L12 12L12 9.02404C12 7.78356 13.42 7.07921 14.4076 7.8298L22.9286 14.3058C23.7185 14.906 23.7185 16.094 22.9286 16.6942L14.4076 23.1702C13.42 23.9208 12 23.2164 12 21.976Z" fill="#000" />
        </Mask>
      </Defs>
    </G>
  </Svg>
);`,

  Award: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask, ClipPath, Filter, FeGaussianBlur } from "react-native-svg";

const Award = ({
  size = 24,
  isActive = false,
  activeColor = "#6366f1",
  color = "#8a8987",
  endColor = "#BBBBC0",
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G fill="none">
      <Path
        d="M7.00024 16.0002C10.9037 14.6293 13.0983 14.6035 17.0002 16.0002V22.1243C17 22.9242 16.1068 23.4001 15.4426 22.9543L12.0002 20.6418L8.55786 22.9543C7.89363 23.4004 7.0005 22.9243 7.00024 22.1243V16.0002ZM11.1116 3.57544C11.4741 2.80882 12.5254 2.80882 12.8879 3.57544L14.2034 6.35767L17.1516 6.80493C17.9622 6.92786 18.2867 7.96309 17.7014 8.55884L15.5657 10.7307L16.0696 13.7952C16.2078 14.6361 15.3589 15.2768 14.6331 14.8792L12.0002 13.4348L9.36743 14.8792C8.64156 15.2771 7.79165 14.6362 7.92993 13.7952L8.43384 10.7307L6.2981 8.55884C5.71307 7.96307 6.03748 6.92789 6.8479 6.80493L9.79614 6.35767L11.1116 3.57544Z"
        fill="url(#awd_g0)"
        mask="url(#awd_m)"
      />
      <Path
        d="M7.00024 16.0002C10.9037 14.6293 13.0983 14.6035 17.0002 16.0002V22.1243C17 22.9242 16.1068 23.4001 15.4426 22.9543L12.0002 20.6418L8.55786 22.9543C7.89363 23.4004 7.0005 22.9243 7.00024 22.1243V16.0002ZM11.1116 3.57544C11.4741 2.80882 12.5254 2.80882 12.8879 3.57544L14.2034 6.35767L17.1516 6.80493C17.9622 6.92786 18.2867 7.96309 17.7014 8.55884L15.5657 10.7307L16.0696 13.7952C16.2078 14.6361 15.3589 15.2768 14.6331 14.8792L12.0002 13.4348L9.36743 14.8792C8.64156 15.2771 7.79165 14.6362 7.92993 13.7952L8.43384 10.7307L6.2981 8.55884C5.71307 7.96307 6.03748 6.92789 6.8479 6.80493L9.79614 6.35767L11.1116 3.57544Z"
        fill="url(#awd_g0)"
        filter="url(#awd_f)"
        clipPath="url(#awd_c)"
      />
      <Path
        d="M12 1C16.6944 1 20.5 4.80558 20.5 9.5C20.5 14.1944 16.6944 18 12 18C7.30558 18 3.5 14.1944 3.5 9.5C3.5 4.80558 7.30558 1 12 1Z"
        fill="url(#awd_g1)"
      />
      <Path
        d="M12 1C16.6944 1 20.5 4.80558 20.5 9.5C20.5 14.1944 16.6944 18 12 18C7.30558 18 3.5 14.1944 3.5 9.5C3.5 4.80558 7.30558 1 12 1ZM12 1.75C7.71979 1.75 4.25 5.21979 4.25 9.5C4.25 13.7802 7.71979 17.25 12 17.25C16.2802 17.25 19.75 13.7802 19.75 9.5C19.75 5.21979 16.2802 1.75 12 1.75Z"
        fill="url(#awd_g2)"
      />
      <Defs>
        <LinearGradient id="awd_g0" x1="12" y1="-.5" x2="12" y2="23.126" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset="1" stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="awd_g1" x1="12" y1="1" x2="12" y2="18" gradientUnits="userSpaceOnUse">
          <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
          <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="awd_g2" x1="12" y1="1" x2="12" y2="10.845" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset="1" stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <Filter id="awd_f" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
          <FeGaussianBlur stdDeviation="2" in="SourceGraphic" edgeMode="none" />
        </Filter>
        <ClipPath id="awd_c">
          <Path d="M12 1C16.6944 1 20.5 4.80558 20.5 9.5C20.5 14.1944 16.6944 18 12 18C7.30558 18 3.5 14.1944 3.5 9.5C3.5 4.80558 7.30558 1 12 1Z" />
        </ClipPath>
        <Mask id="awd_m">
          <Rect width="200%" height="200%" fill="#FFF" />
          <Path d="M12 1C16.6944 1 20.5 4.80558 20.5 9.5C20.5 14.1944 16.6944 18 12 18C7.30558 18 3.5 14.1944 3.5 9.5C3.5 4.80558 7.30558 1 12 1Z" fill="#000" />
        </Mask>
      </Defs>
    </G>
  </Svg>
);`,

  Bell: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Mask, Rect } from "react-native-svg";

const Bell = ({ size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G>
      <Path 
        d="M15.5 19.5C15.5 21.433 13.933 23 12 23C10.067 23 8.5 21.433 8.5 19.5C8.5 17.567 10.067 16 12 16C13.933 16 15.5 17.567 15.5 19.5Z" 
        fill="url(#b_g1)" 
        mask="url(#b_m1)" 
      />
      <Path 
        d="M4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9V12.1246C20 12.7003 20.134 13.2681 20.3915 13.783L20.6845 14.3689C21.4512 15.9024 21.8345 16.6691 21.7425 17.2923C21.662 17.8365 21.361 18.3236 20.9102 18.6389C20.3939 19 19.5367 19 17.8223 19H6.17771C4.46327 19 3.60606 19 3.08979 18.6389C2.63898 18.3236 2.33795 17.8365 2.25755 17.2923C2.16546 16.6691 2.54882 15.9024 3.31554 14.3689L3.60851 13.783C3.86597 13.2681 4 12.7003 4 12.1246V9Z" 
        fill="url(#b_g2)" 
      />
      <Path 
        d="M17.8223 18.25V19H6.17776V18.25H17.8223ZM19.25 12.125V9C19.25 4.99594 16.0041 1.75 12 1.75C7.99596 1.75 4.75002 4.99594 4.75002 9V12.125C4.74996 12.8169 4.58873 13.4993 4.27932 14.1182L3.98635 14.7041C3.59657 15.4837 3.32785 16.0227 3.16311 16.4443C2.99806 16.8669 2.9819 17.0663 2.99905 17.1826C3.0493 17.5227 3.23782 17.8273 3.51955 18.0244C3.6159 18.0918 3.80101 18.1666 4.25295 18.208C4.7038 18.2493 5.30599 18.25 6.17776 18.25V19L5.04494 18.9941C4.13826 18.9786 3.57614 18.9205 3.19045 18.7021L3.08987 18.6387C2.69536 18.3627 2.41547 17.9554 2.29787 17.4932L2.25783 17.292C2.18889 16.8246 2.38661 16.2764 2.8135 15.3848L3.31545 14.3691L3.60842 13.7832C3.83372 13.3326 3.96501 12.8413 3.99416 12.3398L4.00002 12.125V9C4.00002 4.58172 7.58174 1 12 1C16.4183 1 20 4.58172 20 9V12.125L20.0059 12.3398C20.035 12.8413 20.1663 13.3326 20.3916 13.7832L20.6846 14.3691C21.4511 15.9022 21.8341 16.6688 21.7422 17.292C21.6618 17.8362 21.3609 18.3234 20.9102 18.6387C20.3939 18.9998 19.5367 19 17.8223 19V18.25C18.6941 18.25 19.2962 18.2493 19.7471 18.208C20.199 18.1666 20.3841 18.0918 20.4805 18.0244C20.7622 17.8273 20.9507 17.5227 21.001 17.1826C21.0181 17.0663 21.002 16.8669 20.8369 16.4443C20.6722 16.0227 20.4035 15.4837 20.0137 14.7041L19.7207 14.1182C19.4113 13.4993 19.2501 12.8169 19.25 12.125Z" 
        fill="url(#b_g3)" 
      />
      <Defs>
        <LinearGradient id="b_g1" x1="12" y1="16" x2="12" y2="23" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset={1} stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="b_g2" x1="12" y1="1" x2="12" y2="19" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#E3E3E5" stopOpacity={0.6} />
          <Stop offset={1} stopColor="#BBBBC0" stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="b_g3" x1="12" y1="1" x2="12" y2="11.424" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <Mask id="b_m1">
          <Rect width="100%" height="100%" fill="#FFF" />
          <Path d="M4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9V12.1246C20 12.7003 20.134 13.2681 20.3915 13.783L20.6845 14.3689C21.4512 15.9024 21.8345 16.6691 21.7425 17.2923C21.662 17.8365 21.361 18.3236 20.9102 18.6389C20.3939 19 19.5367 19 17.8223 19H6.17771C4.46327 19 3.60606 19 3.08979 18.6389C2.63898 18.3236 2.33795 17.8365 2.25755 17.2923C2.16546 16.6691 2.54882 15.9024 3.31554 14.3689L3.60851 13.783C3.86597 13.2681 4 12.7003 4 12.1246V9Z" fill="#000" />
        </Mask>
      </Defs>
    </G>
  </Svg>
);`,
  Bolt: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Mask, Rect } from "react-native-svg";

const Bolt = ({ size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 25" fill="none" {...props}>
    <G>
      <Path 
        d="M12 15V23.0359C12 24.0747 13.3876 24.4247 13.8803 23.5103L19.9902 12.1709C20.4887 11.1737 19.7633 10.0002 18.6484 10H12V6C9.5 8.5 7.87348 10.6369 7.5 15H12Z" 
        fill="url(#blt_g1)" 
        mask="url(#blt_m1)" 
      />
      <Path 
        d="M12 9V1.96408C12 0.925331 10.6124 0.575284 10.1197 1.48974L4.00979 12.8291C3.51129 13.8263 4.23674 14.9998 5.35158 15H12V9Z" 
        fill="url(#blt_g2)" 
      />
      <Path 
        d="M10.1201 1.48889C10.6131 0.575627 11.9995 0.925489 12 1.9635V11.9996H11.25V1.9635C11.2499 1.87984 11.2247 1.83362 11.2002 1.80432C11.1708 1.76933 11.1232 1.73694 11.0615 1.72131C10.9997 1.70575 10.9419 1.71126 10.8994 1.72815C10.8639 1.74232 10.8201 1.77156 10.7803 1.84534L5.30762 11.9996H4.45605L10.1201 1.48889Z" 
        fill="url(#blt_g3)" 
      />
      <Defs>
        <LinearGradient id="blt_g1" x1="13.825" y1="6" x2="13.825" y2="27" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset={1} stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="blt_g2" x1="7.925" y1="-2" x2="7.925" y2="15" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#E3E3E5" stopOpacity={0.6} />
          <Stop offset={1} stopColor="#BBBBC0" stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="blt_g3" x1="8.228" y1=".963" x2="8.228" y2="11" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" stopOpacity={1} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <Mask id="blt_m1">
          <Rect width="100%" height="100%" fill="#FFF" />
          <Path d="M12 9V1.96408C12 0.925331 10.6124 0.575284 10.1197 1.48974L4.00979 12.8291C3.51129 13.8263 4.23674 14.9998 5.35158 15H12V9Z" fill="#000" />
        </Mask>
      </Defs>
    </G>
  </Svg>
);`,

  BookOpen: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Mask, Rect } from "react-native-svg";

const BookOpen = ({ size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G>
      <Path 
        d="M19.8 7C20.9201 7 21.4802 7 21.908 7.21799C22.2843 7.40973 22.5903 7.7157 22.782 8.09202C23 8.51984 23 9.0799 23 10.2V14.6C23 16.8402 23 17.9603 22.564 18.816C22.1805 19.5686 21.5686 20.1805 20.816 20.564C19.9603 21 18.8402 21 16.6 21C16.0003 21 15.3477 20.9253 14.7546 21.031C14.3513 21.1029 14.0296 21.3136 13.6938 21.5374C13.4363 21.7091 13.1783 21.93 12.8727 21.9845C12.7857 22 12.6956 22 12.5156 22H11.4844C11.3044 22 11.2143 22 11.1273 21.9845C10.8217 21.93 10.5637 21.7091 10.3062 21.5374C9.97044 21.3136 9.64872 21.1029 9.24542 21.031C8.65232 20.9253 7.99966 21 7.4 21C5.15979 21 4.03968 21 3.18404 20.564C2.43139 20.1805 1.81947 19.5686 1.43597 18.816C1 17.9603 1 16.8402 1 14.6L1 10.2C1 9.07989 1 8.51984 1.21799 8.09202C1.40973 7.71569 1.7157 7.40973 2.09202 7.21799C2.51984 7 3.0799 7 4.2 7L19.8 7Z" 
        fill="url(#bk_g1)" 
        mask="url(#bk_m1)" 
      />
      <Path 
        d="M17.1058 2.86537C18.4374 2.56947 19.1032 2.42152 19.6257 2.59361C20.0838 2.74451 20.472 3.05589 20.7187 3.47039C21 3.94312 21 4.62513 21 5.98917L21 14.4331C21 15.349 21 15.807 20.8377 16.1849C20.6945 16.5182 20.4634 16.8063 20.1691 17.0184C19.8354 17.2588 19.3883 17.3582 18.4942 17.5568L12.3471 18.9229C12.2176 18.9517 12.1528 18.966 12.0874 18.9718C12.0292 18.9769 11.9708 18.9769 11.9126 18.9718C11.8472 18.966 11.7824 18.9517 11.6529 18.9229L5.50582 17.5568C4.6117 17.3582 4.16464 17.2588 3.83093 17.0184C3.53658 16.8063 3.30545 16.5182 3.1623 16.1849C3 15.8069 3 15.349 3 14.4331L3 5.98917C3 4.62513 3 3.94312 3.28134 3.47039C3.52803 3.05589 3.9162 2.74451 4.37434 2.59361C4.89684 2.42152 5.56262 2.56947 6.89418 2.86537L11.6529 3.92287C11.7824 3.95165 11.8472 3.96604 11.9126 3.97178C11.9708 3.97688 12.0292 3.97688 12.0874 3.97178C12.1528 3.96604 12.2176 3.95165 12.3471 3.92287L17.1058 2.86537Z" 
        fill="url(#bk_g2)" 
      />
      <Path 
        d="M20.25 5.98921C20.25 5.29355 20.2494 4.82046 20.2178 4.46088C20.1867 4.10809 20.1309 3.94983 20.0742 3.85443C19.92 3.59536 19.677 3.3999 19.3906 3.3056C19.2852 3.27098 19.1185 3.25158 18.7676 3.29778C18.4097 3.34493 17.9476 3.44668 17.2686 3.59759L12.5098 4.65521C12.3988 4.67988 12.2789 4.70764 12.1533 4.71869C12.0516 4.72761 11.9484 4.72761 11.8467 4.71869C11.7211 4.70764 11.6012 4.67988 11.4902 4.65521L6.73145 3.59759C6.05237 3.44668 5.59029 3.34493 5.23242 3.29778C4.88146 3.25158 4.71479 3.27098 4.60938 3.3056C4.32304 3.3999 4.07996 3.59536 3.92578 3.85443C3.86911 3.94983 3.81326 4.10809 3.78223 4.46088C3.75062 4.82046 3.75 5.29355 3.75 5.98921V14.4336C3.75 14.9022 3.75076 15.2137 3.76855 15.4561C3.78565 15.6887 3.81605 15.8059 3.85156 15.8887C3.94103 16.097 4.08556 16.2776 4.26953 16.4102C4.34261 16.4628 4.45054 16.5178 4.67383 16.585C4.90661 16.6549 5.21124 16.7235 5.66895 16.8252L11.8154 18.1905C11.8836 18.2056 11.9214 18.2141 11.9502 18.2198C11.9732 18.2242 11.9794 18.2247 11.9785 18.2246C11.9928 18.2259 12.0072 18.2259 12.0215 18.2246C12.0206 18.2247 12.0268 18.2242 12.0498 18.2198C12.0786 18.2141 12.1164 18.2056 12.1846 18.1905L18.3311 16.8252C18.7888 16.7235 19.0934 16.6549 19.3262 16.585C19.5495 16.5178 19.6574 16.4628 19.7305 16.4102C19.9144 16.2776 20.059 16.097 20.1484 15.8887C20.1839 15.8059 20.2143 15.6887 20.2314 15.4561C20.2492 15.2137 20.25 14.9022 20.25 14.4336V5.98921Z" 
        fill="url(#bk_g3)" 
      />
      <Defs>
        <LinearGradient id="bk_g1" x1="12" y1="7" x2="12" y2="22" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset={1} stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="bk_g2" x1="21" y1="10.5" x2="3" y2="10.5" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#E3E3E5" stopOpacity={0.6} />
          <Stop offset={1} stopColor="#BBBBC0" stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="bk_g3" x1="12" y1="2.52" x2="12" y2="12.05" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <Mask id="bk_m1">
          <Rect width="100%" height="100%" fill="#FFF" />
          <Path d="M17.1058 2.86537C18.4374 2.56947 19.1032 2.42152 19.6257 2.59361C20.0838 2.74451 20.472 3.05589 20.7187 3.47039C21 3.94312 21 4.62513 21 5.98917L21 14.4331C21 15.349 21 15.807 20.8377 16.1849C20.6945 16.5182 20.4634 16.8063 20.1691 17.0184C19.8354 17.2588 19.3883 17.3582 18.4942 17.5568L12.3471 18.9229C12.2176 18.9517 12.1528 18.966 12.0874 18.9718C12.0292 18.9769 11.9708 18.9769 11.9126 18.9718C11.8472 18.966 11.7824 18.9517 11.6529 18.9229L5.50582 17.5568C4.6117 17.3582 4.16464 17.2588 3.83093 17.0184C3.53658 16.8063 3.30545 16.5182 3.1623 16.1849C3 15.8069 3 15.349 3 14.4331L3 5.98917C3 4.62513 3 3.94312 3.28134 3.47039C3.52803 3.05589 3.9162 2.74451 4.37434 2.59361C4.89684 2.42152 5.56262 2.56947 6.89418 2.86537L11.6529 3.92287C11.7824 3.95165 11.8472 3.96604 11.9126 3.97178C11.9708 3.97688 12.0292 3.97688 12.0874 3.97178C12.1528 3.96604 12.2176 3.95165 12.3471 3.92287L17.1058 2.86537Z" fill="#000" />
        </Mask>
      </Defs>
    </G>
  </Svg>
);`,

  BoxArchive: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask, ClipPath, Filter, FeGaussianBlur } from "react-native-svg";

const BoxArchive = ({ size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G fill="none">
      {/* Updated lid path to look like a folder tab: Raised on left, cut on top-right */}
      <Path
        d="M4 13V4.5C4 3.5 4.5 3 5.5 3H10C11 3 11.5 1 13 1H15.5C16.5 1 17.5 1.5 18.2 2.2L20 4C20.6 4.6 21 5.5 21 6.5V13C21 15.2091 19.2091 17 17 17H8C5.79086 17 4 15.2091 4 13Z"
        fill="url(#ba0)"
      />

      {/* Glass reflection: updated to match new lid shape */}
      <Path
        d="M4 13V4.5C4 3.5 4.5 3 5.5 3H10C11 3 11.5 1 13 1H15.5C16.5 1 17.5 1.5 18.2 2.2L20 4C20.6 4.6 21 5.5 21 6.5V13C21 15.2091 19.2091 17 17 17H8C5.79086 17 4 15.2091 4 13Z"
        fill="url(#ba0)"
        filter="url(#ba_filter)"
        clipPath="url(#ba_clip)"
      />

      {/* Main lower box body with handle bar (unchanged) */}
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5996 9C18.8398 9 19.9608 8.99957 20.8164 9.43555C21.5689 9.81902 22.181 10.4311 22.5645 11.1836C23.0004 12.0392 23 13.1602 23 15.4004V15.5996C23 17.8398 23.0004 18.9608 22.5645 19.8164C22.181 20.5689 21.5689 21.181 20.8164 21.5645C19.9608 22.0004 18.8398 22 16.5996 22H7.40039C5.16018 22 4.03924 22.0004 3.18359 21.5645C2.43109 21.181 1.81902 20.5689 1.43555 19.8164C0.999573 18.9608 1 17.8398 1 15.5996V15.4004C1 13.1602 0.999573 12.0392 1.43555 11.1836C1.81902 10.4311 2.43109 9.81902 3.18359 9.43555C4.03924 8.99957 5.16018 9 7.40039 9H16.5996ZM8.5 12C7.94772 12 7.5 12.4477 7.5 13C7.5 13.5523 7.94772 14 8.5 14H15.5C16.0523 14 16.5 13.5523 16.5 13C16.5 12.4477 16.0523 12 15.5 12H8.5Z"
        fill="url(#ba1)"
      />

      {/* Subtle white highlight on top of body (unchanged) */}
      <Path
        d="M16.5996 21.25V22H7.40039V21.25H16.5996ZM22.25 15.5996V15.4004C22.25 14.268 22.2497 13.4633 22.1982 12.834C22.1475 12.2134 22.0506 11.8289 21.8955 11.5244C21.5839 10.913 21.087 10.4161 20.4756 10.1045C20.1711 9.94936 19.7866 9.85247 19.166 9.80176C18.5367 9.75035 17.732 9.75 16.5996 9.75H7.40039C6.26798 9.75 5.46335 9.75035 4.83398 9.80176C4.21336 9.85247 3.82889 9.94936 3.52441 10.1045C2.91304 10.4161 2.41605 10.913 2.10449 11.5244C1.94936 11.8289 1.85247 12.2134 1.80176 12.834C1.75035 13.4633 1.75 14.268 1.75 15.4004V15.5996C1.75 16.732 1.75035 17.5367 1.80176 18.166C1.85247 18.7866 1.94936 19.1711 2.10449 19.4756C2.41605 20.087 2.91304 20.5839 3.52441 20.8955C3.82889 21.0506 4.21336 21.1475 4.83398 21.1982C5.46335 21.2497 6.26798 21.25 7.40039 21.25V22L5.91602 21.9932C4.72431 21.9744 3.96088 21.9041 3.34766 21.6406L3.18359 21.5645C2.52512 21.2289 1.97413 20.7183 1.58984 20.0918L1.43555 19.8164C0.999573 18.9608 1 17.8398 1 15.5996V15.4004C1 13.1602 0.999573 12.0392 1.43555 11.1836C1.81902 10.4311 2.43109 9.81902 3.18359 9.43555C3.82525 9.10861 4.61607 9.02728 5.91602 9.00684L7.40039 9H16.5996C18.8398 9 19.9608 8.99957 20.8164 9.43555C21.5689 9.81902 22.181 10.4311 22.5645 11.1836C23.0004 12.0392 23 13.1602 23 15.4004V15.5996C23 17.8398 23.0004 18.9608 22.5645 19.8164L22.4102 20.0918C22.0259 20.7183 21.4749 21.2289 20.8164 21.5645L20.6523 21.6406C19.816 21.9999 18.6999 22 16.5996 22V21.25C17.732 21.25 18.5366 21.2497 19.166 21.1982C19.7866 21.1475 20.1711 21.0506 20.4756 20.8955C21.087 20.5839 21.5839 20.087 21.8955 19.4756C22.0506 19.1711 22.1475 18.7866 22.1982 18.166C22.2497 17.5367 22.25 16.732 22.25 15.5996Z"
        fill="url(#ba2)"
      />

      <Defs>
        <LinearGradient id="ba0" x1="12" y1="1" x2="12" y2="17" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset="1" stopColor="#151515" />
        </LinearGradient>

        <LinearGradient id="ba1" x1="12" y1="9" x2="12" y2="22" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#E3E3E5" stopOpacity={0.6} />
          <Stop offset="1" stopColor="#BBBBC0" stopOpacity={0.6} />
        </LinearGradient>

        <LinearGradient id="ba2" x1="12" y1="9" x2="12" y2="16.528" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset="1" stopColor="#fff" stopOpacity={0} />
        </LinearGradient>

        <Filter id="ba_filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
          <FeGaussianBlur stdDeviation="2" in="SourceGraphic" edgeMode="none" />
        </Filter>

        <ClipPath id="ba_clip">
          <Rect x="0" y="9" width="24" height="13" fill="#fff" />
        </ClipPath>
      </Defs>
    </G>
  </Svg>
);`,

  BrightnessIncrease: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask, ClipPath, Filter, FeGaussianBlur } from "react-native-svg";

const BrightnessIncrease = ({ size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G fill="none">
      <Path
        d="M12 17C12.5523 17 13 17.4477 13 18V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V18C11 17.4477 11.4477 17 12 17ZM4.10352 18.543C4.49402 18.1525 5.12706 18.1525 5.51758 18.543C5.90809 18.9335 5.90808 19.5665 5.51758 19.957L4.70703 20.7676C4.31651 21.1581 3.68349 21.1581 3.29297 20.7676C2.90251 20.377 2.90246 19.744 3.29297 19.3535L4.10352 18.543ZM18.5693 18.543C18.9598 18.1525 19.5929 18.1526 19.9834 18.543L20.7949 19.3535C21.1852 19.744 21.1851 20.3771 20.7949 20.7676C20.4044 21.1581 19.7704 21.1581 19.3799 20.7676L18.5693 19.957C18.1791 19.5666 18.1791 18.9334 18.5693 18.543ZM13 4.06152C16.6186 4.51276 19.4842 7.38143 19.9355 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H19.9355C19.4842 16.6186 16.6186 19.4872 13 19.9385C15.667 13.8172 15.5982 10.3268 13 4.06152ZM6 11C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13H1C0.447715 13 2.41411e-08 12.5523 0 12C-5.17737e-10 11.4477 0.447715 11 1 11H6ZM12 0C12.5523 0 13 0.447715 13 1V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V1C11 0.447715 11.4477 0 12 0ZM3.2666 3.26855C3.65713 2.87811 4.29017 2.87806 4.68066 3.26855L5.49121 4.0791C5.88153 4.46961 5.8816 5.10269 5.49121 5.49316C5.10075 5.88363 4.46769 5.88351 4.07715 5.49316L3.2666 4.68262C2.87608 4.29209 2.87608 3.65908 3.2666 3.26855ZM19.3535 3.26855C19.744 2.87803 20.3771 2.87803 20.7676 3.26855C21.1581 3.65908 21.1581 4.29211 20.7676 4.68262L19.957 5.49316C19.5665 5.88362 18.9335 5.88362 18.543 5.49316C18.1525 5.10266 18.1525 4.46963 18.543 4.0791L19.3535 3.26855Z"
        fill="url(#bi0)"
        mask="url(#bi_mask)"
      />
      <Path
        d="M12 17C12.5523 17 13 17.4477 13 18V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V18C11 17.4477 11.4477 17 12 17ZM4.10352 18.543C4.49402 18.1525 5.12706 18.1525 5.51758 18.543C5.90809 18.9335 5.90808 19.5665 5.51758 19.957L4.70703 20.7676C4.31651 21.1581 3.68349 21.1581 3.29297 20.7676C2.90251 20.377 2.90246 19.744 3.29297 19.3535L4.10352 18.543ZM18.5693 18.543C18.9598 18.1525 19.5929 18.1526 19.9834 18.543L20.7949 19.3535C21.1852 19.744 21.1851 20.3771 20.7949 20.7676C20.4044 21.1581 19.7704 21.1581 19.3799 20.7676L18.5693 19.957C18.1791 19.5666 18.1791 18.9334 18.5693 18.543ZM13 4.06152C16.6186 4.51276 19.4842 7.38143 19.9355 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H19.9355C19.4842 16.6186 16.6186 19.4872 13 19.9385C15.667 13.8172 15.5982 10.3268 13 4.06152ZM6 11C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13H1C0.447715 13 2.41411e-08 12.5523 0 12C-5.17737e-10 11.4477 0.447715 11 1 11H6ZM12 0C12.5523 0 13 0.447715 13 1V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V1C11 0.447715 11.4477 0 12 0ZM3.2666 3.26855C3.65713 2.87811 4.29017 2.87806 4.68066 3.26855L5.49121 4.0791C5.88153 4.46961 5.8816 5.10269 5.49121 5.49316C5.10075 5.88363 4.46769 5.88351 4.07715 5.49316L3.2666 4.68262C2.87608 4.29209 2.87608 3.65908 3.2666 3.26855ZM19.3535 3.26855C19.744 2.87803 20.3771 2.87803 20.7676 3.26855C21.1581 3.65908 21.1581 4.29211 20.7676 4.68262L19.957 5.49316C19.5665 5.88362 18.9335 5.88362 18.543 5.49316C18.1525 5.10266 18.1525 4.46963 18.543 4.0791L19.3535 3.26855Z"
        fill="url(#bi0)"
        filter="url(#bi_filter)"
        clipPath="url(#bi_clip)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4Z"
        fill="url(#bi1)"
      />
      <Path
        d="M19.25 12C19.25 7.99594 16.0041 4.75 12 4.75C7.99594 4.75 4.75 7.99594 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25V20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20V19.25C16.0041 19.25 19.25 16.0041 19.25 12Z"
        fill="url(#bi2)"
      />
      <Defs>
        <LinearGradient id="bi0" x1="12" y1="0" x2="12" y2="24">
          <Stop stopColor="#575757" />
          <Stop offset="1" stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="bi1" x1="12" y1="4" x2="12" y2="20">
          <Stop stopColor="#E3E3E5" stopOpacity={0.6} />
          <Stop offset="1" stopColor="#BBBBC0" stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="bi2" x1="12" y1="4" x2="12" y2="13.266">
          <Stop stopColor="#fff" />
          <Stop offset="1" stopColor="#fff" stopOpacity={0} />
        </LinearGradient>

        <Filter id="bi_filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
          <FeGaussianBlur stdDeviation="2" in="SourceGraphic" edgeMode="none" />
        </Filter>

        <ClipPath id="bi_clip">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4Z"
            fill="url(#bi1)"
          />
        </ClipPath>

        <Mask id="bi_mask">
          <Rect width="100%" height="100%" fill="#FFF" />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4Z"
            fill="#000"
          />
        </Mask>
      </Defs>
    </G>
  </Svg>
);`,

  Bug: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask, ClipPath, Filter, FeGaussianBlur } from "react-native-svg";

const Bug = ({
  size = 24,
  color = "#8a8987",          // default start color for inactive glass gradient
  endColor = "#BBBBC0",       // default end color for inactive
  activeColor = "#6366f1",    // color when active (you can override this)
  isActive = false,           // set to true when focused/selected
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G fill="none">
      <Path
        d="M7 16C7.55228 16 8 16.4477 8 17C8 17.5523 7.55228 18 7 18H5C3.89543 18 3 18.8954 3 20C3 20.5523 2.55228 21 2 21C1.44772 21 1 20.5523 1 20C1 17.7909 2.79086 16 5 16H7ZM19 16C21.2091 16 23 17.7909 23 20C23 20.5523 22.5523 21 22 21C21.4477 21 21 20.5523 21 20C21 18.8954 20.1046 18 19 18H17C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16H19ZM12 14C12.5523 14 13 14.4477 13 15V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V15C11 14.4477 11.4477 14 12 14ZM6.5 12C7.05228 12 7.5 12.4477 7.5 13C7.5 13.5523 7.05228 14 6.5 14H2C1.44772 14 1 13.5523 1 13C1 12.4477 1.44772 12 2 12H6.5ZM22 12C22.5523 12 23 12.4477 23 13C23 13.5523 22.5523 14 22 14H17.5C16.9477 14 16.5 13.5523 16.5 13C16.5 12.4477 16.9477 12 17.5 12H22ZM2 5C2.55228 5 3 5.44772 3 6C3 7.10457 3.89543 8 5 8H7C7.55228 8 8 8.44772 8 9C8 9.55228 7.55228 10 7 10H5C2.79086 10 1 8.20914 1 6C1 5.44772 1.44772 5 2 5ZM22 5C22.5523 5 23 5.44772 23 6C23 8.20914 21.2091 10 19 10H17C16.4477 10 16 9.55228 16 9C16 8.44772 16.4477 8 17 8H19C20.1046 8 21 7.10457 21 6C21 5.44772 21.4477 5 22 5ZM12 2C13.6569 2 15 3.34315 15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2Z"
        fill="url(#bug0)"
        mask="url(#bug_mask)"
      />
      <Path
        d="M7 16C7.55228 16 8 16.4477 8 17C8 17.5523 7.55228 18 7 18H5C3.89543 18 3 18.8954 3 20C3 20.5523 2.55228 21 2 21C1.44772 21 1 20.5523 1 20C1 17.7909 2.79086 16 5 16H7ZM19 16C21.2091 16 23 17.7909 23 20C23 20.5523 22.5523 21 22 21C21.4477 21 21 20.5523 21 20C21 18.8954 20.1046 18 19 18H17C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16H19ZM12 14C12.5523 14 13 14.4477 13 15V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V15C11 14.4477 11.4477 14 12 14ZM6.5 12C7.05228 12 7.5 12.4477 7.5 13C7.5 13.5523 7.05228 14 6.5 14H2C1.44772 14 1 13.5523 1 13C1 12.4477 1.44772 12 2 12H6.5ZM22 12C22.5523 12 23 12.4477 23 13C23 13.5523 22.5523 14 22 14H17.5C16.9477 14 16.5 13.5523 16.5 13C16.5 12.4477 16.9477 12 17.5 12H22ZM2 5C2.55228 5 3 5.44772 3 6C3 7.10457 3.89543 8 5 8H7C7.55228 8 8 8.44772 8 9C8 9.55228 7.55228 10 7 10H5C2.79086 10 1 8.20914 1 6C1 5.44772 1.44772 5 2 5ZM22 5C22.5523 5 23 5.44772 23 6C23 8.20914 21.2091 10 19 10H17C16.4477 10 16 9.55228 16 9C16 8.44772 16.4477 8 17 8H19C20.1046 8 21 7.10457 21 6C21 5.44772 21.4477 5 22 5ZM12 2C13.6569 2 15 3.34315 15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2Z"
        fill="url(#bug0)"
        filter="url(#bug_filter)"
        clipPath="url(#bug_clip)"
      />
      <Path
        d="M19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12L5 14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14L19 12Z"
        fill="url(#bug1)"
      />
      <Path
        d="M5.75 14L5.75 12C5.75 8.54822 8.54822 5.75 12 5.75C15.4518 5.75 18.25 8.54822 18.25 12L18.25 14C18.25 17.4518 15.4518 20.25 12 20.25L12 21L12.3604 20.9912C16.0589 20.8037 19 17.7451 19 14L19 12C19 8.13401 15.866 5 12 5L11.6396 5.00879C7.94111 5.19633 5 8.25486 5 12L5 14L5.00879 14.3604C5.19633 18.0589 8.25486 21 12 21L12 20.25C8.54822 20.25 5.75 17.4518 5.75 14Z"
        fill="url(#bug2)"
      />
      <Defs>
        <LinearGradient id="bug0" x1="12" y1="-1" x2="12" y2="21">
          <Stop stopColor="#575757" />
          <Stop offset="1" stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="bug1" x1="12" y1="5" x2="12" y2="21">
          <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
          <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="bug2" x1="12" y1="5" x2="12" y2="14.266">
          <Stop stopColor="#fff" />
          <Stop offset="1" stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <Filter id="bug_filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
          <FeGaussianBlur stdDeviation="2" in="SourceGraphic" edgeMode="none" />
        </Filter>
        <ClipPath id="bug_clip">
          <Path
            d="M19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12L5 14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14L19 12Z"
            fill="url(#bug1)"
          />
        </ClipPath>
        <Mask id="bug_mask">
          <Rect width="100%" height="100%" fill="#FFF" />
          <Path
            d="M19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12L5 14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14L19 12Z"
            fill="#000"
          />
        </Mask>
      </Defs>
    </G>
  </Svg>
);`,

  Button: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask, ClipPath, Filter, FeGaussianBlur } from "react-native-svg";

const Button = ({
  size = 24,
  color = "#8a8987",          // default start color for inactive glass gradient
  endColor = "#BBBBC0",       // default end color for inactive
  activeColor = "#6366f1",    // color when active (you can override)
  isActive = false,           // set to true when focused/selected
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G fill="none">
      <Path
        d="M6 13H18C18.9293 13 19.394 13 19.7804 12.9231C21.3671 12.6075 22.6075 11.3671 22.9231 9.78036C23 9.39397 23 8.92931 23 8C23 7.07069 23 6.60603 22.9231 6.21964C22.6075 4.63288 21.3671 3.39249 19.7804 3.07686C19.394 3 18.9293 3 18 3H6C5.07069 3 4.60603 3 4.21964 3.07686C2.63288 3.39249 1.39249 4.63288 1.07686 6.21964C1 6.60603 1 7.07069 1 8C1 8.92931 1 9.39397 1.07686 9.78036C1.39249 11.3671 2.63288 12.6075 4.21964 12.9231C4.60603 13 5.07069 13 6 13Z"
        fill="url(#button0)"
        mask="url(#button_mask)"
      />
      <Path
        d="M6 13H18C18.9293 13 19.394 13 19.7804 12.9231C21.3671 12.6075 22.6075 11.3671 22.9231 9.78036C23 9.39397 23 8.92931 23 8C23 7.07069 23 6.60603 22.9231 6.21964C22.6075 4.63288 21.3671 3.39249 19.7804 3.07686C19.394 3 18.9293 3 18 3H6C5.07069 3 4.60603 3 4.21964 3.07686C2.63288 3.39249 1.39249 4.63288 1.07686 6.21964C1 6.60603 1 7.07069 1 8C1 8.92931 1 9.39397 1.07686 9.78036C1.39249 11.3671 2.63288 12.6075 4.21964 12.9231C4.60603 13 5.07069 13 6 13Z"
        fill="url(#button0)"
        filter="url(#button_filter)"
        clipPath="url(#button_clip)"
      />
      <Path
        d="M8.24247 10.4549C7.78665 9.08694 9.08838 7.78521 10.4563 8.24103L21.7466 12.0044C23.319 12.5289 23.3487 14.7428 21.7907 15.3093L17.0385 17.037L15.3108 21.7893C14.7442 23.3473 12.5304 23.3176 12.0059 21.7451L8.24247 10.4549Z"
        fill="url(#button1)"
      />
      <Path
        d="M8.24219 10.4552C7.78643 9.0873 9.08818 7.78564 10.4561 8.2413L21.7471 12.005C23.1085 12.4596 23.312 14.1794 22.3301 15.0001H20.4463L21.5342 14.6046C22.4244 14.2807 22.4071 13.0166 21.5088 12.7169L10.2197 8.95224C9.43808 8.69179 8.69372 9.43622 8.9541 10.2179L10.5479 15.0001H9.75684L8.24219 10.4552Z"
        fill="url(#button2)"
      />
      <Defs>
        <LinearGradient id="button0" x1="12" y1="3" x2="12" y2="13">
          <Stop stopColor="#575757" />
          <Stop offset="1" stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="button1" x1="8.665" y1="8.664" x2="18.672" y2="18.67">
          <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
          <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="button2" x1="15.546" y1="8.149" x2="15.546" y2="15">
          <Stop stopColor="#fff" />
          <Stop offset="1" stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <Filter id="button_filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
          <FeGaussianBlur stdDeviation="2" in="SourceGraphic" edgeMode="none" />
        </Filter>
        <ClipPath id="button_clip">
          <Path
            d="M8.24247 10.4549C7.78665 9.08694 9.08838 7.78521 10.4563 8.24103L21.7466 12.0044C23.319 12.5289 23.3487 14.7428 21.7907 15.3093L17.0385 17.037L15.3108 21.7893C14.7442 23.3473 12.5304 23.3176 12.0059 21.7451L8.24247 10.4549Z"
            fill="url(#button1)"
          />
        </ClipPath>
        <Mask id="button_mask">
          <Rect width="100%" height="100%" fill="#FFF" />
          <Path
            d="M8.24247 10.4549C7.78665 9.08694 9.08838 7.78521 10.4563 8.24103L21.7466 12.0044C23.319 12.5289 23.3487 14.7428 21.7907 15.3093L17.0385 17.037L15.3108 21.7893C14.7442 23.3473 12.5304 23.3176 12.0059 21.7451L8.24247 10.4549Z"
            fill="#000"
          />
        </Mask>
      </Defs>
    </G>
  </Svg>
);`,

  Calendar: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Mask, Rect } from "react-native-svg";

const Calendar = ({ size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G>
      <Path d="M6.47754 15.4951C7.58211 15.4951 8.47754 16.3905 8.47754 17.4951C8.47754 18.5997 7.58211 19.4951 6.47754 19.4951C5.37297 19.4951 4.47754 18.5997 4.47754 17.4951C4.47754 16.3905 5.37297 15.4951 6.47754 15.4951ZM12 15.4951C13.1046 15.4951 14 16.3905 14 17.4951C14 18.5997 13.1046 19.4951 12 19.4951C10.8954 19.4951 10 18.5997 10 17.4951C10 16.3905 10.8954 15.4951 12 15.4951ZM17.5234 15.4951C18.6278 15.4954 19.5234 16.3907 19.5234 17.4951C19.5234 18.5995 18.6278 19.4949 17.5234 19.4951C16.4189 19.4951 15.5234 18.5997 15.5234 17.4951C15.5234 16.3905 16.4189 15.4951 17.5234 15.4951ZM17 1C17.5523 1 18 1.44772 18 2V3.04004C18.7846 3.08782 19.3414 3.19353 19.8164 3.43555C20.5689 3.81902 21.181 4.43109 21.5645 5.18359C22.0004 6.03924 22 7.16018 22 9.40039V11H18.8428C19.259 11.3665 19.5234 11.9018 19.5234 12.5C19.5234 13.6044 18.6278 14.4997 17.5234 14.5C16.4189 14.5 15.5234 13.6046 15.5234 12.5C15.5234 11.9018 15.7869 11.3665 16.2031 11H13.3193C13.7357 11.3665 14 11.9017 14 12.5C14 13.6046 13.1046 14.5 12 14.5C10.8954 14.5 10 13.6046 10 12.5C10 11.9017 10.2643 11.3665 10.6807 11H7.79688C8.21325 11.3665 8.47754 11.9017 8.47754 12.5C8.47754 13.6046 7.58211 14.5 6.47754 14.5C5.37297 14.5 4.47754 13.6046 4.47754 12.5C4.47754 11.9017 4.74183 11.3665 5.1582 11H2V9.40039C2 7.16018 1.99957 6.03924 2.43555 5.18359C2.81902 4.43109 3.43109 3.81902 4.18359 3.43555C4.65858 3.19353 5.21543 3.08782 6 3.04004V2C6 1.44772 6.44772 1 7 1C7.55228 1 8 1.44772 8 2V3.00098C8.12937 3.00088 8.26277 3 8.40039 3H11V2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2V3H15.5996C15.7372 3 15.8706 3.00088 16 3.00098V2C16 1.44772 16.4477 1 17 1Z" fill="url(#cal_g1)" mask="url(#cal_mask)" />
      <Path d="M15.5996 7C17.8398 7 18.9608 6.99957 19.8164 7.43555C20.5689 7.81902 21.181 8.43109 21.5645 9.18359C22.0004 10.0392 22 11.1602 22 13.4004V15.5996C22 17.8398 22.0004 18.9608 21.5645 19.8164C21.181 20.5689 20.5689 21.181 19.8164 21.5645C18.9608 22.0004 17.8398 22 15.5996 22H8.40039C6.16018 22 5.03924 22.0004 4.18359 21.5645C3.43109 21.181 2.81902 20.5689 2.43555 19.8164C1.99957 18.9608 2 17.8398 2 15.5996V13.4004C2 11.1602 1.99957 10.0392 2.43555 9.18359C2.81902 8.43109 3.43109 7.81902 4.18359 7.43555C5.03924 6.99957 6.16018 7 8.40039 7H15.5996ZM6.5 16C5.67157 16 5 16.6716 5 17.5C5 18.3284 5.67157 19 6.5 19C7.32843 19 8 18.3284 8 17.5C8 16.6716 7.32843 16 6.5 16ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM17.5 16C16.6716 16 16 16.6716 16 17.5C16 18.3284 16.6716 19 17.5 19C18.3284 19 19 18.3284 19 17.5C19 16.6716 18.3284 16 17.5 16ZM6.5 11C5.67157 11 5 11.6716 5 12.5C5 13.3284 5.67157 14 6.5 14C7.32843 14 8 13.3284 8 12.5C8 11.6716 7.32843 11 6.5 11ZM12 11C11.1716 11 10.5 11.6716 10.5 12.5C10.5 13.3284 11.1716 14 12 14C12.8284 14 13.5 13.3284 13.5 12.5C13.5 11.6716 12.8284 11 12 11ZM17.5 11C16.6716 11 16 11.6716 16 12.5C16 13.3284 16.6716 14 17.5 14C18.3284 14 19 13.3284 19 12.5C19 11.6716 18.3284 11 17.5 11Z" fill="url(#cal_g2)" />
      <Path d="M15.5996 7C17.8398 7 18.9608 6.99957 19.8164 7.43555C20.5689 7.81902 21.181 8.43109 21.5645 9.18359C22.0004 10.0392 22 11.1602 22 13.4004V15.5996C22 17.8398 22.0004 18.9608 21.5645 19.8164C21.181 20.5689 20.5689 21.181 19.8164 21.5645C18.9608 22.0004 17.8398 22 15.5996 22H8.40039C6.16018 22 5.03924 22.0004 4.18359 21.5645C3.43109 21.181 2.81902 20.5689 2.43555 19.8164C1.99957 18.9608 2 17.8398 2 15.5996V13.4004C2 11.1602 1.99957 10.0392 2.43555 9.18359C2.81902 8.43109 3.43109 7.81902 4.18359 7.43555C5.03924 6.99957 6.16018 7 8.40039 7H15.5996ZM8.40039 7.75C7.26798 7.75 6.46335 7.75035 5.83398 7.80176C5.21336 7.85247 4.82889 7.94936 4.52441 8.10449C3.91304 8.41605 3.41605 8.91304 3.10449 9.52441C2.94936 9.82889 2.85247 10.2134 2.80176 10.834C2.75035 11.4633 2.75 12.268 2.75 13.4004V15.5996C2.75 16.732 2.75045 17.5364 2.80176 18.166C2.85235 18.7867 2.94856 19.1713 3.10352 19.4756C3.41508 20.087 3.913 20.5849 4.52441 20.8965C4.8287 21.0514 5.2133 21.1476 5.83398 21.1982C6.4636 21.2495 7.268 21.25 8.40039 21.25H15.5996C16.732 21.25 17.5364 21.2495 18.166 21.1982C18.7867 21.1476 19.1713 21.0514 19.4756 20.8965C20.087 20.5849 20.5849 20.087 20.8965 19.4756C21.0514 19.1713 21.1476 18.7867 21.1982 18.166C21.2495 17.5364 21.25 16.732 21.25 15.5996V13.4004C21.25 12.268 21.2497 11.4633 21.1982 10.834C21.1475 10.2134 21.0506 9.82889 20.8955 9.52441C20.5839 8.91304 20.087 8.41605 19.4756 8.10449C19.1711 7.94936 18.7866 7.85247 18.166 7.80176C17.5367 7.75035 16.732 7.75 15.5996 7.75H8.40039Z" fill="url(#cal_g3)" />
      <Defs>
        <LinearGradient id="cal_g1" x1="12" y1="-2" x2="12" y2="19.495" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset={1} stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="cal_g2" x1="12" y1="7" x2="12" y2="22" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#E3E3E5" stopOpacity={0.6} />
          <Stop offset={1} stopColor="#BBBBC0" stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="cal_g3" x1="12" y1="7" x2="12" y2="15.687" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <Mask id="cal_mask">
          <Rect width="100%" height="100%" fill="#FFF" />
          <Path d="M15.5996 7C17.8398 7 18.9608 6.99957 19.8164 7.43555C20.5689 7.81902 21.181 8.43109 21.5645 9.18359C22.0004 10.0392 22 11.1602 22 13.4004V15.5996C22 17.8398 22.0004 18.9608 21.5645 19.8164C21.181 20.5689 20.5689 21.181 19.8164 21.5645C18.9608 22.0004 17.8398 22 15.5996 22H8.40039C6.16018 22 5.03924 22.0004 4.18359 21.5645C3.43109 21.181 2.81902 20.5689 2.43555 19.8164C1.99957 18.9608 2 17.8398 2 15.5996V13.4004C2 11.1602 1.99957 10.0392 2.43555 9.18359C2.81902 8.43109 3.43109 7.81902 4.18359 7.43555C5.03924 6.99957 6.16018 7 8.40039 7H15.5996ZM6.5 16C5.67157 16 5 16.6716 5 17.5C5 18.3284 5.67157 19 6.5 19C7.32843 19 8 18.3284 8 17.5C8 16.6716 7.32843 16 6.5 16ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM17.5 16C16.6716 16 16 16.6716 16 17.5C16 18.3284 16.6716 19 17.5 19C18.3284 19 19 18.3284 19 17.5C19 16.6716 18.3284 16 17.5 16ZM6.5 11C5.67157 11 5 11.6716 5 12.5C5 13.3284 5.67157 14 6.5 14C7.32843 14 8 13.3284 8 12.5C8 11.6716 7.32843 11 6.5 11ZM12 11C11.1716 11 10.5 11.6716 10.5 12.5C10.5 13.3284 11.1716 14 12 14C12.8284 14 13.5 13.3284 13.5 12.5C13.5 11.6716 12.8284 11 12 11ZM17.5 11C16.6716 11 16 11.6716 16 12.5C16 13.3284 16.6716 14 17.5 14C18.3284 14 19 13.3284 19 12.5C19 11.6716 18.3284 11 17.5 11Z" fill="#000" />
        </Mask>
      </Defs>
    </G>
  </Svg>
);`,

  Camera: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask, ClipPath, Filter, FeGaussianBlur } from "react-native-svg";

const Camera = ({
  size = 24,
  isActive = false,
  activeColor = "#6366f1",
  color = "#8a8987",
  endColor = "#BBBBC0",
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G fill="none">
      <Path 
        d="M18 12.5C18 15.8137 15.3137 18.5 12 18.5C8.68629 18.5 6 15.8137 6 12.5C6 9.18629 8.68629 6.5 12 6.5C15.3137 6.5 18 9.18629 18 12.5Z" 
        fill="url(#cam_g0)" 
        mask="url(#cam_m)"
      />
      <Path 
        d="M18 12.5C18 15.8137 15.3137 18.5 12 18.5C8.68629 18.5 6 15.8137 6 12.5C6 9.18629 8.68629 6.5 12 6.5C15.3137 6.5 18 9.18629 18 12.5Z" 
        fill="url(#cam_g0)" 
        filter="url(#cam_f)" 
        clipPath="url(#cam_c)"
      />
      <Path 
        d="M14.4648 2C15.1335 2.00001 15.758 2.33423 16.1289 2.89062L17.5352 5H19C21.2091 5 23 6.79086 23 9V17C23 19.2091 21.2091 21 19 21H5C2.79086 21 1 19.2091 1 17V9C1 6.79086 2.79086 5 5 5H6.46484L7.87109 2.89062C8.24202 2.33424 8.86646 2.00001 9.53516 2H14.4648ZM12 8C9.51472 8 7.5 10.0147 7.5 12.5C7.5 14.9853 9.51472 17 12 17C14.4853 17 16.5 14.9853 16.5 12.5C16.5 10.0147 14.4853 8 12 8Z" 
        fill="url(#cam_g1)"
      />
      <Path 
        d="M19 20.25V21H5V20.25H19ZM22.25 17V9C22.25 7.20507 20.7949 5.75 19 5.75H17.1338L15.5049 3.30664C15.302 3.00238 14.9779 2.80454 14.6201 2.75977L14.4648 2.75H9.53516C9.11725 2.75001 8.72696 2.95888 8.49512 3.30664L6.86621 5.75H5C3.20508 5.75 1.75 7.20508 1.75 9V17C1.75 18.7949 3.20507 20.25 5 20.25V21C2.79086 21 1 19.2091 1 17V9C1 6.79086 2.79086 5 5 5H6.46484L7.87109 2.89062C8.24202 2.33424 8.86646 2.00001 9.53516 2H14.4648C15.1335 2.00001 15.758 2.33423 16.1289 2.89062L17.5352 5H19C21.2091 5 23 6.79086 23 9V17C23 19.2091 21.2091 21 19 21V20.25C20.7949 20.25 22.25 18.7949 22.25 17Z" 
        fill="url(#cam_g2)"
      />
      <Defs>
        <LinearGradient id="cam_g0" x1="12" y1="6.5" x2="12" y2="18.5" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset="1" stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="cam_g1" x1="12" y1="2" x2="12" y2="21" gradientUnits="userSpaceOnUse">
          <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
          <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="cam_g2" x1="12" y1="2" x2="12" y2="13.003" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFF" />
          <Stop offset="1" stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <Filter id="cam_f" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
          <FeGaussianBlur stdDeviation="2" in="SourceGraphic" edgeMode="none" />
        </Filter>
        <ClipPath id="cam_c">
          <Path d="M14.4648 2C15.1335 2.00001 15.758 2.33423 16.1289 2.89062L17.5352 5H19C21.2091 5 23 6.79086 23 9V17C23 19.2091 21.2091 21 19 21H5C2.79086 21 1 19.2091 1 17V9C1 6.79086 2.79086 5 5 5H6.46484L7.87109 2.89062C8.24202 2.33424 8.86646 2.00001 9.53516 2H14.4648ZM12 8C9.51472 8 7.5 10.0147 7.5 12.5C7.5 14.9853 9.51472 17 12 17C14.4853 17 16.5 14.9853 16.5 12.5C16.5 10.0147 14.4853 8 12 8Z" />
        </ClipPath>
        <Mask id="cam_m">
          <Rect width="200%" height="200%" fill="#FFF" />
          <Path d="M14.4648 2C15.1335 2.00001 15.758 2.33423 16.1289 2.89062L17.5352 5H19C21.2091 5 23 6.79086 23 9V17C23 19.2091 21.2091 21 19 21H5C2.79086 21 1 19.2091 1 17V9C1 6.79086 2.79086 5 5 5H6.46484L7.87109 2.89062C8.24202 2.33424 8.86646 2.00001 9.53516 2H14.4648ZM12 8C9.51472 8 7.5 10.0147 7.5 12.5C7.5 14.9853 9.51472 17 12 17C14.4853 17 16.5 14.9853 16.5 12.5C16.5 10.0147 14.4853 8 12 8Z" fill="#000" />
        </Mask>
      </Defs>
    </G>
  </Svg>
);`,

  Cart: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask, ClipPath, Filter, FeGaussianBlur } from "react-native-svg";

const Cart = ({ size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G>
      <Path
        d="M17.9003 4.87875C19.0617 6.05204 19.0569 7.94319 17.8895 9.11055L15.1214 11.8787C13.9498 13.0503 12.0503 13.0503 10.8787 11.8787L8.13209 9.13207C6.95634 7.95631 6.96116 6.04855 8.14284 4.87875L10.939 2.11073C12.1165 0.94505 14.016 0.954691 15.1816 2.13226L17.9003 4.87875Z"
        fill="url(#cart_g0)"
        mask="url(#cart_m)"
      />
      <Path
        d="M17.9003 4.87875C19.0617 6.05204 19.0569 7.94319 17.8895 9.11055L15.1214 11.8787C13.9498 13.0503 12.0503 13.0503 10.8787 11.8787L8.13209 9.13207C6.95634 7.95631 6.96116 6.04855 8.14284 4.87875L10.939 2.11073C12.1165 0.94505 14.016 0.954691 15.1816 2.13226L17.9003 4.87875Z"
        fill="url(#cart_g0)"
        filter="url(#cart_f)"
        clipPath="url(#cart_c)"
      />
      <Path d="M3 21C3 19.8954 3.89543 19 5 19C6.10457 19 7 19.8954 7 21C7 22.1046 6.10457 23 5 23C3.89543 23 3 22.1046 3 21Z" fill="url(#cart_g1)" />
      <Path d="M17 21C17 19.8954 17.8954 19 19 19C20.1046 19 21 19.8954 21 21C21 22.1046 20.1046 23 19 23C17.8954 23 17 22.1046 17 21Z" fill="url(#cart_g2)" />
      <Path
        d="M1.26562 1C2.75848 1.00011 4.02423 2.0983 4.23535 3.57617L4.43848 5H19.9834C21.2703 5.00015 22.2224 6.19845 21.9316 7.45215L20.4629 13.7842C20.0889 15.6539 18.4468 17 16.54 17H7.60156C5.61111 16.9998 3.9231 15.5359 3.6416 13.5654L2.58105 6.1416C2.58027 6.13608 2.5798 6.13052 2.5791 6.125L2.25488 3.8584C2.18441 3.36594 1.7631 3.00011 1.26562 3H1C0.447715 3 0 2.55228 0 2C0 1.44772 0.447715 1 1 1H1.26562Z"
        fill="url(#cart_g3)"
      />
      <Defs>
        <LinearGradient id="cart_g0" x1="13.011" y1="1.243" x2="13.011" y2="12.757" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset="1" stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="cart_g1" x1="5" y1="19" x2="5" y2="23" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset="1" stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="cart_g2" x1="19" y1="19" x2="19" y2="23" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset="1" stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="cart_g3" x1="10.992" y1="1" x2="10.992" y2="17" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#E3E3E5" stopOpacity={0.6} />
          <Stop offset="1" stopColor="#212121" stopOpacity={0.6} />
        </LinearGradient>
        <Filter id="cart_f" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
          <FeGaussianBlur stdDeviation="2" in="SourceGraphic" edgeMode="none" />
        </Filter>
        <ClipPath id="cart_c">
          <Path d="M1.26562 1C2.75848 1.00011 4.02423 2.0983 4.23535 3.57617L4.43848 5H19.9834C21.2703 5.00015 22.2224 6.19845 21.9316 7.45215L20.4629 13.7842C20.0889 15.6539 18.4468 17 16.54 17H7.60156C5.61111 16.9998 3.9231 15.5359 3.6416 13.5654L2.58105 6.1416C2.58027 6.13608 2.5798 6.13052 2.5791 6.125L2.25488 3.8584C2.18441 3.36594 1.7631 3.00011 1.26562 3H1C0.447715 3 0 2.55228 0 2C0 1.44772 0.447715 1 1 1H1.26562Z" />
        </ClipPath>
        <Mask id="cart_m">
          <Rect width="200%" height="100%" fill="#FFF" />
          <Path d="M1.26562 1C2.75848 1.00011 4.02423 2.0983 4.23535 3.57617L4.43848 5H19.9834C21.2703 5.00015 22.2224 6.19845 21.9316 7.45215L20.4629 13.7842C20.0889 15.6539 18.4468 17 16.54 17H7.60156C5.61111 16.9998 3.9231 15.5359 3.6416 13.5654L2.58105 6.1416C2.58027 6.13608 2.5798 6.13052 2.5791 6.125L2.25488 3.8584C2.18441 3.36594 1.7631 3.00011 1.26562 3H1C0.447715 3 0 2.55228 0 2C0 1.44772 0.447715 1 1 1H1.26562Z" fill="#000" />
        </Mask>
      </Defs>
    </G>
  </Svg>
);`,

  Chair: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask, ClipPath, Filter, FeGaussianBlur } from "react-native-svg";

const Chair = ({
  size = 24,
  isActive = false,
  activeColor = "#6366f1",
  color = "#8a8987",
  endColor = "#BBBBC0",
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G fill="none">
      <Path
        d="M12 14C12.5523 14 13 14.4477 13 15V19H15C16.6569 19 18 20.3431 18 22C18 22.5523 17.5523 23 17 23C16.4823 23 16.0562 22.6067 16.0049 22.1025L15.9951 21.8975C15.9438 21.3933 15.5177 21 15 21H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V21H9C8.48232 21 8.05621 21.3933 8.00488 21.8975L7.99512 22.1025C7.94379 22.6067 7.51768 23 7 23C6.44772 23 6 22.5523 6 22C6 20.3431 7.34315 19 9 19H11V15C11 14.4477 11.4477 14 12 14ZM13.2158 1C14.5115 1 15.1598 1.00004 15.6709 1.24414C16.121 1.45917 16.4964 1.80419 16.749 2.23438C17.0358 2.72284 17.0908 3.36823 17.2012 4.65918L17.7031 10.5273C17.8061 11.7324 17.8572 12.3349 17.6543 12.7998C17.4761 13.2081 17.167 13.5454 16.7754 13.7578C16.3294 13.9996 15.7241 14 14.5146 14H9.48535C8.27586 14 7.67057 13.9996 7.22461 13.7578C6.83301 13.5454 6.52393 13.2081 6.3457 12.7998C6.14279 12.3349 6.19388 11.7324 6.29688 10.5273L6.79883 4.65918C6.90917 3.36823 6.96418 2.72284 7.25098 2.23438C7.50356 1.80419 7.87897 1.45917 8.3291 1.24414C8.84023 1.00004 9.48849 1 10.7842 1H13.2158Z"
        fill="url(#chr_g0)"
        mask="url(#chr_m)"
      />
      <Path
        d="M12 14C12.5523 14 13 14.4477 13 15V19H15C16.6569 19 18 20.3431 18 22C18 22.5523 17.5523 23 17 23C16.4823 23 16.0562 22.6067 16.0049 22.1025L15.9951 21.8975C15.9438 21.3933 15.5177 21 15 21H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V21H9C8.48232 21 8.05621 21.3933 8.00488 21.8975L7.99512 22.1025C7.94379 22.6067 7.51768 23 7 23C6.44772 23 6 22.5523 6 22C6 20.3431 7.34315 19 9 19H11V15C11 14.4477 11.4477 14 12 14ZM13.2158 1C14.5115 1 15.1598 1.00004 15.6709 1.24414C16.121 1.45917 16.4964 1.80419 16.749 2.23438C17.0358 2.72284 17.0908 3.36823 17.2012 4.65918L17.7031 10.5273C17.8061 11.7324 17.8572 12.3349 17.6543 12.7998C17.4761 13.2081 17.167 13.5454 16.7754 13.7578C16.3294 13.9996 15.7241 14 14.5146 14H9.48535C8.27586 14 7.67057 13.9996 7.22461 13.7578C6.83301 13.5454 6.52393 13.2081 6.3457 12.7998C6.14279 12.3349 6.19388 11.7324 6.29688 10.5273L6.79883 4.65918C6.90917 3.36823 6.96418 2.72284 7.25098 2.23438C7.50356 1.80419 7.87897 1.45917 8.3291 1.24414C8.84023 1.00004 9.48849 1 10.7842 1H13.2158Z"
        fill="url(#chr_g0)"
        filter="url(#chr_f)"
        clipPath="url(#chr_c)"
      />
      <Path
        d="M17.5 12L6.5 12C5.11929 12 4 13.1193 4 14.5C4 15.8807 5.11929 17 6.5 17L17.5 17C18.8807 17 20 15.8807 20 14.5C20 13.1193 18.8807 12 17.5 12Z"
        fill="url(#chr_g1)"
      />
      <Path
        d="M17.5 16.25V17H6.5V16.25H17.5ZM19.25 14.5C19.25 13.5335 18.4665 12.75 17.5 12.75H6.5C5.5335 12.75 4.75 13.5335 4.75 14.5C4.75 15.4665 5.5335 16.25 6.5 16.25V17C5.11929 17 4 15.8807 4 14.5C4 13.1193 5.11929 12 6.5 12H17.5C18.8807 12 20 13.1193 20 14.5C20 15.8807 18.8807 17 17.5 17V16.25C18.4665 16.25 19.25 15.4665 19.25 14.5Z"
        fill="url(#chr_g2)"
      />
      <Defs>
        <LinearGradient id="chr_g0" x1="12" y1="-2" x2="12" y2="23" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset="1" stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="chr_g1" x1="20" y1="14.5" x2="4" y2="14.5" gradientUnits="userSpaceOnUse">
          <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
          <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="chr_g2" x1="12" y1="12" x2="12" y2="14.896" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset="1" stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <Filter id="chr_f" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
          <FeGaussianBlur stdDeviation="2" in="SourceGraphic" edgeMode="none" />
        </Filter>
        <ClipPath id="chr_c">
          <Path d="M17.5 12L6.5 12C5.11929 12 4 13.1193 4 14.5C4 15.8807 5.11929 17 6.5 17L17.5 17C18.8807 17 20 15.8807 20 14.5C20 13.1193 18.8807 12 17.5 12Z" />
        </ClipPath>
        <Mask id="chr_m">
          <Rect width="200%" height="100%" fill="#FFF" />
          <Path d="M17.5 12L6.5 12C5.11929 12 4 13.1193 4 14.5C4 15.8807 5.11929 17 6.5 17L17.5 17C18.8807 17 20 15.8807 20 14.5C20 13.1193 18.8807 12 17.5 12Z" fill="#000" />
        </Mask>
      </Defs>
    </G>
  </Svg>
);`,

  CircleArrowDown: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask, ClipPath, Filter, FeGaussianBlur } from "react-native-svg";

const CircleArrowDown = ({
  size = 24,
  isActive = false,
  activeColor = "#6366f1",
  color = "#8a8987",
  endColor = "#BBBBC0",
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G fill="none">
      <Path
        d="M16.3867 8C18.0933 8.0002 19.0939 10.0157 18.1152 11.4824L13.7285 18.0557C12.8886 19.3143 11.1113 19.3143 10.2715 18.0557L5.88474 11.4824C4.90598 10.0157 5.90651 8 7.61326 8L10.5 8L10.5 3L10.5078 2.84668C10.5846 2.09029 11.2233 1.5 12 1.5C12.7765 1.50011 13.4154 2.09035 13.4922 2.84668L13.5 3V8L16.3867 8Z"
        fill="url(#cad_g0)"
        mask="url(#cad_m)"
      />
      <Path
        d="M16.3867 8C18.0933 8.0002 19.0939 10.0157 18.1152 11.4824L13.7285 18.0557C12.8886 19.3143 11.1113 19.3143 10.2715 18.0557L5.88474 11.4824C4.90598 10.0157 5.90651 8 7.61326 8L10.5 8L10.5 3L10.5078 2.84668C10.5846 2.09029 11.2233 1.5 12 1.5C12.7765 1.50011 13.4154 2.09035 13.4922 2.84668L13.5 3V8L16.3867 8Z"
        fill="url(#cad_g0)"
        filter="url(#cad_f)"
        clipPath="url(#cad_c)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM8.36133 9C6.94554 9 6.11583 10.594 6.92773 11.7539L10.5664 16.9521C11.2631 17.9472 12.7369 17.9471 13.4336 16.9521L17.0723 11.7539C17.8842 10.594 17.0545 9 15.6387 9L8.36133 9Z"
        fill="url(#cad_g1)"
      />
      <Path
        d="M22.25 12C22.25 6.33908 17.6609 1.75 12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25V23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1L12.5664 1.01465C18.3783 1.30945 23 6.11484 23 12L22.9854 12.5664C22.6906 18.3783 17.8852 23 12 23V22.25C17.6609 22.25 22.25 17.6609 22.25 12Z"
        fill="url(#cad_g2)"
      />
      <Defs>
        <LinearGradient id="cad_g0" x1="12" y1="1.5" x2="12" y2="19" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset="1" stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="cad_g1" x1="12" y1="1" x2="12" y2="23" gradientUnits="userSpaceOnUse">
          <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
          <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="cad_g2" x1="12" y1="1" x2="12" y2="13.74" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset="1" stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <Filter id="cad_f" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox">
          <FeGaussianBlur stdDeviation="2" in="SourceGraphic" edgeMode="none" />
        </Filter>
        <ClipPath id="cad_c">
          <Path fillRule="evenodd" clipRule="evenodd" d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM8.36133 9C6.94554 9 6.11583 10.594 6.92773 11.7539L10.5664 16.9521C11.2631 17.9472 12.7369 17.9471 13.4336 16.9521L17.0723 11.7539C17.8842 10.594 17.0545 9 15.6387 9L8.36133 9Z" />
        </ClipPath>
        <Mask id="cad_m">
          <Rect width="100%" height="100%" fill="#FFF" />
          <Path fillRule="evenodd" clipRule="evenodd" d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM8.36133 9C6.94554 9 6.11583 10.594 6.92773 11.7539L10.5664 16.9521C11.2631 17.9472 12.7369 17.9471 13.4336 16.9521L17.0723 11.7539C17.8842 10.594 17.0545 9 15.6387 9L8.36133 9Z" fill="#000" />
        </Mask>
      </Defs>
    </G>
  </Svg>
);`,

  CircleArrowLeft: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask, ClipPath, Filter, FeGaussianBlur } from "react-native-svg";

const CircleArrowLeft = ({
  size = 24,
  isActive = false,
  activeColor = "#6366f1",
  color = "#8a8987",
  endColor = "#BBBBC0",
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G fill="none">
      <Path
        d="M16.0001 7.61319C15.9999 5.90661 13.9844 4.90601 12.5177 5.88467L5.94444 10.2714C4.68584 11.1112 4.68584 12.8886 5.94444 13.7284L12.5177 18.1151C13.9845 19.0939 16.0001 18.0934 16.0001 16.3866V13.4999H21.0001L21.1534 13.4921C21.9098 13.4153 22.5001 12.7766 22.5001 11.9999C22.5 11.2233 21.9098 10.5845 21.1534 10.5077L21.0001 10.4999H16.0001V7.61319Z"
        fill="url(#cal_g0)"
        mask="url(#cal_m)"
      />
      <Path
        d="M16.0001 7.61319C15.9999 5.90661 13.9844 4.90601 12.5177 5.88467L5.94444 10.2714C4.68584 11.1112 4.68584 12.8886 5.94444 13.7284L12.5177 18.1151C13.9845 19.0939 16.0001 18.0934 16.0001 16.3866V13.4999H21.0001L21.1534 13.4921C21.9098 13.4153 22.5001 12.7766 22.5001 11.9999C22.5 11.2233 21.9098 10.5845 21.1534 10.5077L21.0001 10.4999H16.0001V7.61319Z"
        fill="url(#cal_g0)"
        filter="url(#cal_f)"
        clipPath="url(#cal_c)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM15 15.6387C15 17.0545 13.406 17.8842 12.2461 17.0723L7.04785 13.4336C6.05282 12.7369 6.05286 11.2631 7.04785 10.5664L12.2461 6.92773C13.406 6.11583 15 6.94554 15 8.36133V15.6387Z"
        fill="url(#cal_g1)"
      />
      <Path
        d="M22.25 12C22.25 6.33908 17.6609 1.75 12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25V23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1L12.5664 1.01465C18.3783 1.30945 23 6.11484 23 12L22.9854 12.5664C22.6906 18.3783 17.8852 23 12 23V22.25C17.6609 22.25 22.25 17.6609 22.25 12Z"
        fill="url(#cal_g2)"
      />
      <Defs>
        <LinearGradient id="cal_g0" x1="3.75" y1="5.5" x2="13.75" y2="18.5" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset="1" stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="cal_g1" x1="12" y1="1" x2="12" y2="23" gradientUnits="userSpaceOnUse">
          <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
          <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="cal_g2" x1="12" y1="1" x2="12" y2="13.74" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset="1" stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <Filter id="cal_f" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox">
          <FeGaussianBlur stdDeviation="2" in="SourceGraphic" edgeMode="none" />
        </Filter>
        <ClipPath id="cal_c">
          <Path fillRule="evenodd" clipRule="evenodd" d="M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM15 15.6387C15 17.0545 13.406 17.8842 12.2461 17.0723L7.04785 13.4336C6.05282 12.7369 6.05286 11.2631 7.04785 10.5664L12.2461 6.92773C13.406 6.11583 15 6.94554 15 8.36133V15.6387Z" />
        </ClipPath>
        <Mask id="cal_m">
          <Rect width="100%" height="100%" fill="#FFF" />
          <Path fillRule="evenodd" clipRule="evenodd" d="M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM15 15.6387C15 17.0545 13.406 17.8842 12.2461 17.0723L7.04785 13.4336C6.05282 12.7369 6.05286 11.2631 7.04785 10.5664L12.2461 6.92773C13.406 6.11583 15 6.94554 15 8.36133V15.6387Z" fill="#000" />
        </Mask>
      </Defs>
    </G>
  </Svg>
);`,

  CircleArrowRight: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask, ClipPath, Filter, FeGaussianBlur } from "react-native-svg";

const CircleArrowRight = ({
  size = 24,
  isActive = false,
  activeColor = "#6366f1",
  color = "#8a8987",
  endColor = "#BBBBC0",
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G fill="none">
      <Path
        d="M8 7.61307C8.0002 5.90648 10.0157 4.90589 11.4824 5.88455L18.0557 10.2713C19.3143 11.1111 19.3143 12.8884 18.0557 13.7283L11.4824 18.115C10.0157 19.0938 8 18.0933 8 16.3865V13.4998H3L2.84668 13.492C2.09029 13.4152 1.5 12.7764 1.5 11.9998C1.50011 11.2232 2.09035 10.5844 2.84668 10.5076L3 10.4998H8V7.61307Z"
        fill="url(#car_g0)"
        mask="url(#car_m)"
      />
      <Path
        d="M8 7.61307C8.0002 5.90648 10.0157 4.90589 11.4824 5.88455L18.0557 10.2713C19.3143 11.1111 19.3143 12.8884 18.0557 13.7283L11.4824 18.115C10.0157 19.0938 8 18.0933 8 16.3865V13.4998H3L2.84668 13.492C2.09029 13.4152 1.5 12.7764 1.5 11.9998C1.50011 11.2232 2.09035 10.5844 2.84668 10.5076L3 10.4998H8V7.61307Z"
        fill="url(#car_g0)"
        filter="url(#car_f)"
        clipPath="url(#car_c)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM9 15.6387C9 17.0545 10.594 17.8842 11.7539 17.0723L16.9521 13.4336C17.9472 12.7369 17.9471 11.2631 16.9521 10.5664L11.7539 6.92773C10.594 6.11583 9 6.94554 9 8.36133V15.6387Z"
        fill="url(#car_g1)"
      />
      <Path
        d="M22.25 12C22.25 6.33908 17.6609 1.75 12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25V23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1L12.5664 1.01465C18.3783 1.30945 23 6.11484 23 12L22.9854 12.5664C22.6906 18.3783 17.8852 23 12 23V22.25C17.6609 22.25 22.25 17.6609 22.25 12Z"
        fill="url(#car_g2)"
      />
      <Defs>
        <LinearGradient id="car_g0" x1="10.25" y1="5.5" x2="10.25" y2="18.5" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset="1" stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="car_g1" x1="12" y1="1" x2="12" y2="23" gradientUnits="userSpaceOnUse">
          <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
          <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="car_g2" x1="12" y1="1" x2="12" y2="13.74" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset="1" stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <Filter id="car_f" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox">
          <FeGaussianBlur stdDeviation="2" in="SourceGraphic" edgeMode="none" />
        </Filter>
        <ClipPath id="car_c">
          <Path fillRule="evenodd" clipRule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM9 15.6387C9 17.0545 10.594 17.8842 11.7539 17.0723L16.9521 13.4336C17.9472 12.7369 17.9471 11.2631 16.9521 10.5664L11.7539 6.92773C10.594 6.11583 9 6.94554 9 8.36133V15.6387Z" />
        </ClipPath>
        <Mask id="car_m">
          <Rect width="100%" height="100%" fill="#FFF" />
          <Path fillRule="evenodd" clipRule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM9 15.6387C9 17.0545 10.594 17.8842 11.7539 17.0723L16.9521 13.4336C17.9472 12.7369 17.9471 11.2631 16.9521 10.5664L11.7539 6.92773C10.594 6.11583 9 6.94554 9 8.36133V15.6387Z" fill="#000" />
        </Mask>
      </Defs>
    </G>
  </Svg>
);`,

  CircleArrowUp: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask, ClipPath, Filter, FeGaussianBlur } from "react-native-svg";

const CircleArrowUp = ({
  size = 24,
  isActive = false,
  activeColor = "#6366f1",
  color = "#8a8987",
  endColor = "#BBBBC0",
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G fill="none">
      <Path
        d="M7.61319 16C5.90661 15.9998 4.90601 13.9843 5.88467 12.5176L10.2714 5.94432C11.1112 4.68571 12.8886 4.68571 13.7284 5.94432L18.1151 12.5176C19.0939 13.9843 18.0934 16 16.3866 16H13.4999V21L13.4921 21.1533C13.4153 21.9097 12.7766 22.5 11.9999 22.5C11.2233 22.4999 10.5845 21.9096 10.5077 21.1533L10.4999 21V16H7.61319Z"
        fill="url(#cau_g0)"
        mask="url(#cau_m)"
      />
      <Path
        d="M7.61319 16C5.90661 15.9998 4.90601 13.9843 5.88467 12.5176L10.2714 5.94432C11.1112 4.68571 12.8886 4.68571 13.7284 5.94432L18.1151 12.5176C19.0939 13.9843 18.0934 16 16.3866 16H13.4999V21L13.4921 21.1533C13.4153 21.9097 12.7766 22.5 11.9999 22.5C11.2233 22.4999 10.5845 21.9096 10.5077 21.1533L10.4999 21V16H7.61319Z"
        fill="url(#cau_g0)"
        filter="url(#cau_f)"
        clipPath="url(#cau_c)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM15.6387 15C17.0545 15 17.8842 13.406 17.0723 12.2461L13.4336 7.04785C12.7369 6.05282 11.2631 6.05286 10.5664 7.04785L6.92773 12.2461C6.11583 13.406 6.94554 15 8.36133 15H15.6387Z"
        fill="url(#cau_g1)"
      />
      <Path
        d="M22.25 12C22.25 6.33908 17.6609 1.75 12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25V23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1L12.5664 1.01465C18.3783 1.30945 23 6.11484 23 12L22.9854 12.5664C22.6906 18.3783 17.8852 23 12 23V22.25C17.6609 22.25 22.25 17.6609 22.25 12Z"
        fill="url(#cau_g2)"
      />
      <Defs>
        <LinearGradient id="cau_g0" x1="12" y1="5" x2="12" y2="22.5" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset="1" stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="cau_g1" x1="12" y1="1" x2="12" y2="23" gradientUnits="userSpaceOnUse">
          <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
          <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="cau_g2" x1="12" y1="1" x2="12" y2="13.74" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset="1" stopColor="#fff" stopOpacity="0" />
        </LinearGradient>
        <Filter id="cau_f" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox">
          <FeGaussianBlur stdDeviation="2" in="SourceGraphic" edgeMode="none" />
        </Filter>
        <ClipPath id="cau_c">
          <Path fillRule="evenodd" clipRule="evenodd" d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM15.6387 15C17.0545 15 17.8842 13.406 17.0723 12.2461L13.4336 7.04785C12.7369 6.05282 11.2631 6.05286 10.5664 7.04785L6.92773 12.2461C6.11583 13.406 6.94554 15 8.36133 15H15.6387Z" />
        </ClipPath>
        <Mask id="cau_m">
          <Rect width="100%" height="100%" fill="#FFF" />
          <Path fillRule="evenodd" clipRule="evenodd" d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM15.6387 15C17.0545 15 17.8842 13.406 17.0723 12.2461L13.4336 7.04785C12.7369 6.05282 11.2631 6.05286 10.5664 7.04785L6.92773 12.2461C6.11583 13.406 6.94554 15 8.36133 15H15.6387Z" fill="#000" />
        </Mask>
      </Defs>
    </G>
  </Svg>
);`,

  CircleChartLine: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask, ClipPath, Filter, FeGaussianBlur } from "react-native-svg";

const CircleChartLine = ({
  size = 24,
  isActive = false,
  activeColor = "#6366f1",
  color = "#8a8987",
  endColor = "#BBBBC0",
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G fill="none">
      <Path
        d="M18.3301 4.25763C14.4021 1.03823 8.59588 1.262 4.92894 4.92893C3.23057 6.6273 2.27082 8.78459 2.04967 11.0016C1.99485 11.5512 2.44773 12 3.00001 12H12L18.364 5.63604C18.7545 5.24551 18.7573 4.60772 18.3301 4.25763Z"
        fill="url(#ccl_g0)"
        mask="url(#ccl_m)"
      />
      <Path
        d="M18.3301 4.25763C14.4021 1.03823 8.59588 1.262 4.92894 4.92893C3.23057 6.6273 2.27082 8.78459 2.04967 11.0016C1.99485 11.5512 2.44773 12 3.00001 12H12L18.364 5.63604C18.7545 5.24551 18.7573 4.60772 18.3301 4.25763Z"
        fill="url(#ccl_g0)"
        filter="url(#ccl_f)"
        clipPath="url(#ccl_c)"
      />
      <Path
        d="M1 12C1 14.8151 2.07394 17.6303 4.22183 19.7782C6.36971 21.9261 9.18485 23 12 23C14.8151 23 17.6303 21.9261 19.7782 19.7782C21.6718 17.8846 22.7307 15.4723 22.9549 12.9987C23.0047 12.4486 22.5523 12 22 12L12 12L4.92893 4.92893C4.53841 4.53841 3.9011 4.5358 3.54716 4.95976C1.84905 6.9938 1 9.4969 1 12Z"
        fill="url(#ccl_g1)"
      />
      <Path
        d="M1 11.9999C1 9.65343 1.746 7.30668 3.23826 5.3466L3.54685 4.95988C3.90075 4.53596 4.53814 4.53824 4.92868 4.92862L11.9999 11.9999H21.9998C22.5519 11.9999 23.0044 12.4482 22.9549 12.998L22.9031 13.4619C22.5951 15.7719 21.5533 18.0031 19.7782 19.7783L19.368 20.1679C17.2786 22.0559 14.6392 23 11.9999 23V22.25C14.6242 22.25 17.2463 21.2495 19.2479 19.248C21.0128 17.483 21.9989 15.236 22.2078 12.9306C22.2117 12.8874 22.1981 12.8496 22.1649 12.8154C22.1378 12.7877 22.0986 12.7646 22.0506 12.7548L21.9998 12.7499H11.6894L4.39841 5.4589C4.34786 5.40843 4.28624 5.38786 4.23435 5.38859C4.18655 5.38936 4.15085 5.40701 4.12302 5.44035C2.54153 7.33473 1.74999 9.66618 1.74999 11.9999C1.75003 14.6243 2.75039 17.2465 4.75192 19.248C6.75348 21.2495 9.3756 22.25 11.9999 22.25V23L11.4726 22.9873C9.01138 22.8699 6.58203 21.9301 4.63181 20.1679L4.22165 19.7783C2.20798 17.7646 1.13851 15.1641 1.0127 12.5273L1 11.9999Z"
        fill="url(#ccl_g2)"
      />
      <Defs>
        <LinearGradient id="ccl_g0" x1="10.35" y1="2" x2="10.35" y2="12" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset="1" stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="ccl_g1" x1="3.083" y1="5.361" x2="18.639" y2="20.917" gradientUnits="userSpaceOnUse">
          <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
          <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="ccl_g2" x1="11.979" y1="4.639" x2="11.979" y2="15.272" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset="1" stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <Filter id="ccl_f" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox">
          <FeGaussianBlur stdDeviation="2" in="SourceGraphic" edgeMode="none" />
        </Filter>
        <ClipPath id="ccl_c">
          <Path d="M1 12C1 14.8151 2.07394 17.6303 4.22183 19.7782C6.36971 21.9261 9.18485 23 12 23C14.8151 23 17.6303 21.9261 19.7782 19.7782C21.6718 17.8846 22.7307 15.4723 22.9549 12.9987C23.0047 12.4486 22.5523 12 22 12L12 12L4.92893 4.92893C4.53841 4.53841 3.9011 4.5358 3.54716 4.95976C1.84905 6.9938 1 9.4969 1 12Z" />
        </ClipPath>
        <Mask id="ccl_m">
          <Rect width="100%" height="100%" fill="#FFF" />
          <Path d="M1 12C1 14.8151 2.07394 17.6303 4.22183 19.7782C6.36971 21.9261 9.18485 23 12 23C14.8151 23 17.6303 21.9261 19.7782 19.7782C21.6718 17.8846 22.7307 15.4723 22.9549 12.9987C23.0047 12.4486 22.5523 12 22 12L12 12L4.92893 4.92893C4.53841 4.53841 3.9011 4.5358 3.54716 4.95976C1.84905 6.9938 1 9.4969 1 12Z" fill="#000" />
        </Mask>
      </Defs>
    </G>
  </Svg>
);`,

  CircleCoin: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask, ClipPath, Filter, FeGaussianBlur } from "react-native-svg";

const CircleCoin = ({
  size = 24,
  isActive = false,
  activeColor = "#6366f1",
  color = "#8a8987",
  endColor = "#BBBBC0",
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G fill="none">
      <Path
        d="M9.5 1C14.1944 1 18 4.80558 18 9.5C18 11.5861 17.2471 13.4955 16 14.9746V17C16 17.8284 15.3284 18.5 14.5 18.5C13.752 18.5 13.1329 17.9524 13.0195 17.2363C11.9468 17.7251 10.7558 18 9.5 18C4.80558 18 1 14.1944 1 9.5C1 4.80558 4.80558 1 9.5 1Z"
        fill="url(#coin_g0)"
        mask="url(#coin_m)"
      />
      <Path
        d="M9.5 1C14.1944 1 18 4.80558 18 9.5C18 11.5861 17.2471 13.4955 16 14.9746V17C16 17.8284 15.3284 18.5 14.5 18.5C13.752 18.5 13.1329 17.9524 13.0195 17.2363C11.9468 17.7251 10.7558 18 9.5 18C4.80558 18 1 14.1944 1 9.5C1 4.80558 4.80558 1 9.5 1Z"
        fill="url(#coin_g0)"
        filter="url(#coin_f)"
        clipPath="url(#coin_c)"
      />
      <Path
        d="M14.5 6C19.1944 6 23 9.80558 23 14.5C23 19.1944 19.1944 23 14.5 23C9.80558 23 6 19.1944 6 14.5C6 9.80558 9.80558 6 14.5 6ZM14.5 11C13.9477 11 13.5 11.4477 13.5 12V17C13.5 17.5523 13.9477 18 14.5 18C15.0523 18 15.5 17.5523 15.5 17V12C15.5 11.4477 15.0523 11 14.5 11Z"
        fill="url(#coin_g1)"
      />
      <Path
        d="M14.5 6C19.1944 6 23 9.80558 23 14.5C23 19.1944 19.1944 23 14.5 23C9.80558 23 6 19.1944 6 14.5C6 9.80558 9.80558 6 14.5 6ZM14.5 6.75C10.2198 6.75 6.75 10.2198 6.75 14.5C6.75 18.7802 10.2198 22.25 14.5 22.25C18.7802 22.25 22.25 18.7802 22.25 14.5C22.25 10.2198 18.7802 6.75 14.5 6.75Z"
        fill="url(#coin_g2)"
      />
      <Defs>
        <LinearGradient id="coin_g0" x1="9.5" y1="1" x2="9.5" y2="18.5" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset="1" stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="coin_g1" x1="14.5" y1="6" x2="14.5" y2="23" gradientUnits="userSpaceOnUse">
          <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
          <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="coin_g2" x1="14.5" y1="6" x2="14.5" y2="15.845" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset="1" stopColor="#fff" stopOpacity="0" />
        </LinearGradient>
        <Filter id="coin_f" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox">
          <FeGaussianBlur stdDeviation="2" in="SourceGraphic" edgeMode="none" />
        </Filter>
        <ClipPath id="coin_c">
          <Path d="M14.5 6C19.1944 6 23 9.80558 23 14.5C23 19.1944 19.1944 23 14.5 23C9.80558 23 6 19.1944 6 14.5C6 9.80558 9.80558 6 14.5 6ZM14.5 11C13.9477 11 13.5 11.4477 13.5 12V17C13.5 17.5523 13.9477 18 14.5 18C15.0523 18 15.5 17.5523 15.5 17V12C15.5 11.4477 15.0523 11 14.5 11Z" />
        </ClipPath>
        <Mask id="coin_m">
          <Rect width="100%" height="100%" fill="#FFF" />
          <Path d="M14.5 6C19.1944 6 23 9.80558 23 14.5C23 19.1944 19.1944 23 14.5 23C9.80558 23 6 19.1944 6 14.5C6 9.80558 9.80558 6 14.5 6ZM14.5 11C13.9477 11 13.5 11.4477 13.5 12V17C13.5 17.5523 13.9477 18 14.5 18C15.0523 18 15.5 17.5523 15.5 17V12C15.5 11.4477 15.0523 11 14.5 11Z" fill="#000" />
        </Mask>
      </Defs>
    </G>
  </Svg>
);`,

  CircleCopyPlus: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask, ClipPath, Filter, FeGaussianBlur } from "react-native-svg";

const CircleCopyPlus = ({
  size = 24,
  isActive = false,
  activeColor = "#6366f1",
  color = "#8a8987",
  endColor = "#BBBBC0",
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G fill="none">
      <Path
        d="M9.5 1C14.1944 1 18 4.80558 18 9.5C18 10.5562 17.8062 11.567 17.4541 12.5H18C19.1046 12.5 20 13.3954 20 14.5C20 15.6046 19.1046 16.5 18 16.5H16.5039V18C16.5039 19.1046 15.6085 20 14.5039 20C13.3993 20 12.5039 19.1046 12.5039 18V17.4521C11.5698 17.8052 10.5578 18 9.5 18C4.80558 18 1 14.1944 1 9.5C1 4.80558 4.80558 1 9.5 1Z"
        fill="url(#ccp_g0)"
        mask="url(#ccp_m)"
      />
      <Path
        d="M9.5 1C14.1944 1 18 4.80558 18 9.5C18 10.5562 17.8062 11.567 17.4541 12.5H18C19.1046 12.5 20 13.3954 20 14.5C20 15.6046 19.1046 16.5 18 16.5H16.5039V18C16.5039 19.1046 15.6085 20 14.5039 20C13.3993 20 12.5039 19.1046 12.5039 18V17.4521C11.5698 17.8052 10.5578 18 9.5 18C4.80558 18 1 14.1944 1 9.5C1 4.80558 4.80558 1 9.5 1Z"
        fill="url(#ccp_g0)"
        filter="url(#ccp_f)"
        clipPath="url(#ccp_c)"
      />
      <Path
        d="M14.5 6C19.1944 6 23 9.80558 23 14.5C23 19.1944 19.1944 23 14.5 23C9.80558 23 6 19.1944 6 14.5C6 9.80558 9.80558 6 14.5 6ZM14.5039 10C13.9516 10 13.5039 10.4477 13.5039 11V13.5H11C10.4478 13.5001 10 13.9478 10 14.5C10 15.0522 10.4478 15.4999 11 15.5H13.5039V18C13.5039 18.5523 13.9516 19 14.5039 19C15.0562 19 15.5039 18.5523 15.5039 18V15.5H18C18.5523 15.5 19 15.0523 19 14.5C19 13.9477 18.5523 13.5 18 13.5H15.5039V11C15.5039 10.4477 15.0562 10 14.5039 10Z"
        fill="url(#ccp_g1)"
      />
      <Path
        d="M14.5 6C19.1944 6 23 9.80558 23 14.5C23 19.1944 19.1944 23 14.5 23C9.80558 23 6 19.1944 6 14.5C6 9.80558 9.80558 6 14.5 6ZM14.5 6.75C10.2198 6.75 6.75 10.2198 6.75 14.5C6.75 18.7802 10.2198 22.25 14.5 22.25C18.7802 22.25 22.25 18.7802 22.25 14.5C22.25 10.2198 18.7802 6.75 14.5 6.75Z"
        fill="url(#ccp_g2)"
      />
      <Defs>
        <LinearGradient id="ccp_g0" x1="10.25" y1="1" x2="10.25" y2="19.5" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset="1" stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="ccp_g1" x1="0.5" y1="6" x2="14.5" y2="23" gradientUnits="userSpaceOnUse">
          <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
          <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="ccp_g2" x1="14.5" y1="6" x2="14.5" y2="19" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset="1" stopColor="#fff" stopOpacity="0" />
        </LinearGradient>
        <Filter id="ccp_f" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox">
          <FeGaussianBlur stdDeviation="2" in="SourceGraphic" edgeMode="none" />
        </Filter>
        <ClipPath id="ccp_c">
          <Path d="M14.5 6C19.1944 6 23 9.80558 23 14.5C23 19.1944 19.1944 23 14.5 23C9.80558 23 6 19.1944 6 14.5C6 9.80558 9.80558 6 14.5 6ZM14.5039 10C13.9516 10 13.5039 10.4477 13.5039 11V13.5H11C10.4478 13.5001 10 13.9478 10 14.5C10 15.0522 10.4478 15.4999 11 15.5H13.5039V18C13.5039 18.5523 13.9516 19 14.5039 19C15.0562 19 15.5039 18.5523 15.5039 18V15.5H18C18.5523 15.5 19 15.0523 19 14.5C19 13.9477 18.5523 13.5 18 13.5H15.5039V11C15.5039 10.4477 15.0562 10 14.5039 10Z" />
        </ClipPath>
        <Mask id="ccp_m">
          <Rect width="100%" height="100%" fill="#FFF" />
          <Path d="M14.5 6C19.1944 6 23 9.80558 23 14.5C23 19.1944 19.1944 23 14.5 23C9.80558 23 6 19.1944 6 14.5C6 9.80558 9.80558 6 14.5 6ZM14.5039 10C13.9516 10 13.5039 10.4477 13.5039 11V13.5H11C10.4478 13.5001 10 13.9478 10 14.5C10 15.0522 10.4478 15.4999 11 15.5H13.5039V18C13.5039 18.5523 13.9516 19 14.5039 19C15.0562 19 15.5039 18.5523 15.5039 18V15.5H18C18.5523 15.5 19 15.0523 19 14.5C19 13.9477 18.5523 13.5 18 13.5H15.5039V11C15.5039 10.4477 15.0562 10 14.5039 10Z" fill="#000" />
        </Mask>
      </Defs>
    </G>
  </Svg>
);`,

  CircleQuestion: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask, ClipPath, Filter, FeGaussianBlur } from "react-native-svg";

const CircleQuestion = ({
  size = 24,
  isActive = false,
  activeColor = "#6366f1",
  color = "#8a8987",
  endColor = "#BBBBC0",
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G fill="none">
      <Path
        d="M10 18.0098V18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18V18.0098C14 19.1143 13.1046 20.0098 12 20.0098C10.8954 20.0098 10 19.1143 10 18.0098ZM13 9.5C13 8.94772 12.5523 8.5 12 8.5C11.4477 8.5 11 8.94772 11 9.5C11 10.6046 10.1046 11.5 9 11.5C7.89543 11.5 7 10.6046 7 9.5C7 6.73858 9.23858 4.5 12 4.5C14.7614 4.5 17 6.73858 17 9.5C17 11.3954 15.9442 13.0415 14.3984 13.8877C14.2927 13.9456 14.1982 14.0068 14.1201 14.0664C14.0611 14.1114 14.0192 14.1508 13.9902 14.1807C13.8988 15.2005 13.0436 16 12 16C10.8954 16 10 15.1046 10 14C10 12.9774 10.4464 12.1659 10.9287 11.6035C11.4024 11.0512 11.9791 10.6523 12.4785 10.3789C12.7936 10.2062 13 9.87572 13 9.5Z"
        fill="url(#cq_g0)"
        mask="url(#cq_m)"
      />
      <Path
        d="M10 18.0098V18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18V18.0098C14 19.1143 13.1046 20.0098 12 20.0098C10.8954 20.0098 10 19.1143 10 18.0098ZM13 9.5C13 8.94772 12.5523 8.5 12 8.5C11.4477 8.5 11 8.94772 11 9.5C11 10.6046 10.1046 11.5 9 11.5C7.89543 11.5 7 10.6046 7 9.5C7 6.73858 9.23858 4.5 12 4.5C14.7614 4.5 17 6.73858 17 9.5C17 11.3954 15.9442 13.0415 14.3984 13.8877C14.2927 13.9456 14.1982 14.0068 14.1201 14.0664C14.0611 14.1114 14.0192 14.1508 13.9902 14.1807C13.8988 15.2005 13.0436 16 12 16C10.8954 16 10 15.1046 10 14C10 12.9774 10.4464 12.1659 10.9287 11.6035C11.4024 11.0512 11.9791 10.6523 12.4785 10.3789C12.7936 10.2062 13 9.87572 13 9.5Z"
        fill="url(#cq_g0)"
        filter="url(#cq_f)"
        clipPath="url(#cq_c)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 16.5C11.3096 16.5 10.75 17.0596 10.75 17.75V17.7598C10.75 18.4501 11.3096 19.0098 12 19.0098C12.6904 19.0098 13.25 18.4501 13.25 17.7598V17.75C13.25 17.0596 12.6904 16.5 12 16.5ZM12 5.5C9.79086 5.5 8 7.29086 8 9.5C8 10.0523 8.44772 10.5 9 10.5C9.55229 10.5 10 10.0523 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5C14 10.2557 13.5809 10.9149 12.958 11.2559C12.5267 11.492 12.0587 11.8211 11.6875 12.2539C11.3119 12.6918 11 13.2816 11 14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14C13 13.89 13.0442 13.7454 13.2061 13.5566C13.3724 13.3627 13.6236 13.1724 13.9189 13.0107C15.157 12.3329 16 11.0155 16 9.5C16 7.29086 14.2091 5.5 12 5.5Z"
        fill="url(#cq_g1)"
      />
      <Path
        d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25C17.6609 22.25 22.25 17.6609 22.25 12C22.25 6.33908 17.6609 1.75 12 1.75Z"
        fill="url(#cq_g2)"
      />
      <Defs>
        <LinearGradient id="cq_g0" x1="12" y1="4.5" x2="12" y2="20.01" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#000" />
          <Stop offset="1" stopColor="#4f5052" />
        </LinearGradient>
        <LinearGradient id="cq_g1" x1="12" y1="1" x2="12" y2="23" gradientUnits="userSpaceOnUse">
          <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
          <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="cq_g2" x1="12" y1="1" x2="12" y2="13.74" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#4f5052" />
          <Stop offset="1" stopColor="#fff" stopOpacity="0" />
        </LinearGradient>
        <Filter id="cq_f" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox">
          <FeGaussianBlur stdDeviation="2" in="SourceGraphic" edgeMode="none" />
        </Filter>
        <ClipPath id="cq_c">
          <Path fillRule="evenodd" clipRule="evenodd" d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 16.5C11.3096 16.5 10.75 17.0596 10.75 17.75V17.7598C10.75 18.4501 11.3096 19.0098 12 19.0098C12.6904 19.0098 13.25 18.4501 13.25 17.7598V17.75C13.25 17.0596 12.6904 16.5 12 16.5ZM12 5.5C9.79086 5.5 8 7.29086 8 9.5C8 10.0523 8.44772 10.5 9 10.5C9.55229 10.5 10 10.0523 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5C14 10.2557 13.5809 10.9149 12.958 11.2559C12.5267 11.492 12.0587 11.8211 11.6875 12.2539C11.3119 12.6918 11 13.2816 11 14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14C13 13.89 13.0442 13.7454 13.2061 13.5566C13.3724 13.3627 13.6236 13.1724 13.9189 13.0107C15.157 12.3329 16 11.0155 16 9.5C16 7.29086 14.2091 5.5 12 5.5Z" />
        </ClipPath>
        <Mask id="cq_m">
          <Rect width="100%" height="100%" fill="#FFF" />
          <Path fillRule="evenodd" clipRule="evenodd" d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 16.5C11.3096 16.5 10.75 17.0596 10.75 17.75V17.7598C10.75 18.4501 11.3096 19.0098 12 19.0098C12.6904 19.0098 13.25 18.4501 13.25 17.7598V17.75C13.25 17.0596 12.6904 16.5 12 16.5ZM12 5.5C9.79086 5.5 8 7.29086 8 9.5C8 10.0523 8.44772 10.5 9 10.5C9.55229 10.5 10 10.0523 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5C14 10.2557 13.5809 10.9149 12.958 11.2559C12.5267 11.492 12.0587 11.8211 11.6875 12.2539C11.3119 12.6918 11 13.2816 11 14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14C13 13.89 13.0442 13.7454 13.2061 13.5566C13.3724 13.3627 13.6236 13.1724 13.9189 13.0107C15.157 12.3329 16 11.0155 16 9.5C16 7.29086 14.2091 5.5 12 5.5Z" fill="#000" />
        </Mask>
      </Defs>
    </G>
  </Svg>
);`,

  ClipboardIcon: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask } from "react-native-svg";

const ClipboardIcon = ({
  size = 24,
  isActive = false,
  activeColor = "#6366f1",
  color = "#8a8987",
  endColor = "#BBBBC0",
  ...props
}) => {
  const glassPath = "M22.2031 11.2617C22.4766 11.2384 22.7411 11.3659 22.8926 11.5947C23.0438 11.8238 23.0584 12.1179 22.9297 12.3604C22.7753 12.6511 22.6725 13.0652 22.5723 13.6465C22.5459 13.7991 22.5199 13.9648 22.4922 14.1387C22.4154 14.6216 22.3489 15.115 22.2256 15.5889C22.0535 16.249 21.7351 16.7451 21.3115 17.1045C20.9846 17.3819 20.5925 17.578 20.1631 17.707C19.4488 17.9217 18.6362 17.956 17.8594 17.9561C18.2931 18.315 19.2389 18.8777 20.3389 19.0361C19.9854 19.4844 19.5383 19.8274 19.0186 20.0703C17.9194 20.5838 16.5851 20.6084 15.3291 20.4404C14.876 20.3797 14.4243 20.3001 13.9736 20.2227C13.7557 20.8851 13.6066 21.5543 13.4805 22.2383C13.3625 22.7308 12.8877 23.0636 12.375 22.9951C11.8278 22.9215 11.4432 22.4183 11.5166 21.8711C11.8088 20.0287 12.4577 18.219 13.4277 16.626C14.9343 14.152 17.603 11.6574 22.2031 11.2617ZM14.75 1C15.9926 1 17 2.00736 17 3.25C17 4.49264 15.9926 5.5 14.75 5.5H9.25C8.00736 5.5 7 4.49264 7 3.25C7 2.00736 8.00736 1 9.25 1H14.75Z";

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <G>
        <Path
          d="M3 9.4C3 7.15979 3 6.03968 3.43597 5.18404C3.81947 4.43139 4.43139 3.81947 5.18404 3.43597C6.03968 3 7.15979 3 9.4 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03968 21 7.15979 21 9.4V11.349C21 12.3274 21 12.8166 20.8895 13.2769C20.7915 13.6851 20.6299 14.0753 20.4106 14.4331C19.2828 16.8471 14.0161 16.8751 13.4363 20.1572C13.3037 20.9079 13.0181 21.7115 12.2769 21.8895C11.8166 22 11.3274 22 10.349 22H9.4C7.15979 22 6.03968 22 5.18404 21.564C4.43139 21.1805 3.81947 20.5686 3.43597 19.816C3 18.9603 3 17.8402 3 15.6V9.4Z"
          fill="url(#cb_bg)"
          mask="url(#cb_mask)"
        />
        <Path d={glassPath} fill="url(#cb_glass)" />
        <Defs>
          <LinearGradient id="cb_bg" x1="12" y1="3" x2="12" y2="22" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#575757" />
            <Stop offset="1" stopColor="#151515" />
          </LinearGradient>
          <LinearGradient id="cb_glass" x1="15" y1="1" x2="15" y2="23" gradientUnits="userSpaceOnUse">
            <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
            <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
          </LinearGradient>
          <Mask id="cb_mask">
            <Rect width="100%" height="100%" fill="white" />
            <Path d={glassPath} fill="black" />
          </Mask>
        </Defs>
      </G>
    </Svg>
  );
};`,

ClipboardCheckIcon: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask, Filter, FeGaussianBlur } from "react-native-svg";

const ClipboardCheckIcon = ({
  size = 24,
  isActive = false,
  activeColor = "#6366f1",
  color = "#8a8987",
  endColor = "#BBBBC0",
  ...props
}) => {
  // This combined path creates the circular check badge and the top clip
  const glassPath = "M17 12C20.3137 12 23 14.6863 23 18C23 21.3137 20.3137 24 17 24C13.6863 24 11 21.3137 11 18C11 14.6863 13.6863 12 17 12ZM20.207 15.793C19.8165 15.4024 19.1835 15.4024 18.793 15.793L16.5 18.0859L15.707 17.293L15.6309 17.2246C15.2381 16.9043 14.6591 16.9269 14.293 17.293C13.9024 17.6835 13.9024 18.3165 14.293 18.707L15.793 20.207C16.1835 20.5976 16.8165 20.5976 17.207 20.207L20.207 17.207C20.5976 16.8165 20.5976 16.1835 20.207 15.793ZM14.75 1C15.9926 1 17 2.00736 17 3.25C17 4.49264 15.9926 5.5 14.75 5.5H9.25C8.00736 5.5 7 4.49264 7 3.25C7 2.00736 8.00736 1 9.25 1H14.75Z";

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <G>
        {/* Background Clipboard Plate */}
        <Path
          d="M3 9.4C3 7.15979 3 6.03969 3.43597 5.18404C3.81947 4.43139 4.43139 3.81947 5.18404 3.43597C6.03969 3 7.15979 3 9.4 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V15.6C21 17.8402 21 18.9603 20.564 19.816C20.1805 20.5686 19.5686 21.1805 18.816 21.564C17.9603 22 16.8402 22 14.6 22H9.4C7.15979 22 6.03969 22 5.18404 21.564C4.43139 21.1805 3.81947 20.5686 3.43597 19.816C3 18.9603 3 17.8402 3 15.6V9.4Z"
          fill="url(#cbc_grad_base)"
          mask="url(#cbc_mask)"
        />

        {/* Glass Effect Layer (Blurred Background) */}
        <Path
          d="M3 9.4C3 7.15979 3 6.03969 3.43597 5.18404C3.81947 4.43139 4.43139 3.81947 5.18404 3.43597C6.03969 3 7.15979 3 9.4 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V15.6C21 17.8402 21 18.9603 20.564 19.816C20.1805 20.5686 19.5686 21.1805 18.816 21.564C17.9603 22 16.8402 22 14.6 22H9.4C7.15979 22 6.03969 22 5.18404 21.564C4.43139 21.1805 3.81947 20.5686 3.43597 19.816C3 18.9603 3 17.8402 3 15.6V9.4Z"
          fill="url(#cbc_grad_base)"
          filter="url(#cbc_blur)"
          clipPath="url(#cbc_clip)"
        />

        {/* Foreground Badge + Clip */}
        <Path d={glassPath} fill="url(#cbc_grad_glass)" />

        {/* Shiny Ring Outline */}
        <Path
          d="M17 12.75C14.1005 12.75 11.75 15.1005 11.75 18C11.75 20.8995 14.1005 23.25 17 23.25C19.8995 23.25 22.25 20.8995 22.25 18C22.25 15.1005 19.8995 12.75 17 12.75Z"
          fill="url(#cbc_grad_outline)"
        />

        <Defs>
          <LinearGradient id="cbc_grad_base" x1="12" y1="3" x2="12" y2="22" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#575757" />
            <Stop offset="1" stopColor="#151515" />
          </LinearGradient>
          <LinearGradient id="cbc_grad_glass" x1="15" y1="1" x2="15" y2="24" gradientUnits="userSpaceOnUse">
            <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
            <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
          </LinearGradient>
          <LinearGradient id="cbc_grad_outline" x1="17" y1="12" x2="17" y2="18.9" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#fff" />
            <Stop offset="1" stopColor="#fff" stopOpacity={0} />
          </LinearGradient>
          <Filter id="cbc_blur">
            <FeGaussianBlur stdDeviation="2" />
          </Filter>
          <Mask id="cbc_mask">
            <Rect width="100%" height="100%" fill="white" />
            <Path d={glassPath} fill="black" />
          </Mask>
        </Defs>
      </G>
    </Svg>
  );
};`,

CloudBoltIcon: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask, Filter, FeGaussianBlur } from "react-native-svg";

const CloudBoltIcon = ({
  size = 24,
  isActive = false,
  activeColor = "#6366f1",
  color = "#8a8987",
  endColor = "#BBBBC0",
  ...props
}) => {
  const cloudPath = "M4.55541 7.05505C5.02189 3.67429 8.00356 1 11.5833 1C15.1216 1 17.9883 3.5354 18.5755 6.83044C20.5176 7.17843 22 8.86597 22 10.8824C22 13.1489 20.1269 15 17.8333 15H6.16667C3.8731 15 2 13.1489 2 10.8824C2 9.1615 3.0571 7.66265 4.55541 7.05505Z";

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <G>
        <Path
          d="M12.6934 6C12.8627 6.00002 13 6.1436 13 6.32031V14H12V15H16.1855C16.9731 15 17.4518 15.8683 17.0312 16.5342L12.9229 23.0391C12.6553 23.4625 12.0004 23.2732 12 22.7725V18H8.04297C7.2112 18 6.7428 17.0437 7.25293 16.3867L9.30078 13.7471C9.01557 13.4726 8.90291 13.0188 9.09863 12.6104L11.6455 6.2627C11.7239 6.10159 11.8825 6.00009 12.0557 6H12.6934Z"
          fill="url(#grad_bolt)"
          mask="url(#mask_cloud)"
        />
        <Path d={cloudPath} fill="url(#grad_cloud)" />
        <Path
          d="M11.583 1C15.1211 1 17.9877 3.53523 18.5752 6.83008C20.5173 7.17807 22 8.86643 22 10.8828C21.9997 13.1492 20.1264 15 17.833 15H6.16699C3.87358 15 2.00025 13.1492 2 10.8828C2 9.16195 3.05735 7.66229 4.55566 7.05469C5.0223 3.67422 8.00351 1.00016 11.583 1ZM11.583 1.75C8.37857 1.75016 5.71432 4.14739 5.29883 7.15723L5.23926 7.58691L4.83691 7.75C3.61814 8.24437 2.75 9.47131 2.75 10.8828C2.75025 12.7266 4.2794 14.25 6.16699 14.25H17.833C19.7206 14.25 21.2497 12.7266 21.25 10.8828C21.25 9.24336 20.0416 7.85476 18.4434 7.56836L17.9287 7.47656L17.8369 6.96191C17.3118 4.01645 14.7493 1.75 11.583 1.75Z"
          fill="url(#grad_reflect)"
        />
        <Defs>
          <LinearGradient id="grad_bolt" x1="12" y1="6" x2="12" y2="23" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#575757" />
            <Stop offset="1" stopColor="#151515" />
          </LinearGradient>
          <LinearGradient id="grad_cloud" x1="12" y1="1" x2="12" y2="15" gradientUnits="userSpaceOnUse">
            <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
            <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
          </LinearGradient>
          <LinearGradient id="grad_reflect" x1="12" y1="1" x2="12" y2="9" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#fff" />
            <Stop offset="1" stopColor="#fff" stopOpacity={0} />
          </LinearGradient>
          <Mask id="mask_cloud">
            <Rect width="100%" height="100%" fill="white" />
            <Path d={cloudPath} fill="black" />
          </Mask>
        </Defs>
      </G>
    </Svg>
  );
};`,

CloudDownloadIcon: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask } from "react-native-svg";

const CloudDownloadIcon = ({
  size = 24,
  isActive = false,
  activeColor = "#6366f1",
  color = "#8a8987",
  endColor = "#BBBBC0",
  ...props
}) => {
  const arrowPath = "M7.12097 13L10.0001 13L10.0001 8.5C10.0001 7.67157 10.6716 7 11.5001 7L12.5001 7C13.3285 7 14.0001 7.67157 14.0001 8.5V13L16.8792 13C18.1369 13 18.8362 14.4549 18.0504 15.4371L13.1714 21.5359C12.5709 22.2865 11.4292 22.2865 10.8288 21.5359L5.94968 15.4371C5.16396 14.4549 5.86322 13 7.12097 13Z";

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <G>
        <Path
          d="M3.0665 9.35256C3.62627 5.24736 7.20427 2 11.5 2C15.7459 2 19.1859 5.0787 19.8907 9.07982C22.2211 9.50238 24 11.5515 24 14C24 16.7523 21.7523 19 19 19H5C2.24772 19 0 16.7523 0 14C0 11.9104 1.26852 10.0904 3.0665 9.35256Z"
          fill="url(#grad_cloud_main)"
          mask="url(#mask_arrow_hole)"
        />
        <Path d={arrowPath} fill="url(#grad_glass_arrow)" />
        <Path
          d="M13.2501 8.5C13.2501 8.08579 12.9143 7.75 12.5001 7.75H11.5001C11.0859 7.75003 10.7501 8.08581 10.7501 8.5V13.75H7.12121C6.49233 13.75 6.14242 14.4777 6.53527 14.9688L11.4142 21.0674C11.7144 21.4427 12.2858 21.4427 12.5861 21.0674L17.465 14.9688C17.8578 14.4777 17.5079 13.75 16.879 13.75H13.2501V8.5Z"
          fill="url(#grad_white_shine)"
        />
        <Defs>
          <LinearGradient id="grad_cloud_main" x1="12" y1="2" x2="12" y2="19" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#575757" />
            <Stop offset="1" stopColor="#151515" />
          </LinearGradient>
          <LinearGradient id="grad_glass_arrow" x1="12" y1="7" x2="12" y2="22" gradientUnits="userSpaceOnUse">
            <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
            <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
          </LinearGradient>
          <LinearGradient id="grad_white_shine" x1="12" y1="7" x2="12" y2="15.7" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#fff" />
            <Stop offset="1" stopColor="#fff" stopOpacity={0} />
          </LinearGradient>
          <Mask id="mask_arrow_hole">
            <Rect width="100%" height="100%" fill="white" />
            <Path d={arrowPath} fill="black" />
          </Mask>
        </Defs>
      </G>
    </Svg>
  );
};`,

CloudUploadIcon: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask } from "react-native-svg";

const CloudUploadIcon = ({
  size = 24,
  isActive = false,
  activeColor = "#6366f1",
  color = "#8a8987",
  endColor = "#BBBBC0",
  ...props
}) => {
  const uploadPath = "M16.8791 16L14 16.0001V20.5C14 21.3285 13.3284 22 12.5 22H11.5C10.6716 22 10 21.3285 10 20.5V16.0001L7.1209 16C5.86315 16 5.1639 14.5451 5.94961 13.563L10.8287 7.46413C11.4292 6.71352 12.5708 6.71352 13.1713 7.46413L18.0504 13.563C18.8361 14.5451 18.1368 16 16.8791 16Z";

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <G>
        <Path
          d="M3.0665 9.35256C3.62627 5.24736 7.20427 2 11.5 2C15.7459 2 19.1859 5.0787 19.8907 9.07982C22.2211 9.50238 24 11.5515 24 14C24 16.7523 21.7523 19 19 19H5C2.24772 19 0 16.7523 0 14C0 11.9104 1.26852 10.0904 3.0665 9.35256Z"
          fill="url(#grad_up_base)"
          mask="url(#mask_up_hole)"
        />
        <Path d={uploadPath} fill="url(#grad_up_glass)" />
        <Path
          d="M9.99989 20.25V16H7.12098V15.25H10.7499V20.25C10.7499 20.8023 11.1976 21.25 11.7499 21.25V22C10.7834 22 9.99989 21.2165 9.99989 20.25ZM13.2499 20.25V15.25H16.8788V16H13.9999V20.25C13.9999 21.2165 13.2164 22 12.2499 22V21.25C12.8022 21.25 13.2499 20.8023 13.2499 20.25ZM10.829 7.46384C11.4295 6.71371 12.5703 6.71371 13.1708 7.46384L18.0507 13.5635C18.8358 14.5456 18.1363 16 16.8788 16V15.25L12.5858 7.93259C12.2856 7.55729 11.7142 7.55729 11.414 7.93259L6.53504 14.0312C6.14219 14.5223 6.4921 15.25 7.12098 15.25V16Z"
          fill="url(#grad_up_reflect)"
        />
        <Defs>
          <LinearGradient id="grad_up_base" x1="12" y1="2" x2="12" y2="19" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#575757" />
            <Stop offset="1" stopColor="#151515" />
          </LinearGradient>
          <LinearGradient id="grad_up_glass" x1="12" y1="6" x2="12" y2="22" gradientUnits="userSpaceOnUse">
            <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
            <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
          </LinearGradient>
          <LinearGradient id="grad_up_reflect" x1="12" y1="6.9" x2="12" y2="15.6" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#fff" />
            <Stop offset="1" stopColor="#fff" stopOpacity="0" />
          </LinearGradient>
          <Mask id="mask_up_hole">
            <Rect width="100%" height="100%" fill="white" />
            <Path d={uploadPath} fill="black" />
          </Mask>
        </Defs>
      </G>
    </Svg>
  );
};`,

CodeEditorIcon: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask } from "react-native-svg";

const CodeEditorIcon = ({
  size = 24,
  isActive = false,
  activeColor = "#6366f1",
  color = "#8a8987",
  endColor = "#BBBBC0",
  ...props
}) => {
  const windowPath = "M16.5996 3C18.8398 3 19.9608 2.99957 20.8164 3.43555C21.5689 3.81902 22.181 4.43109 22.5645 5.18359C23.0004 6.03924 23 7.16018 23 9.40039V14.5996C23 16.8398 23.0004 17.9608 22.5645 18.8164C22.181 19.5689 21.5689 20.181 20.8164 20.5645C19.9608 21.0004 18.8398 21 16.5996 21H11.4004C9.16018 21 8.03924 21.0004 7.18359 20.5645C6.43109 20.181 5.81902 19.5689 5.43555 18.8164C4.99957 17.9608 5 16.8398 5 14.5996V9.40039C5 7.16018 4.99957 6.03924 5.43555 5.18359C5.81902 4.43109 6.43109 3.81902 7.18359 3.43555C8.03924 2.99957 9.16018 3 11.4004 3H16.5996ZM13 16C12.4477 16 12 16.4477 12 17C12 17.5523 12.4477 18 13 18H15C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16H13ZM15 12.5C14.4477 12.5 14 12.9477 14 13.5C14 14.0523 14.4477 14.5 15 14.5H20C20.5523 14.5 21 14.0523 21 13.5C21 12.9477 20.5523 12.5 20 12.5H15ZM13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11H16C16.5523 11 17 10.5523 17 10C17 9.44772 16.5523 9 16 9H13ZM9 6C8.44772 6 8 6.44772 8 7C8 7.55228 8.44772 8 9 8H10C10.5523 8 11 7.55228 11 7C11 6.44772 10.5523 6 10 6H9Z";

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <G>
        <Path
          d="M9.42383 3.39355C8.55717 3.61022 8.12343 3.71934 7.80078 3.96094C7.51632 4.17406 7.29393 4.45941 7.15625 4.78711C7.00022 5.15863 7 5.60513 7 6.49805V17.502C7 18.3949 7.00022 18.8414 7.15625 19.2129C7.29393 19.5406 7.51632 19.8259 7.80078 20.0391C8.12343 20.2807 8.55716 20.3898 9.42383 20.6064L11 21H7.40039C5.16018 21 4.03924 21.0004 3.18359 20.5645C2.43109 20.181 1.81902 19.5689 1.43555 18.8164C0.999573 17.9608 1 16.8398 1 14.5996V9.40039C1 7.16018 0.999573 6.03924 1.43555 5.18359C1.81902 4.43109 2.43109 3.81902 3.18359 3.43555C4.03924 2.99957 5.16018 3 7.40039 3H11L9.42383 3.39355ZM15 15.5C15.8284 15.5 16.5 16.1716 16.5 17C16.5 17.8284 15.8284 18.5 15 18.5H13C12.1716 18.5 11.5 17.8284 11.5 17C11.5 16.1716 12.1716 15.5 13 15.5H15ZM20 12C20.8284 12 21.5 12.6716 21.5 13.5C21.5 14.3284 20.8284 15 20 15H15C14.1716 15 13.5 14.3284 13.5 13.5C13.5 12.6716 14.1716 12 15 12H20ZM16 8.5C16.8284 8.5 17.5 9.17157 17.5 10C17.5 10.8284 16.8284 11.5 16 11.5H13C12.1716 11.5 11.5 10.8284 11.5 10C11.5 9.17157 12.1716 8.5 13 8.5H16ZM10.1533 5.50781C10.9097 5.58461 11.5 6.22334 11.5 7C11.5 7.77666 10.9097 8.41539 10.1533 8.49219L10 8.5H9C8.17157 8.5 7.5 7.82843 7.5 7C7.5 6.17157 8.17157 5.5 9 5.5H10L10.1533 5.50781Z"
          fill="url(#grad_ce_base)"
          mask="url(#mask_ce_window)"
        />
        <Path d={windowPath} fill="url(#grad_ce_glass)" />
        <Path
          d="M16.5996 3.75H11.4004C10.268 3.75 9.4636 3.75045 8.83398 3.80176C8.2133 3.85235 7.8287 3.94856 7.52441 4.10352C6.913 4.41508 6.41508 4.913 6.10352 5.52441C6.10352 5.52441 22.1982 6.83398 22.1982 6.83398C22.2495 16.5364 22.25 15.732 22.25 14.5996V9.40039C22.25 8.268 22.2495 7.4636 22.1982 6.83398C22.1476 6.2133 22.0514 5.8287 21.8965 5.52441C21.5849 4.913 21.087 4.41508 20.4756 4.10352C20.1713 3.94856 19.7867 3.85235 19.166 3.80176C18.5364 3.75045 17.732 3.75 16.5996 3.75Z"
          fill="url(#grad_ce_reflect)"
        />
        <Defs>
          <LinearGradient id="grad_ce_base" x1="11.25" y1="3" x2="11.25" y2="21" gradientUnits="userSpaceOnUse">
            <Stop stopColor={color} />
            <Stop offset="1" stopColor="#151515" />
          </LinearGradient>
          <LinearGradient id="grad_ce_glass" x1="14" y1="3" x2="14" y2="21" gradientUnits="userSpaceOnUse">
            <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
            <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
          </LinearGradient>
          <LinearGradient id="grad_ce_reflect" x1="14" y1="3" x2="14" y2="13.4" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#fff" />
            <Stop offset="1" stopColor="#fff" stopOpacity="0" />
          </LinearGradient>
          <Mask id="mask_ce_window">
            <Rect width="100%" height="100%" fill="white" />
            <Path d={windowPath} fill="black" />
          </Mask>
        </Defs>
      </G>
    </Svg>
  );
};`,

ColorPaletteIcon: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask } from "react-native-svg";

const ColorPaletteIcon = ({
  size = 24,
  isActive = false,
  activeColor = "#6366f1",
  color = "#8a8987",
  endColor = "#BBBBC0",
  ...props
}) => {
  const dropperPath = "M16.0288 3.02747C17.3956 1.66105 19.6113 1.66108 20.978 3.02747C22.3449 4.3943 22.3449 6.61083 20.978 7.97766L18.0386 10.9171L19.561 12.4396L19.6646 12.5538C20.1444 13.1429 20.1098 14.0117 19.561 14.5607C19.0121 15.1096 18.1433 15.144 17.5542 14.6642L17.4399 14.5607L9.43994 6.56067C8.85415 5.97488 8.85415 5.02536 9.43994 4.43958C10.0257 3.85394 10.9753 3.85384 11.561 4.43958L13.0884 5.96692L16.0288 3.02747Z";

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <G>
        <Path
          d="M12.0001 7.05612C12.0282 7.03799 15.0095 5.12181 17.0001 7.05612C18.9886 8.98851 17.0228 11.9218 17.0001 11.9555L8.95615 20.0005C7.83392 21.1226 6.1397 21.3216 4.81259 20.601L3.70712 21.7075C3.31669 22.0978 2.68356 22.0977 2.29306 21.7075C1.90259 21.317 1.90269 20.684 2.29306 20.2934L3.39951 19.186C2.68421 17.8601 2.88608 16.1702 4.00595 15.0503L12.0001 7.05612Z"
          fill="url(#grad_cp_base)"
          mask="url(#mask_cp_dropper)"
        />
        <Path d={dropperPath} fill="url(#grad_cp_glass)" />
        <Path
          d="M16.029 3.02809C17.3958 1.6613 19.6114 1.66128 20.9782 3.02809C22.345 4.39491 22.345 6.61047 20.9782 7.9773L18.0377 10.9168L19.5602 12.4392L16.9772 10.9168L20.4479 7.44703C21.5174 6.15796 21.4547 4.56518 20.4479 3.55836Z"
          fill="url(#grad_cp_reflect)"
        />
        <Defs>
          <LinearGradient id="grad_cp_base" x1="9.9" y1="6.1" x2="9.9" y2="22" gradientUnits="userSpaceOnUse">
            <Stop stopColor={color} />
            <Stop offset="1" stopColor="#151515" />
          </LinearGradient>
          <LinearGradient id="grad_cp_glass" x1="15.5" y1="2" x2="15.5" y2="15" gradientUnits="userSpaceOnUse">
            <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
            <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
          </LinearGradient>
          <LinearGradient id="grad_cp_reflect" x1="15.5" y1="2" x2="15.5" y2="9.5" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#fff" />
            <Stop offset="1" stopColor="#fff" stopOpacity="0" />
          </LinearGradient>
          <Mask id="mask_cp_dropper">
            <Rect width="100%" height="100%" fill="white" />
            <Path d={dropperPath} fill="black" />
          </Mask>
        </Defs>
      </G>
    </Svg>
  );
};`,

ConnectIcon: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Rect, Mask } from "react-native-svg";

const ConnectIcon = ({
  size = 24,
  isActive = false,
  activeColor = "#6366f1",
  color = "#8a8987",
  endColor = "#BBBBC0",
  ...props
}) => {
  const glassNodesPath = "M6 14C8.20914 14 10 15.7909 10 18C10 20.2091 8.20914 22 6 22C3.79086 22 2 20.2091 2 18C2 15.7909 3.79086 14 6 14ZM18 2C20.2091 2 22 3.79086 22 6C22 8.20914 20.2091 10 18 10C15.7909 10 14 8.20914 14 6C14 3.79086 15.7909 2 18 2Z";

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <G>
        <Path
          d="M17.2929 5.29295C17.6834 4.90243 18.3164 4.90243 18.707 5.29295C19.0975 5.68348 19.0975 6.31649 18.707 6.70702L6.70696 18.707C6.31643 19.0975 5.68342 19.0975 5.29289 18.707C4.90237 18.3165 4.90237 17.6835 5.29289 17.293L17.2929 5.29295Z"
          fill="url(#grad_conn_base)"
          mask="url(#mask_conn_glass)"
        />
        <Path d="M10 6C10 8.20914 8.20914 10 6 10C3.79086 10 2 8.20914 2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6Z" fill="url(#grad_conn_base)" />
        <Path d="M22 18C22 20.2091 20.2091 22 18 22C15.7909 22 14 20.2091 14 18C14 15.7909 15.7909 14 18 14C20.2091 14 22 15.7909 22 18Z" fill="url(#grad_conn_base)" />
        
        <Path d={glassNodesPath} fill="url(#grad_conn_glass)" />
        
        <Path d="M9.25 18C9.25 16.2051 7.79493 14.75 6 14.75C4.20507 14.75 2.75 16.2051 2.75 18C2.75 19.7949 4.20507 21.25 6 21.25V22C3.79086 22 2 20.2091 2 18C2 15.7909 3.79086 14 6 14V14.75Z" fill="url(#grad_conn_reflect)" />
        <Path d="M21.25 6C21.25 4.20507 19.7949 2.75 18 2.75C16.2051 2.75 14.75 4.20507 14.75 6C14.75 7.79493 16.2051 9.25 18 9.25V10C15.7909 10 14 8.20914 14 6C14 3.79086 15.7909 2 18 2V2.75Z" fill="url(#grad_conn_reflect)" />

        <Defs>
          <LinearGradient id="grad_conn_base" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
            <Stop stopColor={color} />
            <Stop offset="1" stopColor="#151515" />
          </LinearGradient>
          <LinearGradient id="grad_conn_glass" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
            <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
            <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
          </LinearGradient>
          <LinearGradient id="grad_conn_reflect" x1="12" y1="2" x2="12" y2="10" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#fff" />
            <Stop offset="1" stopColor="#fff" stopOpacity="0" />
          </LinearGradient>
          <Mask id="mask_conn_glass">
            <Rect width="100%" height="100%" fill="white" />
            <Path d={glassNodesPath} fill="black" />
          </Mask>
        </Defs>
      </G>
    </Svg>
  );
};`,

CopiesIcon: `import React from "react";
import Svg, { Path, Rect, Defs, LinearGradient, Stop, Mask } from "react-native-svg";

const CopiesIcon = ({
  size = 24,
  isActive = false,
  activeColor = "#6366f1",
  color = "#8a8987",
  endColor = "#BBBBC0",
  ...props
}) => {
  const rectPath = "M1 6.6C1 4.63982 1 3.65972 1.38148 2.91103C1.71703 2.25247 2.25247 1.71703 2.91103 1.38148C3.65972 1 4.63982 1 6.6 1H7.4C9.36018 1 10.3403 1 11.089 1.38148C11.7475 1.71703 12.283 2.25247 12.6185 2.91103C13 3.65972 13 4.63982 13 6.6V7.4C13 9.36018 13 10.3403 12.6185 11.089C12.283 11.7475 11.7475 12.283 11.089 12.6185C10.3403 13 9.36018 13 7.4 13H6.6C4.63982 13 3.65972 13 2.91103 12.6185C2.25247 12.283 1.71703 11.7475 1.38148 11.089C1 10.3403 1 9.36018 1 7.4V6.6Z";

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d={rectPath}
        fill="url(#grad_base)"
        mask="url(#mask_glass)"
      />
      <Rect x="6" y="6" width="12" height="12" rx="3.5" fill="url(#grad_glass)" />
      <Path 
        d="M12.4 17.25H11.6V18H12.4V17.25ZM17.25 12.4V11.6C17.25 9.6 17.25 8.6 16.95 7.9C16.6 7.25 16.1 6.75 15.4 6.4C14.7 6.1 13.7 6.1 11.7 6.1H11.6C9.6 6.1 8.6 6.1 7.9 6.4C7.25 6.75 6.75 7.25 6.4 7.9C6.1 8.6 6.1 9.6 6.1 11.6V12.4C6.1 14.4 6.1 15.4 6.4 16.1C6.75 16.75 7.25 17.25 7.9 17.6C8.6 17.9 9.6 17.9 11.6 17.9H12.4V17.25Z" 
        fill="url(#grad_reflect)" 
      />
      <Path
        d="M11 16.6C11 14.6398 11 13.6597 11.3815 12.911C11.717 12.2525 12.2525 11.717 12.911 11.3815C13.6597 11 14.6398 11 16.6 11H17.4C19.3602 11 20.3403 11 21.089 11.3815C21.7475 11.717 22.283 12.2525 22.6185 12.911C23 13.6597 23 14.6398 23 16.6V17.4C23 19.3602 23 20.3403 22.6185 21.089C22.283 21.7475 21.7475 22.283 21.089 22.6185C20.3403 23 19.3602 23 17.4 23H16.6C14.6398 23 13.6597 23 12.911 22.6185C12.2525 22.283 11.717 21.7475 11.3815 21.089C11 20.3403 11 19.3602 11 17.4V16.6Z"
        fill="url(#grad_base)"
      />
      <Defs>
        <LinearGradient id="grad_base" x1="12" y1="1" x2="12" y2="23" gradientUnits="userSpaceOnUse">
          <Stop stopColor={color} />
          <Stop offset="1" stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="grad_glass" x1="12" y1="6" x2="12" y2="18" gradientUnits="userSpaceOnUse">
          <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
          <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
        </linearGradient>
        <LinearGradient id="grad_reflect" x1="12" y1="6" x2="12" y2="14" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" stopOpacity={0.8} />
          <Stop offset="1" stopColor="#fff" stopOpacity="0" />
        </LinearGradient>
        <Mask id="mask_glass">
          <Rect width="100%" height="100%" fill="white" />
          <Rect x="6" y="6" width="12" height="12" rx="3.5" fill="black" />
        </Mask>
      </Defs>
    </Svg>
  );
};`,

CreditCardsIcon: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Mask, Rect } from "react-native-svg";

const CreditCardsIcon = ({
  size = 24,
  isActive = false,
  activeColor = "#6366f1",
  color = "#8a8987",
  endColor = "#BBBBC0",
  ...props
}) => {
  const frontCardPath = "M16.5996 7C18.8398 7 19.9608 6.99957 20.8164 7.43555C21.5689 7.81902 22.181 8.43109 22.5645 9.18359C23.0004 10.0392 23 11.1602 23 13.4004V15.5996C23 17.8398 23.0004 18.9608 22.5645 19.8164C22.181 20.5689 21.5689 21.181 20.8164 21.5645C19.9608 22.0004 18.8398 22 16.5996 22H10.4004C8.16018 22 7.03924 22.0004 6.18359 21.5645C5.43109 21.181 4.81902 20.5689 4.43555 19.8164C3.99957 18.9608 4 17.8398 4 15.5996V13.4004C4 11.1602 3.99957 10.0392 4.43555 9.18359C4.81902 8.43109 5.43109 7.81902 6.18359 7.43555C7.03924 6.99957 8.16018 7 10.4004 7H16.5996ZM7 12C6.44772 12 6 12.4477 6 13C6 13.5523 6.44772 14 7 14H20L20.1025 13.9951C20.6067 13.9438 21 13.5177 21 13C21 12.4823 20.6067 12.0562 20.1025 12.0049L20 12H7Z";

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <G>
        <Path
          d="M13.6 17H7.4C5.15979 17 4.03968 17 3.18404 16.564C2.43139 16.1805 1.81947 15.5686 1.43597 14.816C1 13.9603 1 12.8402 1 10.6V8.4C1 6.15979 1 5.03968 1.43597 4.18404C1.81947 3.43139 2.43139 2.81947 3.18404 2.43597C4.03969 2 5.15979 2 7.4 2H13.6C15.8402 2 16.9603 2 17.816 2.43597C18.5686 2.81947 19.1805 3.43139 19.564 4.18404C20 5.03969 20 6.15979 20 8.4V11.5L21.4652 12.6037C21.3353 13.736 20.832 14.5061 19.7883 15.2341L18.3057 16.266C18.136 16.3841 17.9701 16.4855 17.816 16.564C16.9603 17 15.8402 17 13.6 17Z"
          fill="url(#grad_cc_base)"
          mask="url(#mask_cc_glass)"
        />
        <Path d={frontCardPath} fill="url(#grad_cc_glass)" />
        <Path
          d="M16.5996 7.75H10.4004C9.26798 7.75 8.46335 7.75035 7.83398 7.80176C7.21336 7.85247 6.82889 7.94936 6.52441 8.10449C5.91304 8.41605 5.41605 8.91305 5.10449 9.52441C4.94936 9.82889 4.85247 10.2134 4.80176 10.834C4.75035 11.4633 4.75 12.268 4.75 13.4004V15.5996"
          stroke="url(#grad_cc_reflect)"
          strokeWidth="0.5"
        />
        <Defs>
          <LinearGradient id="grad_cc_base" x1="11.25" y1="2" x2="11.25" y2="17" gradientUnits="userSpaceOnUse">
            <Stop stopColor={color} />
            <Stop offset="1" stopColor="#151515" />
          </LinearGradient>
          <LinearGradient id="grad_cc_glass" x1="13.5" y1="7" x2="13.5" y2="22" gradientUnits="userSpaceOnUse">
            <Stop stopColor={isActive ? activeColor : color} stopOpacity={0.6} />
            <Stop offset="1" stopColor={isActive ? activeColor : endColor} stopOpacity={0.6} />
          </LinearGradient>
          <LinearGradient id="grad_cc_reflect" x1="13.5" y1="7" x2="13.5" y2="15.6" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#fff" />
            <Stop offset="1" stopColor="#fff" stopOpacity="0" />
          </LinearGradient>
          <Mask id="mask_cc_glass">
            <Rect width="100%" height="100%" fill="white" />
            <Path d={frontCardPath} fill="black" />
          </Mask>
        </Defs>
      </G>
    </Svg>
  );
};`,

CrosshairsIcon: `import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop, Mask, Rect } from "react-native-svg";

const CrosshairsIcon = ({
  size = 24,
  isActive = false,
  activeColor = "#ef4444", // Red is standard for active targeting
  color = "#575757",
  ...props
}) => {
  const gridPath = "M12 19.5V23M12 6.5C15.03 6.5 17.5 8.97 17.5 12C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12C6.5 8.97 8.97 6.5 12 6.5ZM3.5 12H1M23 12H20.5M12 0V3.5";
  const lensPath = "M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8Z";

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d={gridPath}
        stroke="url(#grad_base)"
        strokeWidth="2"
        strokeLinecap="round"
        mask="url(#mask_lens)"
      />
      <Path d={lensPath} fill="url(#grad_glass)" fillRule="evenodd" />
      <Path
        d="M12 2.75C6.89 2.75 2.75 6.89 2.75 12C2.75 17.11 6.89 21.25 12 21.25C17.11 21.25 21.25 17.11 21.25 12C21.25 6.89 17.11 2.75 12 2.75"
        stroke="url(#grad_reflect)"
        strokeWidth="0.5"
      />
      <Defs>
        <LinearGradient id="grad_base" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
          <Stop stopColor={isActive ? activeColor : color} />
          <Stop offset="1" stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="grad_glass" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
          <Stop stopColor={isActive ? activeColor : "#E3E3E5"} stopOpacity={0.4} />
          <Stop offset="1" stopColor={isActive ? "#000" : "#BBBBC0"} stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient id="grad_reflect" x1="12" y1="2" x2="12" y2="13.5" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset="1" stopColor="#fff" stopOpacity="0" />
        </LinearGradient>
        <Mask id="mask_lens">
          <Rect width="100%" height="100%" fill="white" />
          <Path d={lensPath} fill="black" fillRule="evenodd" />
        </Mask>
      </Defs>
    </Svg>
  );
};`,

CubeIcon: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Mask, Rect } from "react-native-svg";

const CubeIcon = ({
  size = 24,
  isActive = false,
  activeColor = "#0ea5e9", // A common "tech" blue for active states
  color = "#575757",
  ...props
}) => {
  const topFace = "M12.8126 3.20231C12.3065 2.93256 11.6935 2.93256 11.1874 3.20231L4.85793 6.57641C4.49895 6.76777 4.50657 7.2849 4.87105 7.4656L11.1116 10.5596C11.6714 10.8371 12.3286 10.8371 12.8884 10.5596L19.129 7.4656C19.4934 7.2849 19.5011 6.76777 19.1421 6.57641L12.8126 3.20231Z";

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <G>
        <Path
          d="M11.03 1.02C11.63 0.69 12.36 0.69 12.96 1.02L21.46 5.68C22.1 6.03 22.49 6.7 22.5 7.43V16.56C22.5 17.29 22.1 17.96 21.46 18.31L12.96 22.97C12.66 23.13 12.33 23.22 12 23.22C11.66 23.22 11.33 23.13 11.03 22.97L2.53 18.31C1.89 17.96 1.5 17.29 1.5 16.56V7.43C1.5 6.7 1.89 6.03 2.53 5.68L11.03 1.02Z"
          fill="url(#grad_base)"
          mask="url(#mask_top)"
        />
        <Path
          d="M22.5 16.56V7.54C22.39 7.79 22.21 8.01 21.94 8.15L12.94 12.99C12.65 13.15 12.32 13.22 12 13.22V23.21C12.33 23.21 12.66 23.13 12.96 22.97L21.46 18.31C22.1 17.96 22.5 17.29 22.5 16.56Z"
          fill="url(#grad_side)"
        />
        <Path d={topFace} fill="url(#grad_glass)" />
        <Defs>
          <LinearGradient id="grad_base" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
            <Stop stopColor={isActive ? activeColor : color} />
            <Stop offset="1" stopColor="#151515" />
          </LinearGradient>
          <LinearGradient id="grad_side" x1="17" y1="7.5" x2="17" y2="23" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#151515" />
            <Stop offset="1" stopColor={isActive ? activeColor : color} />
          </LinearGradient>
          <LinearGradient id="grad_glass" x1="12" y1="3" x2="12" y2="11" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#E3E3E5" stopOpacity={0.6} />
            <Stop offset="1" stopColor="#BBBBC0" stopOpacity={0.6} />
          </LinearGradient>
          <Mask id="mask_top">
            <Rect width="100%" height="100%" fill="white" />
            <Path d={topFace} fill="black" />
          </Mask>
        </Defs>
      </G>
    </Svg>
  );
};`,

  Message: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Mask, Rect } from "react-native-svg";

const Message = ({ size = 24, color = "#262522", ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G>
      <Path
        fill="url(#m0)"
        d="M1 9.993c0 1.631.44 3.154 1.196 4.472.19.46.082 1.03-.04 1.492-.185.705-.534 1.383-.942 1.791a.73.73 0 00.477 1.245c.824.044 1.738-.119 2.535-.351a9.247 9.247 0 00 1.658-.653A8.995 8.995 0 00 10 18.995 8.998 8.998 0 00 10.078 1C5.108 1 1 5.024 1 9.993Z"
        mask="url(#m_mask)"
      />
      <Path
        fill="url(#m1)"
        d="M22.75 14.497a7.21 7.21 0 01-.962 3.595c-.35.655.292 1.921.742 2.373a.75.75 0 01-.49 1.28c-.675.036-1.414-.098-2.05-.283a7.597 7.597 0 01-1.255-.485 7.243 7.243 0 01-3.236.77 7.247 7.247 0 11.002-14.497 7.249 7.249 0 01 7.249 7.247Z"
      />
      <Defs>
        <LinearGradient id="m0" x1="10" x2="10" y1="1" y2="19" gradientUnits="userSpaceOnUse">
          <Stop stopColor={color} />
          <Stop offset="1" stopColor={color} stopOpacity={0.8} />
        </LinearGradient>
        <LinearGradient id="m1" x1="15.5" x2="15.5" y1="7.25" y2="21.75" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#E3E3E5" stopOpacity={0.6} />
          <Stop offset="1" stopColor="#BBBBC0" stopOpacity={0.6} />
        </LinearGradient>
        <Mask id="m_mask">
          <Rect width="100%" height="100%" fill="#FFF" />
          <Path fill="#000" d="M22.75 14.497a7.21 7.21 0 01-.962 3.595c-.35.655.292 1.921.742 2.373a.75.75 0 01-.49 1.28c-.675.036-1.414-.098-2.05-.283a7.597 7.597 0 01-1.255-.485 7.243 7.243 0 01-3.236.77 7.247 7.247 0 11.002-14.497 7.249 7.249 0 01 7.249 7.247Z" />
        </Mask>
      </Defs>
    </G>
  </Svg>
);`,

  House: `import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg";

const House = ({ size = 24, color = "#262522", ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G>
      <Path
        d="M6.5 17V21.5L8 22H16L17.5 21.5V17C17.5 15.6044 17.5 14.9067 17.3278 14.3389C16.94 13.0605 15.9395 12.06 14.6611 11.6722C14.0933 11.5 13.3956 11.5 12 11.5C10.6044 11.5 9.90666 11.5 9.33886 11.6722C8.06046 12.06 7.06004 13.0605 6.67224 14.3389C6.5 14.9067 6.5 15.6044 6.5 17Z"
        fill="url(#h0)"
      />
      <Path
        d="M11.0322 1.50133C11.6675 1.34298 12.3325 1.34298 12.9678 1.50133C13.6868 1.68063 14.348 2.14335 15.6699 3.06871L19.2705 5.58922C20.2694 6.28846 20.7688 6.63837 21.1299 7.09215C21.4497 7.49408 21.6891 7.95418 21.835 8.44664C21.9997 9.00276 22 9.61276 22 10.8324V15.6C22 17.8399 22.0003 18.9602 21.5645 19.8158C21.181 20.5683 20.5689 21.1803 19.8164 21.5638C19.0133 21.973 17.9767 21.9969 16 21.9984V17.0004C16 15.6002 16 14.8994 15.7275 14.3646C15.4878 13.8943 15.1051 13.5124 14.6348 13.2728C14.1 13.0003 13.4001 13.0004 12 13.0004C10.5999 13.0004 9.90001 13.0003 9.36523 13.2728C8.89493 13.5124 8.51215 13.8943 8.27246 14.3646C7.99998 14.8994 8 15.6002 8 17.0004V21.9984C6.0233 21.9969 4.98673 21.973 4.18359 21.5638C3.43114 21.1803 2.81897 20.5683 2.43555 19.8158C1.99972 18.9602 2 17.8399 2 15.6V10.8324C2 9.61276 2.00032 9.00276 2.16504 8.44664C2.31093 7.95418 2.55034 7.49408 2.87012 7.09215C3.23121 6.63837 3.73058 6.28846 4.72949 5.58922L8.33008 3.06871C9.65203 2.14335 10.3132 1.68063 11.0322 1.50133Z"
        fill="url(#h1)"
      />
      <Defs>
        <LinearGradient id="h0" x1="12" y1="11.5" x2="12" y2="22" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset="1" stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="h1" x1="12" y1="1.383" x2="12" y2="21.998" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#E3E3E5" stopOpacity={0.6} />
          <Stop offset="1" stopColor="#BBBBC0" stopOpacity={0.6} />
        </LinearGradient>
      </Defs>
    </G>
  </Svg>
);`,


};