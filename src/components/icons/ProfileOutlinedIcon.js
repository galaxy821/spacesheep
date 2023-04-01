import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

const ProfileOutlinedIcon = () => (
  <Svg width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 29a12.94 12.94 0 0 0 6.5-1.74V23a4.5 4.5 0 0 0-4.5-4.5h-4A4.5 4.5 0 0 0 9.5 23v4.26A12.94 12.94 0 0 0 16 29Zm9.5-6v1.874a13 13 0 1 0-19 0V23a7.504 7.504 0 0 1 4.972-7.064 6.001 6.001 0 1 1 9.056 0A7.504 7.504 0 0 1 25.5 23ZM16 32a16 16 0 1 0 0-32 16 16 0 0 0 0 32Zm3-20a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        fill="#505050"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#505050" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ProfileOutlinedIcon;
