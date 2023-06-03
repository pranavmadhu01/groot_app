import React, {useEffect, createContext, useState} from 'react';

import SplashScreen from 'react-native-splash-screen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomNav from './src/navigation/BottomNav';
import {LandingPage, Login, Signup} from './src/screens/prelogin';
import PreloginStack from './src/navigation/simple/Preloginstack';
import {Provider} from 'react-native-paper';

const Stack = createNativeStackNavigator();

export const LoginContext = createContext();
const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const hideSplashScreen = () => {
      SplashScreen.hide();
    };

    const timeout = setTimeout(hideSplashScreen, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <LoginContext.Provider value={{isLogin: isLogin, setIsLogin: setIsLogin}}>
      <Provider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="preloginnavigation"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="preloginnavigation" component={PreloginStack} />
            <Stack.Screen name="Main Screen" component={BottomNav} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </LoginContext.Provider>
  );
};
export default App;
