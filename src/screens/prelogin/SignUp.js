/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {Pressable, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import CustomButton from '../../components/CustomButton';
import Leaves from '../../components/logos/Leaves';
import {ArrowBackIcon} from '../../components/icons/Icons';

const SignUp = ({navigation}) => {
  const [formdata, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <View style={styles.formContainer}>
      <TouchableOpacity
        style={styles.goBackBtn}
        onPress={() => navigation.navigate('Landing Page')}>
        <ArrowBackIcon width={32} height={32} color="black" />
      </TouchableOpacity>
      <View style={styles.formWrapper}>
        <View style={styles.topWrapper}>
          <Leaves width={60} height={60} />
          <Text
            variant="headlineMedium"
            style={{fontFamily: 'Gilroy-SemiBold'}}>
            Sign Up
          </Text>
        </View>
        <View>
          <View style={styles.groupWrapper}>
            <TextInput
              mode="outlined"
              keyboardType="default"
              placeholder="Enter name"
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
              placeholder="Enter email address"
              value={formdata.type}
              onChangeText={text => setFormData({...formdata, email: text})}
              style={styles.textFieldStyle}
              outlineStyle={{borderRadius: 12, borderWidth: 3}}
              outlineColor="#fff"
              activeOutlineColor="#6EAF1F"
              placeholderTextColor="#808A75"
            />
            <TextInput
              mode="outlined"
              keyboardType="default"
              placeholder="Enter phone number"
              value={formdata.type}
              onChangeText={text => setFormData({...formdata, phone: text})}
              style={styles.textFieldStyle}
              outlineStyle={{borderRadius: 12, borderWidth: 3}}
              outlineColor="#fff"
              activeOutlineColor="#6EAF1F"
              placeholderTextColor="#808A75"
            />
          </View>
        </View>

        <View style={styles.bottomWrapper}>
          <CustomButton
            title="Register"
            textColor="#fff"
            buttonColor="#6EAF1F"
            height={60}
            isNavigator={true}
            screenName={'Login'}
          />
          <View style={styles.buttontextWrapper}>
            <Text
              variant="labelMedium"
              style={{
                color: 'black',
              }}>
              Already registered?
            </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text
                style={{color: '#6EAF1F', fontWeight: '900', marginLeft: 5}}
                variant="labelMedium">
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingVertical: 120,
    paddingHorizontal: 24,
    color: '#151810',
    backgroundColor: '#fff',
  },

  goBackBtn: {
    position: 'absolute',
    top: 35,
    left: 24,
    alignItems: 'center',
  },

  formWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingTop: 24,
    gap: 30,
  },

  topWrapper: {
    alignItems: 'center',
    gap: 15,
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

  bottomWrapper: {
    gap: 20,
  },
  buttontextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
