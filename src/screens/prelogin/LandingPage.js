import React, {useEffect, useContext} from 'react';
import {ImageBackground, Pressable, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {LoginContext} from '../../../App';
import {getFarmsByUser} from '../../api';
import {LandingPageBg} from '../../assets/images/images';
import {CustomButton} from '../../components/buttons';
import Loadingcomponent from '../../components/Loadingcomponent/Loadingcomponent';
import {Leaves} from '../../components/logos';
import {retriveFromAsyncStorage} from '../../utils/Asyncstorage.util';
import {requestAllPermissions} from '../../utils/Permissions.util';
import {Toast} from '../../utils/Toast.util';
const LandingPage = ({navigation}) => {
  const data = useContext(LoginContext);
  useEffect(() => {
    requestAllPermissions().then(response => {
      data.setLoading(true);
      if (
        Object.values(response).includes('denied') ||
        Object.values(response).includes('never_ask_again')
      ) {
        data.setLoading(false);
        Toast(
          'Please accept all permissions befor login to the app or else some features may not be available',
        );
      } else {
        data.setLoading(true);
        retriveFromAsyncStorage('@jwt_token').then(token => {
          if (token) {
            data.setToken(token);
            getFarmsByUser(token)
              .then(response => {
                if (response.data.data.isFarmPresent) {
                  data.setToken(token);
                  data.setIsLogin(true);
                  data.setLoading(false);
                } else {
                  Toast('Add a farm to continue');
                  navigation.navigate('farmadd');
                  data.setLoading(false);
                }
              })
              .catch(error => {
                console.log('Error =>', error);
                data.setLoading(false);
              });
          } else {
            Toast('Login or signup to continue');
            data.setLoading(false);
          }
        });
      }
    });
  }, []);
  if (data.loading) {
    return <Loadingcomponent />;
  } else {
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
              width={'100%'}
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
  }
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
