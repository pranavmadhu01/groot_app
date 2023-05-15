/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import Leaves from '../../components/logos/Leaves';
import Custombutton from '../../components/CustomButton';

const Login = ({navigation}) => {
  const [formdata, setFormData] = useState({
    phonenumber: '',
    email: '',
  });
  return (
    <View style={styles.loginwrapper}>
      <View style={{alignItems: 'center', gap: 15}}>
        <Leaves width={36} height={36} />
        <Text variant="headlineMedium" style={{fontWeight: '800'}}>
          Login
        </Text>
      </View>
      <View>
        <TextInput
          mode="outlined"
          outlineColor="#fff"
          activeOutlineColor="#6EAF1F"
          placeholderTextColor="#808A75"
          placeholder="Enter mobile number"
          value={formdata.phonenumber}
          onChangeText={text => setFormData({...formdata, phonenumber: text})}
          style={styles.textFieldStyle}
        />
        <Text
          variant="labelLarge"
          style={{textAlign: 'center', color: '#808A75'}}>
          or
        </Text>
        <TextInput
          mode="outlined"
          outlineColor="#fff"
          activeOutlineColor="#6EAF1F"
          placeholderTextColor="#808A75"
          placeholder="Enter email adress"
          value={formdata.email}
          onChangeText={text => setFormData({...formdata, email: text})}
          style={styles.textFieldStyle}
        />
      </View>
      <View style={{gap: 20}}>
        <Custombutton
          title="Continue"
          borderRadius={30}
          mode="contained"
          buttonColor="#6EAF1F"
          textColor="#fff"
          height={60}
          isNavigator={true}
          screenName={'Main Screen'}
        />
        <View style={styles.buttontextWrapper}>
          <Text
            variant="labelSmall"
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
            }}>
            Not registered yet?
          </Text>
          <Pressable onPress={() => navigation.navigate('Sign Up')}>
            <Text
              style={{color: '#6EAF1F', fontWeight: '900'}}
              variant="labelSmall">
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  loginwrapper: {
    flex: 1,
    backgroundColor: '#fff',
    padding: (60, 24),
    justifyContent: 'space-evenly',
  },
  textFieldStyle: {
    backgroundColor: '#E2EFD2',
    justifyContent: 'center',
  },
  buttontextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 60,
  },
});
