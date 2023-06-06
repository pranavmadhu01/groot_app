import * as React from 'react';
import {Svg, G, Defs, Circle, LinearGradient, Stop} from 'react-native-svg';

function TimelineIndicatorDotIcon({width, height, isHighlighted, style}) {
  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 12 12"
      fill="none">
      <Defs>
        <LinearGradient
          id="gradient"
          x1="1"
          y1="-1.28814"
          x2="13.3431"
          y2="1.8846"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0.354167" stopColor="#6EAF1F" />
          <Stop offset="1" stopColor="#375C0A" />
        </LinearGradient>
      </Defs>
      <G>
        {!isHighlighted ? (
          <Circle cx="6" cy="6" r="3" fill="#6EAF1F" />
        ) : (
          <G>
            <Circle cx="6" cy="6" r="4" fill="#6EAF1F" />
            <Circle cx="6" cy="6" r="3.5" stroke="#FFF" />
            <Circle cx="6" cy="6" r="4" stroke={'#FFF'} />
            <Circle cx="6" cy="6" r="5" stroke="url(#gradient)" />
          </G>
        )}
      </G>
    </Svg>
  );
}

export default TimelineIndicatorDotIcon;
