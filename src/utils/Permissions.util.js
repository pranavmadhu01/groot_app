import {PermissionsAndroid} from 'react-native';
const requestAllPermissions = async () => {
  return await PermissionsAndroid.requestMultiple([
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    PermissionsAndroid.PERMISSIONS.CAMERA,
  ]);
};
export {requestAllPermissions};
