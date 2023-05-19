/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {Pressable, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import CustomButton from '../../components/CustomButton';
import Leaves from '../../components/logos/Leaves';
import {
  ArrowBackIcon,
  LockIcon,
  PersonIcon,
  EyeIcon,
} from '../../components/icons/Icons';

const SignUp = ({navigation}) => {
  const [formdata, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
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
            Login
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
                keyboardType="email-address"
                placeholder="Enter email address"
                value={formdata.name}
                onChangeText={text => setFormData({...formdata, email: text})}
                style={styles.textFieldStyle}
                outlineStyle={{borderRadius: 12, borderWidth: 3}}
                outlineColor="#fff"
                activeOutlineColor="#6EAF1F"
                placeholderTextColor="#808A75"
              />
            </View>
            <Text
              variant="labelLarge"
              style={{
                textAlign: 'center',
                color: '#808A75',
                fontSize: 16,
                fontFamily: 'Gilroy-Medium',
              }}>
              or
            </Text>
            <View style={styles.textInputWrapper}>
              <View style={styles.leftIconWrapper}>
                <PersonIcon width={20} height={20} />
              </View>
              <TextInput
                mode="outlined"
                keyboardType="phone-pad"
                placeholder="Enter phone number"
                value={formdata.name}
                onChangeText={text => setFormData({...formdata, phone: text})}
                style={styles.textFieldStyle}
                outlineStyle={{borderRadius: 12, borderWidth: 3}}
                outlineColor="#fff"
                activeOutlineColor="#6EAF1F"
                placeholderTextColor="#808A75"
              />
            </View>
          </View>
          <View style={styles.textInputWrapper}>
            <View style={styles.leftIconWrapper}>
              <LockIcon width={20} height={20} />
            </View>
            <TextInput
              mode="outlined"
              keyboardType={isPasswordVisible ? 'visible-password' : 'default'}
              placeholder="Enter password"
              secureTextEntry={!isPasswordVisible}
              textContentType="newPassword"
              value={formdata.password}
              onChangeText={text => setFormData({...formdata, password: text})}
              style={styles.textFieldStyle}
              outlineStyle={{borderRadius: 12, borderWidth: 3}}
              outlineColor="#fff"
              activeOutlineColor="#6EAF1F"
              placeholderTextColor="#808A75"
            />
            <TouchableOpacity
              style={styles.rightIconWrapper}
              onPress={handlePasswordVisibility}>
              <EyeIcon
                width={20}
                height={20}
                color={'#808A75'}
                isCrossed={!isPasswordVisible}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomWrapper}>
          <CustomButton
            title="Continue"
            textColor="#fff"
            buttonColor="#6EAF1F"
            height={60}
            isNavigator={true}
            screenName={'Main Screen'}
          />
          <View style={styles.buttontextWrapper}>
            <Text
              variant="labelMedium"
              style={{
                color: 'black',
                fontFamily: 'Gilroy-Medium',
              }}>
              Not registered yet?
            </Text>
            <Pressable onPress={() => navigation.navigate('Sign Up')}>
              <Text
                style={{
                  color: '#6EAF1F',
                  fontFamily: 'Gilroy-SemiBold',
                  marginLeft: 5,
                }}
                variant="labelMedium">
                Sign Up
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
    backgroundColor: '#fff',
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
