import React, {useState, useRef, useEffect, useContext} from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Text, TextInput} from 'react-native-paper';
import {CustomButton} from '../../components/buttons';
import {
  ArrowBackIcon,
  PersonIcon,
  MailIcon,
  PhoneIcon,
  LockIcon,
  EyeIcon,
} from '../../components/icons';
import {FormTitleWrapper} from '../../components/elements';
import {signup} from '../../api';
import {Toast} from '../../utils/Toast.util';
import {LoginContext} from '../../../App';

const SignUp = ({navigation}) => {
  const data = useContext(LoginContext);
  const [formdata, setFormData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    password: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
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

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };
  const handleSignup = () => {
    data.setLoading(true);
    if (formdata.password === confirmPassword) {
      signup(formdata)
        .then(response => {
          data.setLoading(false);
          navigation.navigate('Login');
          Toast(response.data.message);
        })
        .catch(error => {
          Toast(error.response.data.message);
          data.setLoading(false);
        });
    } else {
      Toast('password and confirm password dont match');
      data.setLoading(false);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.formContainer}>
        <TouchableOpacity
          style={styles.goBackBtn}
          onPress={() => navigation.navigate('Landing Page')}>
          <ArrowBackIcon width={32} height={32} color="black" />
        </TouchableOpacity>
        <View style={styles.formWrapper}>
          {isKeyboardVisible ? (
            <FormTitleWrapper title={'Sign Up'} isCompact={true} />
          ) : (
            <FormTitleWrapper title={'Sign Up'} isCompact={false} />
          )}

          <KeyboardAwareScrollView
            enableAutomaticScroll={true}
            showsVerticalScrollIndicator={false}>
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
                    autoCapitalize="words"
                    value={formdata.name}
                    textContentType="name"
                    onChangeText={text =>
                      setFormData({...formdata, name: text})
                    }
                    style={styles.textFieldStyle}
                    outlineStyle={styles.textInputOutlineStyle}
                    outlineColor="#fff"
                    activeOutlineColor="#6EAF1F"
                    placeholderTextColor="#808A75"
                    ref={nameRef}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      emailRef.current.focus();
                    }}
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
                    autoCapitalize="none"
                    value={formdata.email}
                    onChangeText={text =>
                      setFormData({...formdata, email: text})
                    }
                    style={styles.textFieldStyle}
                    outlineStyle={styles.textInputOutlineStyle}
                    outlineColor="#fff"
                    activeOutlineColor="#6EAF1F"
                    placeholderTextColor="#808A75"
                    ref={emailRef}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      phoneRef.current.focus();
                    }}
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
                    onChangeText={text =>
                      setFormData({...formdata, phonenumber: text})
                    }
                    style={styles.textFieldStyle}
                    outlineStyle={styles.textInputOutlineStyle}
                    outlineColor="#fff"
                    activeOutlineColor="#6EAF1F"
                    placeholderTextColor="#808A75"
                    ref={phoneRef}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      passwordRef.current.focus();
                    }}
                  />
                </View>
              </View>
              <View style={styles.textInputWrapper}>
                <View style={styles.leftIconWrapper}>
                  <LockIcon width={20} height={20} />
                </View>
                <TextInput
                  mode="outlined"
                  keyboardType={
                    isPasswordVisible ? 'visible-password' : 'default'
                  }
                  placeholder="Enter password"
                  secureTextEntry={!isPasswordVisible}
                  textContentType="newPassword"
                  value={formdata.password}
                  onChangeText={text =>
                    setFormData({...formdata, password: text})
                  }
                  style={styles.textFieldStyle}
                  outlineStyle={styles.textInputOutlineStyle}
                  outlineColor="#fff"
                  activeOutlineColor="#6EAF1F"
                  placeholderTextColor="#808A75"
                  ref={passwordRef}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    confirmPasswordRef.current.focus();
                  }}
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
              <View style={styles.textInputWrapper}>
                <View style={styles.leftIconWrapper}>
                  <LockIcon width={20} height={20} />
                </View>
                <TextInput
                  mode="outlined"
                  keyboardType={
                    isConfirmPasswordVisible ? 'visible-password' : 'default'
                  }
                  placeholder="Confirm password"
                  secureTextEntry={!isConfirmPasswordVisible}
                  error={!(confirmPassword === formdata.password)}
                  value={confirmPassword}
                  onChangeText={text => setConfirmPassword(text)}
                  style={styles.textFieldStyle}
                  outlineStyle={styles.textInputOutlineStyle}
                  outlineColor="#fff"
                  activeOutlineColor="#6EAF1F"
                  placeholderTextColor="#808A75"
                  ref={confirmPasswordRef}
                  returnKeyType="done"
                />
                <TouchableOpacity
                  style={styles.rightIconWrapper}
                  onPress={handleConfirmPasswordVisibility}>
                  <EyeIcon
                    width={20}
                    height={20}
                    color={'#808A75'}
                    isCrossed={!isConfirmPasswordVisible}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAwareScrollView>

          <View style={styles.bottomWrapper}>
            <CustomButton
              title="Register"
              borderRadius={30}
              textColor="#fff"
              buttonColor="#6EAF1F"
              height={60}
              isNavigator={false}
              onPress={() => handleSignup()}
              disabled={
                Object.values(formdata).includes(null) ||
                Object.values(formdata).includes('') ||
                Object.values(formdata).includes(NaN) ||
                formdata.password !== confirmPassword
              }
            />
            <View style={styles.buttonTextWrapper}>
              <Text variant="labelMedium" style={styles.queryStyle}>
                Already registered?
              </Text>
              <Pressable onPress={() => navigation.navigate('Login')}>
                <Text style={styles.queryLink} variant="labelMedium">
                  Login
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
  },

  topWrapper: {
    alignItems: 'center',
    gap: 15,
    paddingBottom: 30,
  },
  compactTopWrapper: {
    position: 'relative',
    bottom: 40,
    flexDirection: 'row',
    gap: 10,
    alignSelf: 'center',
    paddingBottom: 0,
  },

  inputWrapper: {
    flex: 1,
    paddingVertical: 15,
    gap: 5,
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

  textInputOutlineStyle: {borderRadius: 12, borderWidth: 3},

  rightIconWrapper: {
    position: 'absolute',
    right: 20,
    zIndex: 1,
  },
  groupWrapper: {
    gap: 5,
    paddingBottom: 15,
  },
  buttontextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 60,
  },

  bottomWrapper: {
    gap: 20,
  },
  buttonTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  queryStyle: {color: 'black', fontFamily: 'Gilroy-Medium'},
  queryLink: {
    color: '#6EAF1F',
    fontFamily: 'Gilroy-SemiBold',
    marginLeft: 5,
  },
});
