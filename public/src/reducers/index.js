import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {
  LOAD_GAMES,
  HANDLE_KEY_DOWN,
  ERROR_HANDLE
} from '../actions/index';

let initialState = {
  games: [],
  date: ''
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_GAMES:
      return Object.assign({}, state, {
        games: action.games,
      })
    case HANDLE_KEY_DOWN:
      return {}
    default:
      return state
  }
};

const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

export default store;
