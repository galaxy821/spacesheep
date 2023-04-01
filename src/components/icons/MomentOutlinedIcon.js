import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MomentOutlinedIcon = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.912 0a2.666 2.666 0 0 1 2.168 1.115l.119.18L23.43 6.68a4 4 0 0 1 .557 1.747l.012.31v12.595a2.667 2.667 0 0 1-2.467 2.66l-.2.007H2.667a2.667 2.667 0 0 1-2.66-2.467l-.007-.2V8.74a4 4 0 0 1 .421-1.787l.15-.272L3.8 1.295A2.667 2.667 0 0 1 5.872.008L6.088 0h11.824Zm3.421 9.333H2.667v12h18.666v-12ZM10.667 2.667H6.088l-2.4 4h6.979v-4Zm7.245 0h-4.579v4h6.979l-2.4-4Z"
      fill="#505050"
    />
  </Svg>
);

export default MomentOutlinedIcon;
