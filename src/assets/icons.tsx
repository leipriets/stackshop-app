import * as React from "react";
import Svg, { Defs, G, Path, SvgProps } from "react-native-svg";

export const CartLogoIcon = (props: SvgProps) => (
  <Svg width={82} height={92} viewBox="0 0 82 92" fill="none" {...props}>
    <Path
      d="M74.4857 88.2308L0 89.0686L13.1998 16.1273L65.6855 19.1258L74.4857 88.2308Z"
      fill="#8BC6FF"
      fillOpacity={0.51}
    />
    <Path
      d="M81.3999 92H11.8379L12.2287 88.9313L74.4857 88.2308L65.9912 21.5261L74.4857 20.6151L81.3999 92Z"
      fill="#004BFE"
      fillOpacity={0.78}
    />
    <Path
      d="M12.229 88.9316L20.1874 26.4361L65.9915 21.5264L74.486 88.2311L12.229 88.9316Z"
      fill="#004BFE"
      fillOpacity={0.78}
    />
    <Path
      d="M57.3532 14.1609H52.9025C52.9025 8.80525 48.544 4.44874 43.1853 4.44874C37.8276 4.44874 33.4681 8.80525 33.4681 14.1609H29.0173C29.0173 6.35289 35.3732 1.57794e-05 43.1853 1.57794e-05C50.9973 1.57794e-05 57.3532 6.35289 57.3532 14.1609Z"
      fill="#8BC6FF"
    />
  </Svg>
);

export const DotDisabled = (props: SvgProps) => (
  <Svg width={40} height={40} viewBox="0 0 80 80" fill="none" {...props}>
    <G filter="url(#filter0_d_17_203)">
      <Path
        d="M40 30C45.5228 30 50 34.4772 50 40C50 45.5228 45.5228 50 40 50C34.4772 50 30 45.5228 30 40C30 34.4772 34.4772 30 40 30Z"
        fill="#C7D6FB"
      />
    </G>
    <Defs></Defs>
  </Svg>
);


export const DotActive = (props: SvgProps) => (
  <Svg width={40} height={40} viewBox="0 0 80 80" fill="none" {...props}>
    <G filter="url(#filter0_d_17_203)">
      <Path
        d="M40 30C45.5228 30 50 34.4772 50 40C50 45.5228 45.5228 50 40 50C34.4772 50 30 45.5228 30 40C30 34.4772 34.4772 30 40 30Z"
        fill="#004CFF"
      />
    </G>
    <Defs></Defs>
  </Svg>
);

export const Ellipse = (props: SvgProps) => (
  <Svg
    width={78}
    height={78}
    viewBox="0 0 78 78"
    fill="none"
    {...props}
  >
    <G filter="url(#filter0_d_41_391)">
      <Path
        d="M39 59C50.0457 59 59 50.0457 59 39C59 27.9543 50.0457 19 39 19C27.9543 19 19 27.9543 19 39C19 50.0457 27.9543 59 39 59Z"
        fill="white"
      />
      <Path
        d="M39 17C51.1503 17 61 26.8497 61 39C61 51.1503 51.1503 61 39 61C26.8497 61 17 51.1503 17 39C17 26.8497 26.8497 17 39 17Z"
        stroke="white"
        strokeWidth={4}
      />
    </G>
    <Defs></Defs>
  </Svg>
);
