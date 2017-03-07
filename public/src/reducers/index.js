import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  LOAD_GAMES,
  HANDLE_KEY_DOWN
} from '../actions/index';

let initialState = {
  games: [],
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_GAMES:
      return {}
    case HANDLE_KEY_DOWN:
      return {}
  }
};

const store = createStore(
  rootReducer,
  appplyMiddleware(thunk)
);

export default store;
