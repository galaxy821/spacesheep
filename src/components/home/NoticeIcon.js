import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const NoticeIcon = props => (
  <Svg
    width={22}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.5 17.833V19a3.5 3.5 0 1 0 7 0v-1.167m-5.833-14a2.333 2.333 0 1 1 4.666 0 8.167 8.167 0 0 1 4.667 7v3.5a4.666 4.666 0 0 0 2.333 3.5H1.667A4.666 4.666 0 0 0 4 14.333v-3.5a8.167 8.167 0 0 1 4.667-7Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default NoticeIcon;
