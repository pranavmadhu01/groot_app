import * as React from 'react';
import {Svg, Path} from 'react-native-svg';

function ArrowBackIcon({width, height, color}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      width={width}
      height={height}
      viewBox="0 0 512 512">
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
        d="M244 400L100 256l144-144M120 256h292"
      />
    </Svg>
  );
}

export default ArrowBackIcon;
