import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {Text} from 'react-native-paper';
import {Landingpagebg, Logoborder} from '../../assets/images';
import Custombutton from '../../components/Custombutton';
const Landingpage = () => {
  return (
    <ImageBackground source={Landingpagebg} style={{flex: 1}}>
      <View style={styles.landingpagewrapper}>
        <View
          style={{
            alignItems: 'flex-end',
          }}>
          <Image source={Logoborder} />
        </View>
        <View
          style={{
            alignItems: 'flex-end',
          }}>
          <Text variant="headlineSmall" style={styles.textStyle}>
            Welcome to
          </Text>
          <Text
            variant="headlineLarge"
            style={{...styles.textStyle, fontWeight: '900'}}>
            Groot
          </Text>
        </View>
        <View style={{gap: 20}}>
          <Custombutton
            title="Get Started"
            mode="contained"
            textColor="#fff"
            buttonColor="#6EAF1F"
            height={60}
          />
          <View style={styles.buttontextWrapper}>
            <Text
              variant="labelSmall"
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                color: '#E6EAE1',
              }}>
              Not registered yet?
            </Text>
            <Pressable>
              <Text
                style={{color: '#6EAF1F', fontWeight: '900'}}
                variant="labelSmall">
                Sign Up
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Landingpage;
const styles = StyleSheet.create({
  landingpagewrapper: {
    padding: 24,
    gap: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  textStyle: {
    color: '#fff',
    fontWeight: '100',
  },
  buttontextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 60,
  },
});
