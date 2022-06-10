import { atom, useRecoilState } from 'recoil';

import { User } from '@models/user';

export const userState = atom<User | null>({
  key: 'userState',
  default: null,
});

export const useUserState = () => {
  return useRecoilState(userState);
};
