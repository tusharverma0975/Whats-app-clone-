// DrawerIcon.js

import React from 'react';
import Svg, { Path } from 'react-native-svg';

const DrawerIcon = ({ color, size }: any) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none" >
    <Path d="M8.03488 10.5648C7.87576 10.5648 7.71666 10.5032 7.59535 10.3803L3.77784 6.51049C3.53499 6.26432 3.53499 5.86519 3.77784 5.61912C4.02058 5.37305 4.41423 5.37305 4.65709 5.61912L8.03488 9.04338L11.4127 5.61924C11.6555 5.37317 12.0491 5.37317 12.2919 5.61924C12.5348 5.86531 12.5348 6.26444 12.2919 6.51061L8.47441 10.3805C8.35304 10.5034 8.19394 10.5648 8.03488 10.5648Z" fill={color} />
  </Svg>
);44

export default DrawerIcon;
