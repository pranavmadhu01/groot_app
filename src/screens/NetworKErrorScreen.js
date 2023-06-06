import {Animated, Easing, View} from 'react-native';
import {Text} from 'react-native-paper';
import {NavbarLogo} from '../components/logos';
const NetworkErrorScreen = () => {
  spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.sequence([
      Animated.delay(1000),
      Animated.timing(this.spinValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]),
  ).start();
  const spin = this.spinValue.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ['0deg', '-20deg', '0deg', '20deg', '0deg'],
  });
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Animated.View style={{transform: [{rotate: spin}]}}>
        <NavbarLogo width={60} height={60} />
      </Animated.View>
      <Text style={{fontFamily: 'Gilroy-Medium'}}>No internet :(</Text>
    </View>
  );
};
export default NetworkErrorScreen;
