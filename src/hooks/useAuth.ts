import { useState } from 'react';

import { AxiosError } from 'axios';

import * as authApi from '@/apis/auth';
import * as userApi from '@/apis/user';
import { useUserState } from '@/atoms/userState';

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>();
  const [, setUserState] = useUserState();

  const signup = async (data: authApi.SignUpResponseData): Promise<boolean> => {
    try {
      setLoading(true);
      await authApi.signup(data);
      setErrorMsg(undefined);
      return true;
    } catch (error) {
      if (error instanceof AxiosError) {
        setErrorMsg(error.response?.data.message);
      }
      return false;
    } finally {
      setLoading(false);
    }
  };

  const login = async (data: authApi.LoginResponseData): Promise<boolean> => {
    try {
      setLoading(true);
      await authApi.login(data);
      const user = await userApi.getMe();
      setUserState(user);
      setErrorMsg(undefined);
      return true;
    } catch (error) {
      console.error(error);
      if (error instanceof AxiosError) {
        setErrorMsg(error.response?.data.message);
      }
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      setLoading(true);
      await authApi.logout();
      setUserState(null);
    } catch (error) {
      console.error(error);
      if (error instanceof AxiosError) {
        setErrorMsg(error.response?.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    errorMsg,
    signup,
    login,
    logout,
  };
};
