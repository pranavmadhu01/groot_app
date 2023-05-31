import React, {useEffect, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';
import {CustomButton} from '../../components/buttons';
import {NotificationIcon, SettingsIcon} from '../../components/icons';
import {Leaves} from '../../components/logos';
import {getAllPlants} from '../../api';
import {Dropdown} from 'react-native-element-dropdown';
import CostEstimatorModal from '../../components/modals/CostEstimatorModal';

const vw = Dimensions.get('window').width;

const CostEstimatorForm = ({navigation}) => {
  const [formdata, setFormData] = useState({
    area: '',
    pH: '',
  });
  const [plants, setPlants] = useState([]);
  const [value, setValue] = useState('');
  const [showModal, setShowModal] = useState(false);
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
  useEffect(() => {
    getAllPlants()
      .then(response => {
        setPlants(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
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
        {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.farms}>
            <CustomButton
              buttonColor={'#fff'}
              textColor={'#000'}
              title={'Grape Farm'}
              padding={6}
              mode={'outlined'}
              borderRadius={50}
              alignSelf={'center'}
              margin={(0, 6, 0, 0)}
            />
            <CustomButton
              buttonColor={'#fff'}
              textColor={'#000'}
              title={'Grape Farm'}
              padding={6}
              mode={'outlined'}
              borderRadius={50}
              alignSelf={'center'}
            />
            <CustomButton
              buttonColor={'#fff'}
              textColor={'#000'}
              title={'Grape Farm'}
              padding={6}
              mode={'outlined'}
              borderRadius={50}
              alignSelf={'center'}
            />
            <CustomButton
              buttonColor={'#fff'}
              textColor={'#000'}
              title={'Grape Farm'}
              padding={6}
              mode={'outlined'}
              borderRadius={50}
              alignSelf={'center'}
            />
            <CustomButton
              buttonColor={'#6EAF1F'}
              textColor={'#000'}
              title={'+'}
              padding={0}
              mode={'outlined'}
              borderRadius={200}
              alignSelf={'center'}
            />
          </View>
        </ScrollView> */}
      </View>

      <CostEstimatorModal showModal={showModal} setShowModal={setShowModal} />

      <ScrollView contentContainerStyle={styles.costFormWrapper}>
        <View style={styles.costEstimatorTextWrapper}>
          <Text variant="headlineMedium" style={styles.titleText}>
            Cost Estimator
          </Text>
        </View>
        <View>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={plants.map(({name, _id}) => ({
              value: _id,
              label: name,
            }))}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
              setValue(item.value);
              console.log(item.value);
            }}
          />
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
        <CustomButton
          title="Calculate"
          borderRadius={30}
          mode="contained"
          buttonColor="#6EAF1F"
          textColor="#fff"
          height={60}
          onPress={() => setShowModal(true)}
        />
      </ScrollView>
    </View>
  );
};

export default CostEstimatorForm;

const styles = StyleSheet.create({
  dropdown: {
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    height: 64,
    backgroundColor: '#E2EFD2',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  costFormContainer: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    color: '#151810',
  },
  costFormWrapper: {
    // flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    gap: 30,
  },
  costEstimatorTextWrapper: {
    alignItems: 'center',
    gap: 15,
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
