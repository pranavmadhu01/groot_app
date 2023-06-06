import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import {CloseIcon} from '../icons';

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const NotificationModal = ({isVisible, hideModal}) => {
  return (
    <Portal>
      <Modal visible={isVisible} dismissable={false}>
        <TouchableOpacity style={styles.closeBtnWrapper} onPress={hideModal}>
          <CloseIcon width={32} height={32} />
        </TouchableOpacity>
        <TouchableOpacity disable={true} style={styles.notificationContainer}>
          <View style={styles.modal}>
            <Text style={styles.title}>Notifications</Text>
            <Text style={styles.message}>No new notifications</Text>
            <View style={styles.backgroundCard}></View>
          </View>
        </TouchableOpacity>
      </Modal>
    </Portal>
  );
};

export default NotificationModal;

const styles = StyleSheet.create({
  closeBtnWrapper: {
    position: 'relative',
    alignSelf: 'flex-end',
    zIndex: 2,
    top: -264,
    right: 48,
  },

  notificationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    position: 'absolute',
    height: vh - 210,
    width: vw - 48,
    padding: 24,
    borderRadius: 30,
    top: -350,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    color: '#000',
  },

  title: {
    fontSize: 24,
    fontFamily: 'Gilroy-SemiBold',
    top: 90,
    zIndex: 1,
    color: 'black',
  },
  message: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Gilroy-Medium',
    zIndex: 1,
    top: 300,
  },
  backgroundCard: {
    height: vh - 210,
    width: vw - 48,
    borderRadius: 30,
    backgroundColor: '#6EAF1F',
    opacity: 1,
    zIndex: 0,
  },
});
