import axios from 'axios';
import {ActionSheetIOS} from 'react-native/types';
const url = 'http://192.168.18.22:8000';
const diseaseDetectionUrl = `${url}/detect`;
const plantUrl = `${url}/plant`;
const fertilizerUrl = `${url}/fertilizer`;
const authUrl = `${url}/auth`;
const userUrl = `${url}/user`;
const farmUrl = `${url}/farm`;

//auth apis
const loginWithFarmCheck = async data => {
  return await axios.post(`${authUrl}/loginwithfarmcheck`, data);
};
const signup = async data => {
  return await axios.post(`${authUrl}/register`, data);
};
export {loginWithFarmCheck, signup};
//user apis
//farm apis
const getFarmsByUser = async token => {
  return await axios.get(`${farmUrl}/user`, {
    headers: {Authorization: 'Bearer ' + token},
  });
};
const addFarm = async (data, token) => {
  return await axios.post(`${farmUrl}/addfarm`, data, {
    headers: {Authorization: 'Bearer ' + token},
  });
};
export {getFarmsByUser, addFarm};
//disease detection
const diseaseDetection = async data => {
  return await axios.post(diseaseDetectionUrl, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
export {diseaseDetection};
//plants
const getAllPlants = async () => {
  return await axios.get(plantUrl);
};
export {getAllPlants};
//fertilizers
const getAllFertilizers = async () => {
  return await axios.get(fertilizerUrl);
};
export {getAllFertilizers};
//timeline
