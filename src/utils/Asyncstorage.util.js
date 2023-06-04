import AsyncStorage from '@react-native-async-storage/async-storage';
import {Toast} from './Toast.util';
const addToAsyncStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    Toast('error while saving token , login once more');
  }
};
const retriveFromAsyncStorage = async key => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    Toast('error while getting token , try again later');
  }
};
export {addToAsyncStorage, retriveFromAsyncStorage};
