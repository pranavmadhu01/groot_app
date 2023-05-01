import {useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {Logoborder} from '../../asstes/images';
import Custombutton from '../../components/Custombutton';
const Signup = () => {
  const [formdata, setFormData] = useState({
    phonenumber: '',
    email: '',
    name: '',
  });
  return (
    <View style={styles.signupwrapper}>
      <View style={{alignItems: 'center', gap: 15}}>
        <Image source={Logoborder} />
        <Text variant="headlineMedium" style={{fontWeight: '800'}}>
          Sign Up
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
        <TextInput
          mode="outlined"
          outlineColor="#fff"
          activeOutlineColor="#6EAF1F"
          placeholderTextColor="#808A75"
          placeholder="Enter full name"
          value={formdata.name}
          onChangeText={text => setFormData({...formdata, name: text})}
          style={styles.textFieldStyle}
        />
      </View>
      <View style={{gap: 20}}>
        <Custombutton
          title="Create Account"
          borderRadius={30}
          mode="contained"
          buttonColor="#6EAF1F"
          textColor="#fff"
          height={60}
        />
        <View style={styles.buttontextWrapper}>
          <Text
            variant="labelSmall"
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
            }}>
            Already have an account?
          </Text>
          <Pressable>
            <Text
              style={{color: '#6EAF1F', fontWeight: '900'}}
              variant="labelSmall">
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default Signup;
const styles = StyleSheet.create({
  signupwrapper: {
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
