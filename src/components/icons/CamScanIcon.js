import * as React from 'react';
import {Svg, Path} from 'react-native-svg';

function CamScanIcon({width, height, color}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      width={width}
      height={height}
      viewBox="0 0 512 512">
      <Path
        d="M336 448h56a56 56 0 0056-56v-56M448 176v-56a56 56 0 00-56-56h-56M176 448h-56a56 56 0 01-56-56v-56M64 176v-56a56 56 0 0156-56h56"
        fill="none"
        stroke={color ? color : 'white'}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="48"
      />
    </Svg>
  );
}

export default CamScanIcon;
