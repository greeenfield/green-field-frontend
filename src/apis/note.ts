import axios from 'axios';

export const get = () => {
  return axios.get('/note');
};

export const uploadThumbnail = async (formData: FormData) => {
  const { data } = await axios.post<{ location: string }>(
    '/note/upload',
    formData
  );
  return data;
};
