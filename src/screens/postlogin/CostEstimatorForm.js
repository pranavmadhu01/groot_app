import {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';
import Custombutton from '../../components/Custombutton';

import {NotificationIcon, SettingsIcon} from '../../components/icons/icons';
import Leaves from '../../components/logos/Leaves';

const vw = Dimensions.get('window').width;

const CostEstimatorForm = ({navigation}) => {
  const [formdata, setFormData] = useState({
    area: '',
    pH: '',
  });

  const calculateCost = () => {
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

    // const getpH = async () => {
    //   try {
    //   }
    //   catch (err) {
    //     return false;
    //   }
    // };
  };

  return (
    <View style={styles.costFormContainer}>
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

      <View style={styles.farmBar}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.farms}>
            <Custombutton
              buttonColor={'#fff'}
              textColor={'#000'}
              title={'Grape Farm'}
              padding={6}
              mode={'outlined'}
              borderRadius={50}
              alignSelf={'center'}
              margin={(0, 6, 0, 0)}
            />
            <Custombutton
              buttonColor={'#fff'}
              textColor={'#000'}
              title={'Grape Farm'}
              padding={6}
              mode={'outlined'}
              borderRadius={50}
              alignSelf={'center'}
            />
            <Custombutton
              buttonColor={'#fff'}
              textColor={'#000'}
              title={'Grape Farm'}
              padding={6}
              mode={'outlined'}
              borderRadius={50}
              alignSelf={'center'}
            />
            <Custombutton
              buttonColor={'#fff'}
              textColor={'#000'}
              title={'Grape Farm'}
              padding={6}
              mode={'outlined'}
              borderRadius={50}
              alignSelf={'center'}
            />
            <Custombutton
              buttonColor={'#6EAF1F'}
              textColor={'#000'}
              title={'+'}
              padding={0}
              mode={'outlined'}
              borderRadius={200}
              alignSelf={'center'}
            />
          </View>
        </ScrollView>
      </View>

      <View style={styles.costFormWrapper}>
        <View style={{alignItems: 'center', gap: 15}}>
          <Text variant="headlineMedium" style={{fontWeight: '800'}}>
            Cost Estimator
          </Text>
        </View>
        <View>
          <TextInput
            mode="outlined"
            keyboardType="number-pad"
            placeholder="Enter the area of cultivation"
            value={formdata.area}
            onChangeText={text => setFormData({...formdata, area: text})}
            style={styles.textFieldStyle}
            outlineStyle={{borderRadius: 12, borderWidth: 3}}
            outlineColor="#fff"
            activeOutlineColor="#6EAF1F"
            placeholderTextColor="#808A75"
          />
          <TextInput
            mode="outlined"
            keyboardType="number-pad"
            placeholder="Enter the pH value of soil"
            value={formdata.pH}
            onChangeText={text => setFormData({...formdata, pH: text})}
            style={styles.textFieldStyle}
            outlineStyle={{borderRadius: 12}}
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
          <Pressable onPress={calculateCost} style={{alignItems: 'center'}}>
            <Text
              style={{color: '#6EAF1F', fontWeight: '900', fontSize: 13}}
              variant="labelSmall">
              Find pH value of soil
            </Text>
          </Pressable>
        </View>
        <Custombutton
          title="Calculate"
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

export default CostEstimatorForm;

const styles = StyleSheet.create({
  costFormContainer: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    color: '#151810',
  },
  costFormWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    gap: 30,
  },

  textFieldStyle: {
    backgroundColor: '#E2EFD2',
    justifyContent: 'center',
    height: 64,
    marginBottom: 20,
  },
  buttontextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 60,
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
    fontWeight: '900',
    paddingTop: 5,
    color: '#375C0A',
  },

  farmBar: {
    marginBottom: 16,
    width: vw,
    alignSelf: 'center',
  },

  farms: {
    paddingLeft: 24,
    flexDirection: 'row',
    gap: 6,
  },
});
