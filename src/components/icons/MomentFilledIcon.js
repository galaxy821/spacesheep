import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MomentFilledIcon = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.912 0a2.666 2.666 0 0 1 2.168 1.115l.119.18L23.43 6.68a4 4 0 0 1 .557 1.747l.012.31v12.595a2.667 2.667 0 0 1-2.467 2.66l-.2.007H2.667a2.667 2.667 0 0 1-2.66-2.467l-.007-.2V8.74a4 4 0 0 1 .421-1.787l.15-.272L3.8 1.295A2.667 2.667 0 0 1 5.872.008L6.088 0h11.824Zm0 2.667h-4.579V8h7.779l-3.2-5.333Zm-7.245 0H6.088L2.888 8h7.779V2.667Z"
      fill="#CCABDA"
    />
  </Svg>
);

export default MomentFilledIcon;
