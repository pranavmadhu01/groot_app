import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomNav from './src/navigation/BottomNav';
import {LandingPage, Login, Signup} from './src/screens/prelogin';
import PreloginStack from './src/navigation/simple/Preloginstack';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    const hideSplashScreen = () => {
      SplashScreen.hide();
    };

    const timeout = setTimeout(hideSplashScreen, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="preloginnavigation"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="preloginnavigation" component={PreloginStack} />
        <Stack.Screen name="Main Screen" component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
