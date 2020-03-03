import config from 'src/config';

const { localStorageTokenKey } = config;

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem(localStorageTokenKey);
};

export const setTokenToLocalStorage = (token: string) => {
  localStorage.setItem(localStorageTokenKey, token);
};

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem(localStorageTokenKey);
};
