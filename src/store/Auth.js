import { atom, selector } from 'recoil';

/**
 * 유저 토큰을 저장하는 atom
 */
export const authStore = atom({
  key: 'authStore',
  default: {
    accessToken: null,
    refreshToken: null,
  },
});

/**
 * 유저 토큰을 가져오는 selector
 */
export const getValidToken = selector({
  key: 'getValidToken',
  get: ({ get }) => {
    const { accessToken, refreshToken } = get(authStore);

    return { accessToken, refreshToken };
  },
});

/**
 * 유저 토큰을 가져오거나, 저장하는 selector
 */
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
