import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomNav from './src/navigation/BottomNav';

import {LandingPage, Login, Signup} from './src/screens/prelogin/PreLogin';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    const hideSplashScreen = () => {
      SplashScreen.hide();
    };

    const timeout = setTimeout(hideSplashScreen, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Landing Page' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Landing Page" component={LandingPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign Up" component={Signup} />
        <Stack.Screen name="Main Screen" component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
