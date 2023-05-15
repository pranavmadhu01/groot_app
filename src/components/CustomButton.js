/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useNavigation} from '@react-navigation/native';
import {Button, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const CustomButton = ({
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
  fontSize,
  fontWeight,
}) => {
  const navigation = useNavigation();

  return (
    <Button
      textColor={textColor}
      buttonColor={buttonColor}
      onPress={
        isNavigator ? () => navigation.navigate(screenName, data) : onPress
      }
      disabled={disabled}
      mode={mode}
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius || 10,
        padding: padding,
        margin: margin,
        alignSelf: alignSelf,
        justifyContent: 'center',
        fontSize: fontSize,
        fontWeight: fontWeight,
      }}>
      {title}
    </Button>
  );
};

export default CustomButton;
