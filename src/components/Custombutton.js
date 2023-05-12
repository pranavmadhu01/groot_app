/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useNavigation} from '@react-navigation/native';
import {Button, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';

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
  padding,
  alignSelf,
  margin,
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
        padding: padding,
        margin: margin,
        alignSelf: alignSelf,
        onPress: onPress,
      }}>
      {title}
    </Button>
  );
};

export default Custombutton;
