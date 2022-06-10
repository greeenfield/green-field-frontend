import axios from 'axios';

export const get = () => {
  return axios.get('/note');
};
