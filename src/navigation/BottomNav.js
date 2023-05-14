import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet} from 'react-native';

import Home from '../screens/postlogin/Home';
import CostEstimatorForm from '../screens/postlogin/CostEstimatorForm';
import Farmform from '../screens/postlogin/Farmform';

import {
  HomeIcon,
  CalculatorIcon,
  AddIcon,
  TimelineIcon,
  ScanIcon,
} from '../components/icons/icons';

import NavbarLogo from '../components/logos/NavbarLogo';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <View style={styles.Container}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: styles.bottomNavWrapper,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <HomeIcon width={24} height={24} isFilled={focused} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Cost Estimator"
          component={CostEstimatorForm}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <CalculatorIcon width={24} height={24} isFilled={focused}/>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={Farmform}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <AddIcon width={32} height={32} isFilled={focused} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Timeline"
          component={TimelineIcon}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <TimelineIcon width={24} height={24} isFilled={focused}/>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Scan a Disease"
          component={ScanIcon}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <ScanIcon width={24} height={24} isFilled={focused}/>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
      <View style={styles.navbarLogoContainer}>
        <NavbarLogo width={60} height={60} />
      </View>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  bottomNavWrapper: {
    backgroundColor: 'rgba(110, 175, 31, 0.15)',
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    borderRadius: 15,
    height: 90,
  },
  navbarLogoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 100,
  },
});
