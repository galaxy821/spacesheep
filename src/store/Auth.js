import { atom, selector } from 'recoil';

export const authStore = atom({
  key: 'authStore',
  default: {
    accessToken: null,
    refreshToken: null,
  },
});

export const getValidToken = selector({
  key: 'getValidToken',
  get: ({ get }) => {
    const { accessToken, refreshToken } = get(authStore);

    return { accessToken, refreshToken };
  },
});

export const authStoreSelector = selector({
  key: 'authStoreSelector',
  get: ({ get }) => {
    const userTokens = get(authStore);

    return userTokens;
  },
  set: ({ set }, newTokens) => {
    set(authStore, newTokens);
  },
});
