import { useState } from 'react';

import { AxiosError } from 'axios';

import * as authApi from '@apis/auth';
import * as userApi from '@apis/user';
import { useUserState } from '@atoms/userState';

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>();
  const [, setUserState] = useUserState();

  const login = async (data: authApi.LoginResponseData) => {
    try {
      setLoading(true);
      await authApi.login(data);
      const user = await userApi.getMe();
      setUserState(user);
      setErrorMsg(undefined);
    } catch (error) {
      console.error(error);
      if (error instanceof AxiosError) {
        setErrorMsg(error.response?.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
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
    login,
    logout,
  };
};
