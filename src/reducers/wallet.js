// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_CURRENCIES } from '../actions/action.types';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  const { currencies } = action;

  switch (action.type) {
  case SET_CURRENCIES:
    return {
      ...state,
      currencies,
    };
  default:
    return state;
  }
}

export default wallet;
