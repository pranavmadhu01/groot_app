import * as React from 'react';
import {Svg, Circle} from 'react-native-svg';

function DetectionRippleIcon({width, height, color}) {
  color = color || 'E10000';
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle opacity="0.75" cx="20" cy="20" r="5" fill={color} />
      <Circle opacity="0.3" cx="20" cy="20" r="10" fill={color} />
      <Circle opacity="0.2" cx="20" cy="20" r="20" fill={color} />
    </Svg>
  );
}

export default DetectionRippleIcon;
