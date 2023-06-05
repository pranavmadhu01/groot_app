import React, {useContext, useState} from 'react';
import {Pressable, StyleSheet, View, Animated} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';
import {CustomButton} from '../../components/buttons';

import {NotificationIcon, SettingsIcon} from '../../components/icons';
import {Leaves} from '../../components/logos';
import {FormTitleWrapper} from '../../components/elements';
import {Toast} from '../../utils/Toast.util';
import {LoginContext} from '../../../App';
import {addFarm} from '../../api';
const FarmForm = ({navigation}) => {
  const data = useContext(LoginContext);
  const [formdata, setFormData] = useState({
    name: '',
    overall_area: null,
    locationvauge: {
      latitude: null,
      longitude: null,
      altitude: null,
    },
  });
  const getLocation = async () => {
    Geolocation.setRNConfiguration({locationProvider: 'android'});
    try {
      Geolocation.requestAuthorization();
      Geolocation.getCurrentPosition(
        success => {
          setFormData({
            ...formdata,
            locationvauge: {
              latitude: success.coords.latitude,
              longitude: success.coords.longitude,
              altitude: success.coords.altitude,
            },
          });
          Toast('Location captured');
        },
        error => {
          Toast('Check your location permission once again and try');
        },
        {enableHighAccuracy: true},
      );
    } catch (err) {
      return false;
    }
  };
  const handleAddFarm = () => {
    data.setLoading(true);
    addFarm(formdata, data.token)
      .then(response => {
        Toast(response.data.data.message);
        data.setLoading(false);
        if (data.isLogin) {
          // data.setReload(!data.reload);
          data.setHomeReload(!data.homereload);
          navigation.goBack();
        } else {
          data.setIsLogin(true);
        }
      })
      .catch(error => {
        data.setLoading(false);
        Toast(error.response.data.message);
      });
  };
  return (
    <View style={styles.farmFormContainer}>
      {data.isLogin && (
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
      )}
      <View style={styles.farmFormWrapper}>
        <FormTitleWrapper title={'Create Farm'} isCompact={false} />

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
              keyboardType="number-pad"
              placeholder="Enter the full area of the farm"
              value={formdata.overall_area && formdata.overall_area.toString()}
              onChangeText={text =>
                setFormData({...formdata, overall_area: parseFloat(text)})
              }
              style={styles.textFieldStyle}
              outlineStyle={{borderRadius: 12, borderWidth: 3}}
              outlineColor="#fff"
              activeOutlineColor="#6EAF1F"
              placeholderTextColor="#808A75"
            />
          </View>
          {/* <TextInput
            disabled={true}
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
              color: 'indianred',
              marginVertical: 10,
              fontSize: 14,
            }}>
            <Icon name="exclamation-triangle" size={30} color="#900" />
            Enter location functionality coming soon..
          </Text> */}
          {/* <Text
            variant="labelLarge"
            style={{
              textAlign: 'center',
              color: '#808A75',
              marginVertical: 10,
              fontSize: 14,
            }}>
            or
          </Text> */}
          <Pressable onPress={getLocation} style={{alignItems: 'center'}}>
            <Text
              style={{
                color: Object.values(formdata.locationvauge).includes(null)
                  ? 'red'
                  : '#6EAF1F',
                fontWeight: '900',
                fontSize: 13,
              }}
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
          isNavigator={false}
          onPress={() => handleAddFarm()}
          disabled={
            Object.values(formdata).includes(null) ||
            Object.values(formdata).includes('') ||
            Object.values(formdata.locationvauge).includes(null)
          }
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
