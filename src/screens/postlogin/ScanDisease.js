import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {ScanIcon, ArrowBackIcon, CamScanIcon} from '../../components/icons';
import {Leaves} from '../../components/logos';
import {useIsFocused} from '@react-navigation/native';
import {diseaseDetection} from '../../api';

const vw = Dimensions.get('window').width;

const ScanDisease = ({navigation}) => {
  const devices = useCameraDevices();
  const device = devices.back;

  const isFocused = useIsFocused();

  const camera = useRef(null);

  const [cameraClicked, setCameraClicked] = useState(false);

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    console.log(newCameraPermission);
  };

  if (device == null) {
    return <ActivityIndicator />;
  }

  const takePicture = async () => {
    if (camera != null) {
      setCameraClicked(true);
      const photo = await camera.current.takePhoto();
      const formData = new FormData();
      formData.append('image', {
        uri: 'file://' + photo.path,
        type: 'image/jpeg',
        name: photo.path.split('/')[photo.path.split('/').length - 1],
      });
      await diseaseDetection(formData)
        .then(response => {
          if (response.data.success) {
            navigation.navigate('DiseaseInfo', {
              scanData: response.data.data,
              image: response.data.data.uri,
            });
            setCameraClicked(false);
          }
        })
        .catch(error => {
          console.log(error);
          setCameraClicked(false);
        });
    }
  };

  return (
    <View style={styles.scanWrapper}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isFocused}
        photo
      />
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.goBackBtn}
          onPress={() => navigation.goBack()}>
          <ArrowBackIcon width={32} height={32} color="#fff" />
        </TouchableOpacity>

        <View style={styles.logoWrapper}>
          <Leaves width={36} height={36} />
          <Text style={styles.logoText}>Groot Scan</Text>
        </View>
      </View>

      <View style={styles.camScanIconWrapper}>
        <CamScanIcon width={vw} height={vw} />
      </View>

      <View style={styles.bottomWrapper}>
        <Text style={styles.bottomText}>
          {!cameraClicked
            ? 'Scan to search for diseases'
            : 'Processing your image'}
        </Text>

        <View style={styles.captureBtnWrapper}>
          {!cameraClicked ? (
            <TouchableOpacity
              style={styles.captureBtn}
              onPress={() => takePicture()}>
              <View style={styles.captureBtnIcon}>
                <ScanIcon width={24} height={24} fillColor={'#fff'} />
              </View>
            </TouchableOpacity>
          ) : (
            <ActivityIndicator color="green" />
          )}
        </View>
      </View>
    </View>
  );
};

export default ScanDisease;

const styles = StyleSheet.create({
  scanWrapper: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 30,
    justifyContent: 'space-between',
    color: '#fff',
  },

  topBar: {
    height: '5%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  logoWrapper: {
    flexDirection: 'row',
    gap: 5,
    alignSelf: 'center',
  },
  logoText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '900',
    paddingTop: 5,
  },

  goBackBtn: {
    position: 'absolute',
    top: 5,
    left: 0,
    alignItems: 'center',
  },
  goBackBtnWrapper: {
    alignItems: 'start',
    justifyContent: 'center',
  },

  camScanIconWrapper: {
    alignSelf: 'center',
  },

  bottomWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText: {
    color: 'white',
    fontSize: 20,
    marginVertical: 30,
  },
  captureBtnWrapper: {
    width: 75,
    height: 75,
    borderRadius: 40,
    borderColor: '#FFF',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  captureBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6EAF1F',
  },
  captureBtnIcon: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
