import getPrice from '../API/getPrice';
import {
  SET_USER,
  SET_CURRENCIES, SET_EXPENSE,
  RECEIVE_PRICE_SUCESS,
  RECEIVE_PRICE_FAILURE,
} from './action.types';

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

export const sendExpenses = (expense) => ({
  type: SET_EXPENSE,
  expense,
});

export const receivePriceSuccess = (currentPrice) => ({
  type: RECEIVE_PRICE_SUCESS,
  currentPrice,
});

export const receivePriceFailure = (error) => ({
  type: RECEIVE_PRICE_FAILURE,
  error,
});

export function fetchCurrentPrice() {
  return async (dispatch) => {
    try {
      // faz o fetch da api
      const currentPrice = await getPrice();
      dispatch(receivePriceSuccess(currentPrice));
    } catch (error) {
      dispatch(receivePriceFailure(error));
    }
    // console.log('STATE ATUALIZADO', getState());
  };
}
