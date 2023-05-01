import {useNavigation} from '@react-navigation/native';
import {Button, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native/types';

const Custombutton = ({
  textColor,
  buttonColor,
  onPress,
  disabled,
  title,
  mode,
  isNavigator,
  screenName,
  data,
  width,
  height,
  borderRadius,
}) => {
  // const navigation = useNavigation();

  return (
    <Button
      textColor={textColor}
      buttonColor={buttonColor}
      // onPress={
      //   isNavigator ? () => navigation.navigate(screenName, data) : onPress
      // }
      disabled={disabled}
      mode={mode}
      style={{
        width: width,
        height: height,
        justifyContent: 'center',
        borderRadius: borderRadius || 10,
      }}>
      {title}
    </Button>
  );
};

export default Custombutton;
