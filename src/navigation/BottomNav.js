import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet} from 'react-native';

import {
  Home,
  CostEstimatorForm,
  FarmForm,
  Timeline,
  ScanDisease,
  DiseaseInfo,
} from '../screens/postlogin';

import {
  HomeIcon,
  CalculatorIcon,
  AddIcon,
  TimelineIcon,
  ScanIcon,
} from '../components/icons';

import {NavbarLogo} from '../components/logos';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomNavScreen = ({navigation}) => (
  <View style={styles.bottomNavContainer}>
    <View style={styles.Container}>
      <Tab.Navigator
        initialRouteName="homescreen"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: styles.bottomNavWrapper,
        }}>
        <Tab.Screen
          name="homescreen"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <HomeIcon width={24} height={24} isFilled={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="costestimatorscreen"
          component={CostEstimatorForm}
          options={{
            tabBarIcon: ({focused}) => (
              <CalculatorIcon width={24} height={24} isFilled={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="addfarmscreen"
          component={FarmForm}
          options={{
            tabBarIcon: ({focused}) => (
              <AddIcon width={32} height={32} isFilled={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="timelinescreen"
          component={Timeline}
          options={{
            tabBarIcon: ({focused}) => (
              <TimelineIcon width={24} height={24} isFilled={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="scandiseasescreen"
          component={Home}
          listeners={() => ({
            tabPress: e => {
              e.preventDefault();
              navigation.navigate('ScanDisease');
            },
          })}
          options={{
            tabBarIcon: ({focused}) => (
              <ScanIcon width={24} height={24} isFilled={focused} />
            ),
          }}
        />
      </Tab.Navigator>
      <View style={styles.navbarLogoContainer}>
        <NavbarLogo width={60} height={60} />
      </View>
    </View>
    <View style={styles.bottomNavBg} />
  </View>
);

const BottomNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomNavScreen" component={BottomNavScreen} />
      <Stack.Screen name="ScanDisease" component={ScanDisease} />
      <Stack.Screen name="DiseaseInfo" component={DiseaseInfo} />
    </Stack.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  Container: {flex: 1},
  bottomNavWrapper: {
    backgroundColor: 'rgba(110, 175, 31, 0.3)',
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    borderRadius: 15,
    height: 90,
  },
  navbarLogoContainer: {position: 'absolute', alignSelf: 'center', bottom: 90},
  bottomNavContainer: {flex: 1},
  bottomNavBg: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 1,
    borderRadius: 15,
    height: 90,
    zIndex: -1,
  },
});
