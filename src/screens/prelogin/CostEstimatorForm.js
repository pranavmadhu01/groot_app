/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';
import Custombutton from '../../components/Custombutton';

const CostEstimatorForm = () => {
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
    <View style={styles.costFormWrapper}>
      <View style={{alignItems: 'center', gap: 15}}>
        <Text variant="headlineMedium" style={{fontWeight: '800'}}>
          Cost Estimator
        </Text>
      </View>
      <View>
        <TextInput
          mode="outlined"
          outlineColor="#fff"
          activeOutlineColor="#6EAF1F"
          placeholderTextColor="#808A75"
          placeholder="Enter the area of cultivation"
          value={formdata.area}
          onChangeText={text => setFormData({...formdata, area: text})}
          style={styles.textFieldStyle}
        />
        <TextInput
          mode="outlined"
          outlineColor="#fff"
          activeOutlineColor="#6EAF1F"
          placeholderTextColor="#808A75"
          placeholder="Enter the pH value of soil"
          value={formdata.pH}
          onChangeText={text => setFormData({...formdata, pH: text})}
          style={styles.textFieldStyle}
        />
        <Text
          variant="labelLarge"
          style={{textAlign: 'center', color: '#808A75', marginVertical: 10}}>
          or
        </Text>
        <Pressable onPress={calculateCost} style={{alignItems: 'center'}}>
          <Text
            style={{color: '#6EAF1F', fontWeight: '900'}}
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
  );
};

export default CostEstimatorForm;

const styles = StyleSheet.create({
  costFormWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    padding: (60, 24),
    justifyContent: 'space-evenly',
  },

  textFieldStyle: {
    backgroundColor: '#E2EFD2',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttontextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 60,
  },
});
