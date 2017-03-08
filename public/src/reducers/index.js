import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {
  LOAD_GAMES,
  UPDATE_INDEX,
  TOGGLE_DETAILS,
  ERROR_HANDLE
} from '../actions/index';

const initialState = {
  games: [],
  selectedIndex: 0,
  showDetails: false,
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
        selectedIndex: action.selectedIndex
      })
    case TOGGLE_DETAILS:
      return Object.assign({}, state, {
        showDetails: state.showDetails ? false : true
      })
    case ERROR_HANDLE:
      return Object.assign({}, state, {
        error: action.error
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
