import { SET_USER, SET_CURRENCIES } from './action.types';

// Coloque aqui suas actions
export const userAction = (user) => ({
  type: SET_USER,
  email: user.email,
  password: user.password,
});

export const sendCurrencies = (currencies) => ({
  type: SET_CURRENCIES,
  currencies,
});
