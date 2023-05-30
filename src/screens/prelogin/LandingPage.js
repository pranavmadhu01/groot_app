import React from 'react';
import {ImageBackground, Pressable, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {LandingPageBg} from '../../assets/images/images';
import {CustomButton} from '../../components/buttons';
import {Leaves} from '../../components/logos';

const LandingPage = ({navigation}) => {
  return (
    <ImageBackground source={LandingPageBg} style={styles.bgImage}>
      <View style={styles.landingPageWrapper}>
        <View style={styles.leavesLogoWrapper}>
          <Leaves width={60} height={60} hasBorder={true} />
        </View>
        <View style={styles.textWrapper}>
          <Text variant="headlineLarge" style={styles.welcomeTextStyle}>
            Welcome to
          </Text>
          <Text variant="displayMedium" style={styles.grootTextStyle}>
            Groot
          </Text>
        </View>
        <View style={styles.bottomWrapper}>
          <CustomButton
            title="Get Started"
            textColor="#fff"
            buttonColor="#6EAF1F"
            height={60}
            isNavigator={true}
            screenName={'Sign Up'}
          />
          <View style={styles.buttontextWrapper}>
            <Text variant="labelMedium" style={styles.queryStyle}>
              Already registered?
            </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={styles.queryLink} variant="labelMedium">
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
export default LandingPage;

const styles = StyleSheet.create({
  landingPageWrapper: {
    paddingHorizontal: 24,
    paddingVertical: 60,
    gap: 10,
    flex: 1,
    justifyContent: 'space-between',
  },

  bgImage: {flex: 1},
  leavesLogoWrapper: {alignItems: 'flex-end'},

  textWrapper: {
    position: 'relative',
    bottom: 90,
    alignItems: 'flex-end',
  },
  welcomeTextStyle: {
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'Gilroy-Light',
  },
  grootTextStyle: {
    color: '#fff',
    fontFamily: 'Gilroy-Bold',
    letterSpacing: 0.5,
  },

  bottomWrapper: {
    gap: 20,
  },
  buttontextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  queryStyle: {color: 'white', fontFamily: 'Gilroy-Medium'},
  queryLink: {
    color: '#6EAF1F',
    fontFamily: 'Gilroy-SemiBold',
    marginLeft: 5,
  },
});
