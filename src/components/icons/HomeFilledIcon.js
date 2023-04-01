import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeFilledIcon = props => (
  <Svg
    width={22}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 24V8l10.667-8 10.666 8v16h-8v-9.333H8V24H0Z" fill="#CCABDA" />
  </Svg>
);

export default HomeFilledIcon;
