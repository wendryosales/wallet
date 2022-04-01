import { SET_USER, SET_WALLET } from './action.types';

// Coloque aqui suas actions
export const userAction = (user) => ({
  type: SET_USER,
  email: user.email,
  password: user.password,
});

export const walletAction = (personalData) => ({
  type: SET_WALLET,
  personalData,
});
