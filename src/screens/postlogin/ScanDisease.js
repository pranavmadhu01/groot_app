import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {ScanIcon} from '../../components/icons/Icons';

const ScanDisease = ({navigation}) => {
  const devices = useCameraDevices();
  const device = devices.back;
  const camera = useRef(null);
  const [imageData, setImageData] = useState('');
  const [captureBtnClicked, setcaptureBtnClicked] = useState(false);

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
    console.log(newCameraPermission);
  };

  if (device == null) return <ActivityIndicator />;

  const takePicture = async () => {
    if (camera != null) {
      const photo = await camera.current.takePhoto();
      setImageData(photo.path);
      console.log(photo.path);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo
      />
      <View style={styles.captureBtnWrapper}>
        <TouchableOpacity
          style={styles.captureBtn}
          onPress={() => takePicture()}>
          <View style={styles.captureBtnIcon}>
            <ScanIcon width={30} height={30} />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.goBackBtn}
        onPress={() => navigation.navigate('Home')}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScanDisease;

const styles = StyleSheet.create({
  captureBtnWrapper: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: 'transparent',
    borderColor: '#FFF',
    borderWidth: 3,
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    bottom: 50,
  },
  captureBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFF',
    position: 'absolute',
    alignSelf: 'center',
  },
  captureBtnIcon: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
