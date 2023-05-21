import * as React from 'react';
import {Svg, Path} from 'react-native-svg';

function SunWindIcon({width, height, color}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-sun-wind"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke={color || 'black'}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M14.468 10a4 4 0 1 0 -5.466 5.46" />
      <Path d="M2 12h1" />
      <Path d="M11 3v1" />
      <Path d="M11 20v1" />
      <Path d="M4.6 5.6l.7 .7" />
      <Path d="M17.4 5.6l-.7 .7" />
      <Path d="M5.3 17.7l-.7 .7" />
      <Path d="M15 13h5a2 2 0 1 0 0 -4" />
      <Path d="M12 16h5.714l.253 0a2 2 0 0 1 2.033 2a2 2 0 0 1 -2 2h-.286" />
    </Svg>
  );
}

export default SunWindIcon;
