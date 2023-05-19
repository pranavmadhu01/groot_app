/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {Pressable, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import CustomButton from '../../components/CustomButton';
import Leaves from '../../components/logos/Leaves';
import {
  ArrowBackIcon,
  PersonIcon,
  MailIcon,
  PhoneIcon,
  LockIcon,
  EyeIcon,
} from '../../components/icons/Icons';

const SignUp = ({navigation}) => {
  const [formdata, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

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

        <View style={styles.inputWrapper}>
          <View style={styles.groupWrapper}>
            <View style={styles.textInputWrapper}>
              <View style={styles.leftIconWrapper}>
                <PersonIcon width={20} height={20} />
              </View>
              <TextInput
                mode="outlined"
                keyboardType="default"
                placeholder="Enter full name"
                value={formdata.name}
                textContentType="name"
                onChangeText={text => setFormData({...formdata, name: text})}
                style={styles.textFieldStyle}
                outlineStyle={{borderRadius: 12, borderWidth: 3}}
                outlineColor="#fff"
                activeOutlineColor="#6EAF1F"
                placeholderTextColor="#808A75"
              />
            </View>

            <View style={styles.textInputWrapper}>
              <View style={styles.leftIconWrapper}>
                <MailIcon width={20} height={20} />
              </View>
              <TextInput
                mode="outlined"
                keyboardType="email-address"
                placeholder="Enter email address"
                textContentType="emailAddress"
                value={formdata.email}
                onChangeText={text => setFormData({...formdata, email: text})}
                style={styles.textFieldStyle}
                outlineStyle={{borderRadius: 12, borderWidth: 3}}
                outlineColor="#fff"
                activeOutlineColor="#6EAF1F"
                placeholderTextColor="#808A75"
              />
            </View>

            <View style={{...styles.textInputWrapper, marginBottom: 15}}>
              <View style={styles.leftIconWrapper}>
                <PhoneIcon width={20} height={20} color={'black'} />
              </View>
              <TextInput
                mode="outlined"
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
                placeholder="Enter phone number"
                value={formdata.phone}
                onChangeText={text => setFormData({...formdata, phone: text})}
                style={styles.textFieldStyle}
                outlineStyle={{borderRadius: 12, borderWidth: 3}}
                outlineColor="#fff"
                activeOutlineColor="#6EAF1F"
                placeholderTextColor="#808A75"
              />
            </View>

            <View style={styles.textInputWrapper}>
              <View style={styles.leftIconWrapper}>
                <LockIcon width={20} height={20} />
              </View>
              <TextInput
                mode="outlined"
                keyboardType={isPasswordVisible ? "visible-password" : "default"}
                placeholder="Enter password"
                secureTextEntry={!isPasswordVisible}
                textContentType="newPassword"
                value={formdata.password}
                onChangeText={text =>
                  setFormData({...formdata, password: text})
                }
                style={styles.textFieldStyle}
                outlineStyle={{borderRadius: 12, borderWidth: 3}}
                outlineColor="#fff"
                activeOutlineColor="#6EAF1F"
                placeholderTextColor="#808A75"
              />
              <TouchableOpacity style={styles.rightIconWrapper} onPress={handlePasswordVisibility}>
                <EyeIcon
                  width={20}
                  height={20}
                  color={'#808A75'}
                  isCrossed={!isPasswordVisible}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.textInputWrapper}>
              <View style={styles.leftIconWrapper}>
                <LockIcon width={20} height={20} />
              </View>
              <TextInput
                mode="outlined"
                keyboardType={isConfirmPasswordVisible ? "visible-password" : "default"}
                placeholder="Confirm password"
                secureTextEntry={!isConfirmPasswordVisible}
                value={formdata.confirmPassword}
                onChangeText={text =>
                  setFormData({...formdata, confirmPassword: text})
                }
                style={styles.textFieldStyle}
                outlineStyle={{borderRadius: 12, borderWidth: 3}}
                outlineColor="#fff"
                activeOutlineColor="#6EAF1F"
                placeholderTextColor="#808A75"
              />
              <TouchableOpacity style={styles.rightIconWrapper} onPress={handleConfirmPasswordVisibility}>
                <EyeIcon
                  width={20}
                  height={20}
                  color={'#808A75'}
                  isCrossed={!isConfirmPasswordVisible}
                />
              </TouchableOpacity>
            </View>
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
                fontFamily: 'Gilroy-Medium',
              }}>
              Already registered?
            </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  color: '#6EAF1F',
                  fontFamily: 'Gilroy-SemiBold',
                  marginLeft: 5,
                }}
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
    paddingVertical: 75,
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
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    gap: 30,
  },

  topWrapper: {
    alignItems: 'center',
    gap: 15,
  },

  inputWrapper: {
    gap: 20,
  },
  leftIconWrapper: {
    position: 'absolute',
    left: 20,
    zIndex: 1,
  },
  textInputWrapper: {
    height: 64,
    justifyContent: 'center',
  },
  textFieldStyle: {
    backgroundColor: '#E2EFD2',
    height: 64,
    paddingLeft: 40,
  },
  rightIconWrapper: {
    position: 'absolute',
    right: 20,
    zIndex: 1,
  },
  groupWrapper: {
    gap: 10,
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
