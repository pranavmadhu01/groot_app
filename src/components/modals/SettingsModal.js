import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import {LoginContext} from '../../../App';
import {removeFromAsyncStorage} from '../../utils/Asyncstorage.util';
import {Toast} from '../../utils/Toast.util';
import {LogoutIcon} from '../icons';

const SettingsModal = ({isVisible, hideModal}) => {
  const data = useContext(LoginContext);
  return (
    <Portal>
      <Modal visible={isVisible} onDismiss={hideModal} dismissable>
        <TouchableOpacity
          disable={true}
          style={styles.settingsContainer}
          onPress={() => {
            console.log('hello');
            removeFromAsyncStorage('@jwt_token');
            data.setIsLogin(false);
            Toast('see you again :)');
          }}>
          <View style={styles.modal}>
            <View style={styles.logout}>
              <LogoutIcon size={18} />
              <Text style={styles.title}>Logout</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </Portal>
  );
};

export default SettingsModal;

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    position: 'absolute',
    height: 56,
    width: 150,
    top: -340,
    right: 24,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    color: '#000',
    borderColor: 'red',
    borderWidth: 1.5,
  },
  logout: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    alignSelf: 'center',
  },

  title: {
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
    top: -2,
    color: 'black',
  },
});
