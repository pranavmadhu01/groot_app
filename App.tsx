import React, {useEffect, createContext, useState, useContext} from 'react';

import SplashScreen from 'react-native-splash-screen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomNav from './src/navigation/BottomNav';
import PreloginStack from './src/navigation/simple/Preloginstack';
import {Provider} from 'react-native-paper';

const Stack = createNativeStackNavigator();

export const LoginContext = createContext();
const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hideSplashScreen = () => {
      SplashScreen.hide();
    };

    const timeout = setTimeout(hideSplashScreen, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <LoginContext.Provider
      value={{
        isLogin: isLogin,
        setIsLogin: setIsLogin,
        token: token,
        setToken: setToken,
      }}>
      <Provider>
        <NavigationContainer>
          {isLogin && token ? (
            <BottomNav />
          ) : (
            <Stack.Navigator
              initialRouteName="preloginnavigation"
              screenOptions={{headerShown: false}}>
              <Stack.Screen
                name="preloginnavigation"
                component={PreloginStack}
              />
              <Stack.Screen name="Main Screen" component={BottomNav} />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </Provider>
    </LoginContext.Provider>
  );
};
export default App;
