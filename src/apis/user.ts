import axios from 'axios';

import { User } from '@/models/user';

export const getMe = async (cookie?: string) => {
  try {
    if (cookie) {
      // SSR
      const { data } = await axios.get<User>('/user/me', {
        headers: {
          Cookie: cookie,
        },
      });

      return data;
    } else {
      // CSR
      const { data } = await axios.get<User>('/user/me');
      return data;
    }
  } catch (error) {
    return null;
  }
};
