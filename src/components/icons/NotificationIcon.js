import * as React from 'react';
import {Svg, Path, Circle, ClipPath, Rect, Defs} from 'react-native-svg';

function NotificationIcon({width, height}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 26 26" fill="none">
      <Path
        d="M20.7958 17.385L19.2125 11.6883C18.7484 10.0195 17.7398 8.55358 16.3469 7.52373C14.9541 6.49388 13.257 5.95916 11.5254 6.00456C9.79375 6.04996 8.12699 6.67288 6.79004 7.7743C5.45308 8.87571 4.52266 10.3924 4.14665 12.0833L2.92082 17.5958C2.78541 18.205 2.78854 18.8367 2.92998 19.4444C3.07141 20.0522 3.34754 20.6204 3.73797 21.1071C4.1284 21.5939 4.62317 21.9867 5.18574 22.2566C5.74832 22.5266 6.36434 22.6667 6.98832 22.6667H7.91665C8.10791 23.6086 8.61893 24.4554 9.3631 25.0637C10.1073 25.6719 11.0389 26.0042 12 26.0042C12.9611 26.0042 13.8927 25.6719 14.6369 25.0637C15.381 24.4554 15.8921 23.6086 16.0833 22.6667H16.7817C17.424 22.6667 18.0576 22.5183 18.6331 22.2329C19.2086 21.9475 19.7103 21.5329 20.099 21.0216C20.4877 20.5102 20.753 19.9159 20.874 19.285C20.995 18.6542 20.9677 18.0039 20.7958 17.385ZM12 24.3333C11.4848 24.3312 10.9828 24.1699 10.5627 23.8716C10.1427 23.5733 9.82505 23.1524 9.65332 22.6667H14.3467C14.1749 23.1524 13.8573 23.5733 13.4372 23.8716C13.0172 24.1699 12.5152 24.3312 12 24.3333ZM18.7717 20.0125C18.5394 20.3206 18.2386 20.5702 17.893 20.7416C17.5474 20.9131 17.1666 21.0015 16.7808 21H6.98832C6.61397 20.9999 6.24442 20.9158 5.90694 20.7538C5.56945 20.5918 5.27266 20.3561 5.03845 20.0641C4.80425 19.7721 4.63862 19.4312 4.55379 19.0665C4.46895 18.7019 4.46709 18.3229 4.54832 17.9575L5.77332 12.4442C6.06861 11.116 6.79941 9.92468 7.84953 9.05955C8.89966 8.19442 10.2088 7.70515 11.569 7.66952C12.9291 7.63389 14.2621 8.05394 15.3561 8.8629C16.4501 9.67186 17.2422 10.8233 17.6067 12.1342L19.19 17.8308C19.2946 18.202 19.3113 18.5924 19.2387 18.9711C19.166 19.3498 19.0061 19.7064 18.7717 20.0125Z"
        fill="#151810"
      />

      <Circle cx="21" cy="3" r="3" fill="#151810" />
      <Defs>
        <ClipPath id="clip0_389_838">
          <Rect
            width="20"
            height="20"
            fill="white"
            transform="translate(2 6)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default NotificationIcon;