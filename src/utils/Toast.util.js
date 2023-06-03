import {ToastAndroid} from 'react-native';
// showWithGravity(message: string, duration: number, gravity: number);
const Toast = message => {
  return ToastAndroid.showWithGravity(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
  );
};
export {Toast};
