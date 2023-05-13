import * as React from 'react';
import Svg, {Path, G, Defs, ClipPath, Rect} from 'react-native-svg';

function SettingsIcon({width, height}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <G>
        <Path
          d="M10.0001 6.66666C9.34081 6.66666 8.69635 6.86215 8.14818 7.22842C7.60002 7.5947 7.17278 8.11529 6.92048 8.72438C6.66819 9.33347 6.60218 10.0037 6.7308 10.6503C6.85942 11.2969 7.17689 11.8908 7.64306 12.357C8.10924 12.8232 8.70318 13.1407 9.34978 13.2693C9.99639 13.3979 10.6666 13.3319 11.2757 13.0796C11.8848 12.8273 12.4054 12.4001 12.7716 11.8519C13.1379 11.3037 13.3334 10.6593 13.3334 9.99999C13.3334 9.11594 12.9822 8.26809 12.3571 7.64297C11.732 7.01785 10.8841 6.66666 10.0001 6.66666ZM10.0001 11.6667C9.67045 11.6667 9.34822 11.5689 9.07413 11.3858C8.80005 11.2026 8.58643 10.9423 8.46028 10.6378C8.33414 10.3333 8.30113 9.99814 8.36544 9.67484C8.42975 9.35154 8.58848 9.05457 8.82157 8.82148C9.05466 8.58839 9.35163 8.42966 9.67493 8.36535C9.99823 8.30104 10.3333 8.33404 10.6379 8.46019C10.9424 8.58634 11.2027 8.79996 11.3859 9.07404C11.569 9.34812 11.6668 9.67035 11.6668 9.99999C11.6668 10.442 11.4912 10.8659 11.1786 11.1785C10.866 11.4911 10.4421 11.6667 10.0001 11.6667Z"
          fill="#151810"
        />
        <Path
          d="M17.7449 11.5833L17.3749 11.37C17.5415 10.4637 17.5415 9.53463 17.3749 8.62833L17.7449 8.415C18.0294 8.25085 18.2789 8.03226 18.4789 7.77172C18.679 7.51118 18.8257 7.21378 18.9109 6.89651C18.996 6.57925 19.0178 6.24832 18.975 5.92263C18.9322 5.59694 18.8257 5.28286 18.6616 4.99833C18.4974 4.7138 18.2788 4.46439 18.0183 4.26434C17.7578 4.06428 17.4604 3.91751 17.1431 3.83239C16.8258 3.74726 16.4949 3.72547 16.1692 3.76824C15.8435 3.81101 15.5294 3.91751 15.2449 4.08167L14.8741 4.29583C14.1737 3.69743 13.3688 3.23354 12.4999 2.9275V2.5C12.4999 1.83696 12.2365 1.20107 11.7677 0.732233C11.2988 0.263392 10.663 0 9.99991 0C9.33687 0 8.70099 0.263392 8.23215 0.732233C7.76331 1.20107 7.49991 1.83696 7.49991 2.5V2.9275C6.63107 3.23464 5.82645 3.69967 5.12658 4.29917L4.75408 4.08333C4.17944 3.75181 3.49665 3.66214 2.8559 3.83405C2.21515 4.00596 1.66893 4.42536 1.33741 5C1.00589 5.57464 0.916224 6.25743 1.08813 6.89818C1.26004 7.53893 1.67944 8.08515 2.25408 8.41667L2.62408 8.63C2.45751 9.5363 2.45751 10.4654 2.62408 11.3717L2.25408 11.585C1.67944 11.9165 1.26004 12.4627 1.08813 13.1035C0.916224 13.7442 1.00589 14.427 1.33741 15.0017C1.66893 15.5763 2.21515 15.9957 2.8559 16.1676C3.49665 16.3395 4.17944 16.2499 4.75408 15.9183L5.12491 15.7042C5.82555 16.3027 6.63073 16.7666 7.49991 17.0725V17.5C7.49991 18.163 7.76331 18.7989 8.23215 19.2678C8.70099 19.7366 9.33687 20 9.99991 20C10.663 20 11.2988 19.7366 11.7677 19.2678C12.2365 18.7989 12.4999 18.163 12.4999 17.5V17.0725C13.3688 16.7654 14.1734 16.3003 14.8732 15.7008L15.2457 15.9158C15.8204 16.2474 16.5032 16.337 17.1439 16.1651C17.7847 15.9932 18.3309 15.5738 18.6624 14.9992C18.9939 14.4245 19.0836 13.7417 18.9117 13.101C18.7398 12.4602 18.3204 11.914 17.7457 11.5825L17.7449 11.5833ZM15.6216 8.43667C15.9038 9.45922 15.9038 10.5391 15.6216 11.5617C15.5723 11.7396 15.5835 11.9289 15.6535 12.0998C15.7235 12.2707 15.8483 12.4135 16.0082 12.5058L16.9116 13.0275C17.1031 13.138 17.2429 13.3201 17.3001 13.5336C17.3574 13.7472 17.3275 13.9747 17.217 14.1662C17.1065 14.3578 16.9244 14.4975 16.7109 14.5548C16.4973 14.6121 16.2698 14.5822 16.0782 14.4717L15.1732 13.9483C15.0132 13.8556 14.8268 13.8188 14.6435 13.8437C14.4601 13.8686 14.2903 13.9538 14.1607 14.0858C13.419 14.843 12.4846 15.3833 11.4582 15.6483C11.2791 15.6944 11.1204 15.7987 11.0071 15.9449C10.8938 16.0911 10.8323 16.2709 10.8324 16.4558V17.5C10.8324 17.721 10.7446 17.933 10.5883 18.0893C10.4321 18.2455 10.2201 18.3333 9.99908 18.3333C9.77807 18.3333 9.56611 18.2455 9.40982 18.0893C9.25354 17.933 9.16575 17.721 9.16575 17.5V16.4567C9.16584 16.2717 9.10439 16.092 8.99108 15.9458C8.87778 15.7996 8.71905 15.6952 8.53991 15.6492C7.51354 15.3831 6.57935 14.8416 5.83825 14.0833C5.70868 13.9513 5.53886 13.8661 5.35554 13.8412C5.17223 13.8163 4.98584 13.8531 4.82575 13.9458L3.92241 14.4683C3.8276 14.5239 3.72274 14.5602 3.61385 14.5751C3.50496 14.59 3.39421 14.5832 3.28796 14.5551C3.18171 14.527 3.08207 14.4782 2.99476 14.4114C2.90746 14.3446 2.83423 14.2613 2.77928 14.1661C2.72433 14.0709 2.68874 13.9658 2.67458 13.8568C2.66041 13.7479 2.66794 13.6372 2.69674 13.5311C2.72553 13.425 2.77502 13.3257 2.84236 13.2389C2.90969 13.152 2.99354 13.0793 3.08908 13.025L3.99241 12.5033C4.15237 12.411 4.27714 12.2682 4.34713 12.0973C4.41712 11.9264 4.42836 11.7371 4.37908 11.5592C4.09688 10.5366 4.09688 9.45672 4.37908 8.43417C4.42747 8.25657 4.41569 8.06795 4.34559 7.89774C4.27549 7.72754 4.15101 7.58534 3.99158 7.49333L3.08825 6.97167C2.89674 6.86116 2.75697 6.6791 2.6997 6.46555C2.64242 6.25199 2.67232 6.02442 2.78283 5.83292C2.89334 5.64141 3.07539 5.50164 3.28895 5.44437C3.50251 5.38709 3.73007 5.41699 3.92158 5.5275L4.82658 6.05083C4.98623 6.14376 5.17223 6.18101 5.35535 6.15672C5.53848 6.13244 5.70834 6.048 5.83825 5.91667C6.57999 5.15945 7.51444 4.61918 8.54075 4.35417C8.72044 4.30797 8.87958 4.20313 8.99294 4.05625C9.10631 3.90938 9.16741 3.72887 9.16658 3.54333V2.5C9.16658 2.27899 9.25438 2.06702 9.41066 1.91074C9.56694 1.75446 9.7789 1.66667 9.99991 1.66667C10.2209 1.66667 10.4329 1.75446 10.5892 1.91074C10.7454 2.06702 10.8332 2.27899 10.8332 2.5V3.54333C10.8332 3.7283 10.8946 3.90804 11.0079 4.05423C11.1212 4.20043 11.2799 4.30478 11.4591 4.35083C12.4858 4.61679 13.4202 5.15824 14.1616 5.91667C14.2911 6.04872 14.461 6.13391 14.6443 6.15881C14.8276 6.1837 15.014 6.14689 15.1741 6.05417L16.0774 5.53167C16.1722 5.47609 16.2771 5.43981 16.386 5.42492C16.4949 5.41003 16.6056 5.41683 16.7119 5.44492C16.8181 5.47301 16.9178 5.52184 17.0051 5.58859C17.0924 5.65535 17.1656 5.73872 17.2206 5.83389C17.2755 5.92907 17.3111 6.03417 17.3253 6.14316C17.3394 6.25214 17.3319 6.36285 17.3031 6.46891C17.2743 6.57497 17.2248 6.67429 17.1575 6.76114C17.0901 6.848 17.0063 6.92068 16.9107 6.975L16.0074 7.49667C15.8483 7.58892 15.7242 7.73123 15.6544 7.90141C15.5846 8.07159 15.573 8.26008 15.6216 8.4375V8.43667Z"
          fill="#151810"
        />
      </G>

      <Defs>
        <ClipPath id="clip0_103_274">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SettingsIcon;