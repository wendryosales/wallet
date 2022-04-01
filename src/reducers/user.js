import { SET_USER } from '../actions/action.types';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action) {
  const { email, password } = action;

  switch (action.type) {
  case SET_USER:
    return {
      ...state,
      email,
      password,
    };
  default:
    return state;
  }
}

export default user;
