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
 * 유저 토큰을 가져오거나, 저장하는 selector
 *
 * @returns {Object} { accessToken, refreshToken }
 * @returns {Function} set({ accessToken, refreshToken })
 */
export const authStoreSelector = selector({
  key: 'authStoreSelector',
  get: ({ get }) => {
    const { accessToken, refreshToken } = get(authStore);
    /*
      access token 검증하는 로직 (유효기간 만료)
    */

    return { accessToken, refreshToken };
  },
  set: ({ set }, newTokens) => {
    return set(authStore, newTokens);
  },
});
