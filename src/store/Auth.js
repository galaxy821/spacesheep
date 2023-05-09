import { atom, selector } from 'recoil';

export const authStore = atom({
  key: 'authStore',
  default: null,
});

export const authStoreSelector = selector({
  key: 'authStoreSelector',
  get: ({ get }) => {
    const token = get(authStore);

    return token;
  },
});
