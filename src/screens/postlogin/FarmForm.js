/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';
import CustomButton from '../../components/CustomButton';

import {NotificationIcon, SettingsIcon} from '../../components/icons/Icons';
import Leaves from '../../components/logos/Leaves';

const FarmForm = () => {
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
    <View style={styles.farmFormContainer}>
      <View style={styles.topBar}>
        <View style={styles.logoWrapper}>
          <Leaves width={36} height={36} />
          <Text style={styles.logoText}>Groot</Text>
        </View>
        <View style={styles.topBarIconWrapper}>
          <NotificationIcon width={26} height={26} />
          <SettingsIcon width={20} height={20} />
        </View>
      </View>
      <View style={styles.farmFormWrapper}>
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
              value={formdata.type}
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
            value={formdata.location}
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
        <CustomButton
          title="Create Farm"
          borderRadius={30}
          mode="contained"
          buttonColor="#6EAF1F"
          textColor="#fff"
          height={60}
        />
      </View>
    </View>
  );
};
export default FarmForm;
const styles = StyleSheet.create({
  farmFormContainer: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 24,
    color: '#151810',
    backgroundColor: '#fff',
  },

  topBar: {
    height: '10%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  topBarIconWrapper: {
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    gap: 24,
    flex: 1,
  },
  logoWrapper: {
    flexDirection: 'row',
    gap: 5,
  },
  logoText: {
    fontSize: 24,
    color: '#375C0A',
    fontWeight: '900',
    paddingTop: 5,
  },

  farmFormWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
    gap: 30,
  },
  textFieldStyle: {
    backgroundColor: '#E2EFD2',
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
