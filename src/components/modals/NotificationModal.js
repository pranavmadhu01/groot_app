import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const NotificationModal = () => {
  return (
    <TouchableOpacity disable={true} style={styles.notificationContainer}>
      <View style={styles.modal}>
        <Text style={styles.title}>Notifications</Text>
        <Text style={styles.message}>No new notifications</Text>
        <View style={styles.backgroundCard}></View>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationModal;

const styles = StyleSheet.create({
  notificationContainer: {
    flex: 1,
    alignItems: 'center',
  },
  modal: {
    position: 'absolute',
    height: vh - 240,
    width: vw - 60,
    padding: 30,
    borderRadius: 30,
    top: -330,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    color: '#000',
  },

  title: {
    position: 'absolute',
    fontSize: 24,
    textAlignVertical: 'top',
    top: 30,
    zIndex: 1,
  },
  message: {
    position: 'absolute',
    fontSize: 16,
    textAlignVertical: 'center',
    zIndex: 1,
  },
  backgroundCard: {
    height: vh - 240,
    width: vw - 60,
    padding: 30,
    borderRadius: 30,
    backgroundColor: '#6EAF1F',
    opacity: 0.9,
    zIndex: 0,
  },
});
