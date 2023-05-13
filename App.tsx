import React from 'react';
import Addfarm from './src/screens/postlogin/Addfarm';
import Farmform from './src/screens/postlogin/Farmform';
import Landingpage from './src/screens/prelogin/Landingpage';
import Login from './src/screens/prelogin/Login';
import Opener from './src/screens/prelogin/Opener';
import Signup from './src/screens/prelogin/Signup';
import CostEstimatorForm from './src/screens/postlogin/CostEstimatorForm';
import DiseaseInfo from './src/screens/postlogin/DiseaseInfo';
import Home from './src/screens/postlogin/Home';
import {NavigationContainer} from '@react-navigation/native';
import BottomNav from './src/navigation/BottomNav';

const App = () => {
  return (
    <NavigationContainer>
      <BottomNav />
    </NavigationContainer>
  );
};
export default App;
