/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useNavigation} from '@react-navigation/native';
import {Button, Text} from 'react-native-paper';

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
  fontFamily,
}) => {
  const navigation = useNavigation();

  return (
    <Button
      buttonColor={buttonColor}
      onPress={
        isNavigator
          ? e => {
              e.preventDefault();
              navigation.navigate(screenName, data);
            }
          : onPress
      }
      disabled={disabled}
      mode={mode}
      style={{
        width: width,
        height: height || 60,
        borderRadius: borderRadius || 10,
        padding: padding || 0,
        margin: margin,
        alignSelf: alignSelf,
        display: 'flex',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#6EAF1F',
      }}
      textColor={textColor || 'white'}>
      {title}
    </Button>
  );
};

export default CustomButton;
