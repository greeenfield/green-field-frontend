import axios from 'axios';

export interface LoginResponseData {
  email: string;
  password: string;
}

export interface SignUpResponseData {
  username: string;
  email: string;
  nickname: string;
  password: string;
}

export const signup = async (data: SignUpResponseData) => {
  return axios.post('/user', data);
};

export const login = async (data: LoginResponseData) => {
  return axios.post('/auth/login', data);
};

export const logout = async () => {
  return axios.post('/auth/logout');
};
