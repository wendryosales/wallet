import { RECEIVE_PRICE_SUCESS, RECEIVE_PRICE_FAILURE } from '../actions/action.types';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  currentPrice: {},
};

function fetchPrice(state = INITIAL_STATE, action) {
  const { currentPrice, error } = action;

  switch (action.type) {
  case RECEIVE_PRICE_SUCESS:
    return {
      ...state,
      currentPrice,
    };
  case RECEIVE_PRICE_FAILURE:
    return {
      ...state,
      error,
    };
  default:
    return state;
  }
}

export default fetchPrice;
