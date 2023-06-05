import axios from 'axios';
const url = 'http://192.168.18.22:8000';
// 192.168.0.169
// http://192.168.18.22:8000
// 192.168.1.110
const diseaseDetectionUrl = `${url}/detect`;
const plantUrl = `${url}/plant`;
const fertilizerUrl = `${url}/fertilizer`;
const authUrl = `${url}/auth`;
const userUrl = `${url}/user`;
const farmUrl = `${url}/farm`;
const estimatorUrl = `${url}/estimate`;
const userTimelineUrl = `${url}/usertimeline`;

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
const getFarmDataByUserId = async token => {
  return await axios.get(`${farmUrl}/user/farmdata`, {
    headers: {Authorization: 'Bearer ' + token},
  });
};
const addFarm = async (data, token) => {
  return await axios.post(`${farmUrl}/addfarm`, data, {
    headers: {Authorization: 'Bearer ' + token},
  });
};
const getFarmWeather = async (token, data) => {
  return await axios.post(`${farmUrl}/farm/weather`, data, {
    headers: {Authorization: 'Bearer ' + token},
  });
};
export {getFarmsByUser, getFarmDataByUserId, addFarm, getFarmWeather};
//disease detection
const diseaseDetection = async data => {
  return await axios.post(diseaseDetectionUrl, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
export {diseaseDetection};
//cost estimator
const getCostEstimator = async (token, data) => {
  return await axios.post(estimatorUrl, data, {
    headers: {Authorization: 'Bearer ' + token},
  });
};
export {getCostEstimator};
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
const addUserTimeline = async (token, data) => {
  return await axios.post(userTimelineUrl, data, {
    headers: {Authorization: 'Bearer ' + token},
  });
};
const getTimelineByUser = async token => {
  return await axios.get(`${userTimelineUrl}/parent`, {
    headers: {Authorization: 'Bearer ' + token},
  });
};
const getTimelineEventsByTimeline = async (token, data) => {
  return await axios.post(`${userTimelineUrl}/children`, data, {
    headers: {Authorization: 'Bearer ' + token},
  });
};
export {addUserTimeline, getTimelineByUser, getTimelineEventsByTimeline};
