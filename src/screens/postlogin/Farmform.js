/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import Leaves from '../../components/logos/Leaves';
import Geolocation from '@react-native-community/geolocation';
import Custombutton from '../../components/Custombutton';

const Farmform = () => {
  const [formdata, setFormData] = useState({
    name: '',
    type: '',
    location: '',
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
        <Leaves width={60} height={60} />
        <Text variant="headlineMedium" style={{fontWeight: '800'}}>
          Create Farm
        </Text>
      </View>
      <View>
        <View style={styles.groupWrapper}>
          <TextInput
            mode="outlined"
            keyboardType="default"
            autoFocus={true}
            placeholder="Enter farm name"
            value={formdata.name}
            onChangeText={text => setFormData({...formdata, name: text})}
            style={styles.textFieldStyle}
            outlineStyle={{borderRadius: 12, borderWidth: 3}}
            outlineColor="#fff"
            activeOutlineColor="#6EAF1F"
            placeholderTextColor="#808A75"
          />
          <TextInput
            mode="outlined"
            keyboardType="default"
            placeholder="Enter the type of crop"
            value={formdata.name}
            onChangeText={text => setFormData({...formdata, type: text})}
            style={styles.textFieldStyle}
            outlineStyle={{borderRadius: 12, borderWidth: 3}}
            outlineColor="#fff"
            activeOutlineColor="#6EAF1F"
            placeholderTextColor="#808A75"
          />
        </View>
        <TextInput
          mode="outlined"
          keyboardType="default"
          placeholder="Enter location"
          value={formdata.name}
          onChangeText={text => setFormData({...formdata, location: text})}
          style={styles.textFieldStyle}
          outlineStyle={{borderRadius: 12, borderWidth: 3}}
          outlineColor="#fff"
          activeOutlineColor="#6EAF1F"
          placeholderTextColor="#808A75"
        />
        <Text
          variant="labelLarge"
          style={{
            textAlign: 'center',
            color: '#808A75',
            marginVertical: 10,
            fontSize: 14,
          }}>
          or
        </Text>
        <Pressable onPress={getLocation} style={{alignItems: 'center'}}>
          <Text
            style={{color: '#6EAF1F', fontWeight: '900', fontSize: 13}}
            variant="labelSmall">
            Get current location
          </Text>
        </Pressable>
      </View>
      <Custombutton
          title="Create Farm"
          borderRadius={30}
          mode="contained"
          buttonColor="#6EAF1F"
          textColor="#fff"
          height={60}
        />
    </View>
  );
};
export default Farmform;
const styles = StyleSheet.create({
  farmformWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 120,
    paddingHorizontal: 24,
    gap: 30,
  },
  textFieldStyle: {
    backgroundColor: '#E2EFD2',
    justifyContent: 'center',
    height: 64,
  },
  groupWrapper: {
    marginBottom: 20,
  },
  buttontextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 60,
  },
});
