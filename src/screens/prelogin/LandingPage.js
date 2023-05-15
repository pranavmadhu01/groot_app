import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {Text} from 'react-native-paper';
import {LandingPageBg} from '../../assets/images/images';
import Custombutton from '../../components/CustomButton';
import Leaves from '../../components/logos/Leaves';

const LandingPage = ({navigation}) => {
  return (
    <ImageBackground source={LandingPageBg} style={{flex: 1}}>
      <View style={styles.landingpagewrapper}>
        <View
          style={{
            alignItems: 'flex-end',
          }}>
          <Leaves width={60} height={60} hasBorder={true} />
        </View>
        <View
          style={{
            alignItems: 'flex-end',
          }}>
          <Text variant="headlineSmall" style={styles.textStyle}>
            Welcome to
          </Text>
          <Text
            variant="displaySmall"
            style={{...styles.textStyle, fontWeight: '900'}}>
            Groot
          </Text>
        </View>
        <View style={{gap: 20}}>
          <Custombutton
            title="Get Started"
            textColor="#fff"
            buttonColor="#6EAF1F"
            height={60}
            isNavigator={true}
            screenName={'Sign Up'}
          />
          <View style={styles.buttontextWrapper}>
            <Text
              variant="labelSmall"
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                color: '#E6EAE1',
              }}>
              Already registered?
            </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text
                style={{color: '#6EAF1F', fontWeight: '900'}}
                variant="labelSmall">
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
  landingpagewrapper: {
    paddingHorizontal: 24,
    paddingVertical: 56,
    gap: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  textStyle: {
    color: '#fff',
    fontWeight: '100',
    marginBottom: 10,
  },
  buttontextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 60,
  },
});
