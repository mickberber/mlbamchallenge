import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {
  LOAD_GAMES,
  UPDATE_INDEX,
  ERROR_HANDLE
} from '../actions/index';

let initialState = {
  games: [],
  selectedIndex: 0,
  date: '',
  error: false
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_GAMES:
      return Object.assign({}, state, {
        games: action.games,
        error: false
      })
    case UPDATE_INDEX:
      return Object.assign({}, state, {
        selectedIndex: action.selectedIndex,
      })
    case ERROR_HANDLE:
      return Object.assign({}, state, {
        error: true
      })
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
