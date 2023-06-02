import axios from 'axios';
const url = 'https://grootbackend-production.up.railway.app';
const diseaseDetectionUrl = `${url}/detect`;
const plantUrl = `${url}/plant`;
const fertilizerUrl = `${url}/fertilizer`;
const authUrl = `${url}/auth`;
const userUrl = `${url}/user`;
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
