// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_CURRENCIES, SET_EXPENSE } from '../actions/action.types';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  const { currencies, expense } = action;
  switch (action.type) {
  case SET_CURRENCIES:
    return {
      ...state,
      currencies,
    };
  case SET_EXPENSE:
    return {
      ...state,
      expenses: [...expense],
    };
  default:
    return state;
  }
}

export default wallet;
