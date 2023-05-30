import React, {useState, useRef, useEffect} from 'react';
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
  MailIcon,
  PhoneIcon,
  LockIcon,
  EyeIcon,
} from '../../components/icons';
import {FormTitleWrapper} from '../../components/elements';

const Login = ({navigation}) => {
  const [formdata, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
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

  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
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
            <FormTitleWrapper title={'Login'} isCompact={true} />
          ) : (
            <FormTitleWrapper title={'Login'} isCompact={false} />
          )}

          <KeyboardAwareScrollView
            enableAutomaticScroll={true}
            showsVerticalScrollIndicator={false}>
            <View style={styles.inputWrapper}>
              <View style={styles.groupWrapper}>
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
                <Text variant="labelLarge" style={styles.orStyle}>
                  or
                </Text>
                <View style={styles.textInputWrapper}>
                  <View style={styles.leftIconWrapper}>
                    <PhoneIcon width={20} height={20} />
                  </View>
                  <TextInput
                    mode="outlined"
                    keyboardType="phone-pad"
                    textContentType="telephoneNumber"
                    placeholder="Enter phone number"
                    value={formdata.phone}
                    onChangeText={text =>
                      setFormData({...formdata, phone: text})
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
                  returnKeyType="done"
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
          </KeyboardAwareScrollView>

          <View style={styles.bottomWrapper}>
            <CustomButton
              title="Continue"
              textColor="#fff"
              buttonColor="#6EAF1F"
              height={60}
              isNavigator={true}
              screenName={'Main Screen'}
            />
            <View style={styles.buttonTextWrapper}>
              <Text variant="labelMedium" style={styles.queryStyle}>
                Not registered yet?
              </Text>
              <Pressable onPress={() => navigation.navigate('Sign Up')}>
                <Text style={styles.queryLink} variant="labelMedium">
                  Sign Up
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
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
    paddingBottom: 60,
  },

  inputWrapper: {
    flex: 1,
    paddingBottom: 15,
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
  orStyle: {
    textAlign: 'center',
    color: '#808A75',
    fontSize: 16,
    fontFamily: 'Gilroy-Medium',
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
