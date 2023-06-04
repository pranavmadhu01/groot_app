import * as React from 'react';
import {Svg, Path, G, ClipPath, Rect, Defs} from 'react-native-svg';

function CloseIcon({width, height, color, onPress}) {
  onPress = {onPress};
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0_103_289)">
        <Path
          d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C31.9904 7.16737 24.8326 0.0095625 16 0ZM21.3333 19.4493C21.8751 19.948 21.9101 20.7915 21.4114 21.3333C20.9128 21.8751 20.0693 21.9101 19.5274 21.4114C19.5003 21.3865 19.4743 21.3604 19.4493 21.3333L16 17.8853L12.552 21.3333C12.0223 21.8449 11.1783 21.8302 10.6667 21.3005C10.1677 20.7838 10.1677 19.9647 10.6667 19.448L14.1147 16L10.6667 12.552C10.1551 12.0223 10.1698 11.1783 10.6995 10.6667C11.2162 10.1677 12.0353 10.1677 12.552 10.6667L16 14.1147L19.4493 10.6667C19.948 10.1249 20.7915 10.0899 21.3333 10.5886C21.8751 11.0873 21.9101 11.9307 21.4114 12.4726C21.3865 12.4997 21.3604 12.5257 21.3333 12.5507L17.8853 16L21.3333 19.4493Z"
          fill={color ? color : '#151810'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_103_289">
          <Rect width="32" height="32" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CloseIcon;
