import { createStore } from 'redux';
import {
  LOAD_GAMES,
  HANDLE_KEY_DOWN
} from '../actions/index';

let initialState = {
  games: [],
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_GAMES:
      return {}
    case HANDLE_KEY_DOWN:
      return {}
  }
};

const store = createStore(reducer);

export default store;
