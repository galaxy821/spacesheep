import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeOutlinedIcon = props => (
  <Svg
    width={22}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.667 21.333h4v-8h8v8h4v-12l-8-6-8 6v12ZM0 24V8l10.667-8 10.666 8v16H12v-8H9.333v8H0Z"
      fill="#505050"
    />
  </Svg>
);

export default HomeOutlinedIcon;
