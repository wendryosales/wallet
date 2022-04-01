// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_WALLET } from '../actions/action.types';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
};

function wallet(state = INITIAL_STATE, action) {
  const { user } = action;

  switch (action.type) {
  case SET_WALLET:
    return {
      ...state,
      user,
    };
  default:
    return state;
  }
}

export default wallet;
