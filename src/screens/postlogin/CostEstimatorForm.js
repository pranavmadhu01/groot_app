import React, {useContext, useEffect, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Keyboard,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Text, TextInput} from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';
import {CustomButton} from '../../components/buttons';
import {NotificationIcon, SettingsIcon} from '../../components/icons';
import {Leaves} from '../../components/logos';
import {getAllFertilizers, getAllPlants, getCostEstimator} from '../../api';
import {Dropdown} from 'react-native-element-dropdown';
import CostEstimatorModal from '../../components/modals/CostEstimatorModal';
import {Toast} from '../../utils/Toast.util';
import Loadingcomponent from '../../components/Loadingcomponent/Loadingcomponent';
import {LoginContext} from '../../../App';

const vw = Dimensions.get('window').width;

const CostEstimatorForm = ({navigation}) => {
  const data = useContext(LoginContext);
  const [formdata, setFormData] = useState({
    plant_id: '',
    area: null,
    pH: null,
  });

  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true);
      },
    );
    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false);
      },
    );
    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  const [plants, setPlants] = useState([]);
  const [fertilizers, setFertilizers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [estimatordata, setEstimatorData] = useState({});

  const handleCalculate = () => {
    data.setLoading(true);
    getCostEstimator(data.token, formdata)
      .then(response => {
        setEstimatorData(response.data.data);
        setShowModal(true);
        data.setLoading(false);
      })
      .catch(error => {
        Toast(error.response.data.message);
        data.setLoading(false);
      });
  };

  useEffect(() => {
    data.setLoading(true);
    Promise.all([getAllPlants(), getAllFertilizers()])
      .then(response => {
        setPlants(response[0].data.data);
        setFertilizers(response[1].data.data);
        data.setLoading(false);
      })
      .catch(error => {
        console.log(error);
        data.setLoading(false);
      });
  }, []);
  if (data.loading) {
    return <Loadingcomponent />;
  } else {
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

        {showModal && (
          <CostEstimatorModal
            showModal={showModal}
            setShowModal={setShowModal}
            plant={plants.filter(plant => plant._id === formdata.plant_id)[0]}
            fertilizers={fertilizers}
            estimatordata={estimatordata}
            area={formdata.area}
          />
        )}

        <ScrollView contentContainerStyle={styles.costFormWrapper}>
          <View style={styles.costEstimatorTextWrapper}>
            <Text variant="headlineLarge" style={styles.titleText}>
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
              placeholder="Select crop"
              searchPlaceholder="Search crop"
              value={formdata.plant_id}
              onChange={item => {
                setFormData({...formdata, plant_id: item.value});
              }}
            />
            <TextInput
              mode="outlined"
              keyboardType="number-pad"
              placeholder="Enter the area of cultivation"
              value={formdata.area && formdata.area.toString()}
              onChangeText={text =>
                setFormData({...formdata, area: parseFloat(text)})
              }
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
              value={formdata.pH && formdata.pH.toString()}
              onChangeText={text =>
                setFormData({...formdata, pH: parseFloat(text)})
              }
              style={styles.textFieldStyle}
              outlineStyle={{borderRadius: 12}}
              outlineColor="#fff"
              activeOutlineColor="#6EAF1F"
              placeholderTextColor="#808A75"
            />
            {/* TODO: Fetching pH value of that location's soil */}
            {/* <Text
              variant="labelLarge"
              style={{
                textAlign: 'center',
                color: '#808A75',
                marginVertical: 10,
                fontSize: 14,
              }}>
              or
            </Text>
            <Pressable
              onPress={() => console.log('you pressed me')}
              style={{alignItems: 'center'}}>
              <Text
                style={{color: '#6EAF1F', fontWeight: '900', fontSize: 13}}
                variant="labelSmall">
                Find pH value of soil
              </Text>
            </Pressable> */}
          </View>
          <CustomButton
            title="Calculate"
            buttonColor="#6EAF1F"
            textColor="#fff"
            height={60}
            onPress={() => handleCalculate()}
            disabled={
              Object.values(formdata).includes(null) ||
              Object.values(formdata).includes('') ||
              Object.values(formdata).includes(NaN)
            }
          />
        </ScrollView>
      </View>
    );
  }
};

export default CostEstimatorForm;

const styles = StyleSheet.create({
  dropdown: {
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    height: 64,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#6EAF1F',
    borderRadius: 12,
    padding: 24,
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
    color: '#000',
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: 'Gilroy-Medium',
    color: '#000',
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: '#000',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 12,
  },
  costFormContainer: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    color: '#151810',
  },
  costFormWrapper: {
    backgroundColor: '#fff',
    paddingTop: 30,
    gap: 30,
  },
  costEstimatorTextWrapper: {
    alignItems: 'center',
    gap: 15,
  },
  titleText: {
    fontFamily: 'Gilroy-SemiBold',
  },

  textFieldStyle: {
    backgroundColor: '#E2EFD2',
    justifyContent: 'center',
    height: 64,
    marginBottom: 20,
    paddingHorizontal: 10,
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
