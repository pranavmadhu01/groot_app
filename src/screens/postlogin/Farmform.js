/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {Logoborder} from '../../assets/images';
import Geolocation from '@react-native-community/geolocation';
const Farmform = () => {
  const [formdata, setFormData] = useState({
    phonenumber: '',
    email: '',
  });
  const getLocation = async () => {
    try {
      Geolocation.requestAuthorization();
      Geolocation.getCurrentPosition(res => {
        console.log(res);
      });
    } catch (err) {
      return false;
    }
  };
  return (
    <View style={styles.farmformWrapper}>
      <View style={{alignItems: 'center', gap: 15}}>
        <Image source={Logoborder} />
        <Text variant="headlineMedium" style={{fontWeight: '800'}}>
          Create Farm
        </Text>
      </View>
      <View>
        <TextInput
          mode="outlined"
          outlineColor="#fff"
          activeOutlineColor="#6EAF1F"
          placeholderTextColor="#808A75"
          placeholder="Enter farm name"
          value={formdata.phonenumber}
          onChangeText={text => setFormData({...formdata, phonenumber: text})}
          style={styles.textFieldStyle}
        />
        <TextInput
          mode="outlined"
          outlineColor="#fff"
          activeOutlineColor="#6EAF1F"
          placeholderTextColor="#808A75"
          placeholder="Enter location"
          value={formdata.email}
          onChangeText={text => setFormData({...formdata, email: text})}
          style={styles.textFieldStyle}
        />
        <Text
          variant="labelLarge"
          style={{textAlign: 'center', color: '#808A75'}}>
          or
        </Text>
        <Pressable onPress={getLocation} style={{alignItems: 'center'}}>
          <Text
            style={{color: '#6EAF1F', fontWeight: '900'}}
            variant="labelSmall">
            Get current location
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
export default Farmform;
const styles = StyleSheet.create({
  farmformWrapper: {
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
