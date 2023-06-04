import React, {useEffect, createContext, useState} from 'react';

import SplashScreen from 'react-native-splash-screen';

import {NavigationContainer} from '@react-navigation/native';

import BottomNav from './src/navigation/BottomNav';
import PreloginStack from './src/navigation/simple/Preloginstack';
import {Provider} from 'react-native-paper';

export const LoginContext = createContext();
const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [farmId, setFarmId] = useState('');
  const [reload, setReload] = useState(false);
  const [homereload, setHomeReload] = useState(false);
  const [farmlatlng, setfarmlatlng] = useState({
    latitude: 0,
    longitude: 0,
    altitude: 0,
  });
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
        loading: loading,
        setLoading: setLoading,
        farmId: farmId,
        setFarmId: setFarmId,
        farmlatlng: farmlatlng,
        setfarmlatlng: setfarmlatlng,
        reload: reload,
        setReload: setReload,
        homereload: homereload,
        setHomeReload: setHomeReload,
      }}>
      <NavigationContainer>
        <Provider>
          {isLogin && token ? <BottomNav /> : <PreloginStack />}
        </Provider>
      </NavigationContainer>
    </LoginContext.Provider>
  );
};
export default App;
