import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';

import {NavigationContainer} from '@react-navigation/native';
import BottomNav from './src/navigation/BottomNav';

const App = () => {
  useEffect(() => {
    const hideSplashScreen = () => {
      SplashScreen.hide();
    };

    const timeout = setTimeout(hideSplashScreen, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <NavigationContainer>
      <BottomNav />
    </NavigationContainer>
  );
};
export default App;
