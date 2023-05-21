import axios from 'axios';
const url = 'https://grootbackend-production.up.railway.app';
const diseaseDetectionUrl = `${url}/detect`;
//disease detection
const diseaseDetection = async data => {
  return await axios.post(diseaseDetectionUrl, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
export {diseaseDetection};
