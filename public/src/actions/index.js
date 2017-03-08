import axios from 'axios';

//ACTION CONSTANTS
export const LOAD_GAMES = 'LOAD_GAMES';
export const UPDATE_INDEX = 'UPDATE_INDEX';
export const ERROR_HANDLE = 'ERROR_HANDLE';
export const TOGGLE_DETAILS = 'TOGGLE_DETAILS';

//ACTION CREATORS
export const updateIndex = (index) => {
  return {
    type: UPDATE_INDEX,
    selectedIndex: index
  };
}

export const toggleDetails = () => {
  return {
    type: TOGGLE_DETAILS
  }
}

const loadGames = (games) => {
  return {
    type: LOAD_GAMES,
    games
  };
}

export const handleError = (error) => {
  return {
    type: ERROR_HANDLE,
    error
  };
}

const fetchGames = (url) => {
  return axios.get(url);
}

export const getGames = (url) => {
  return (dispatch) => {
    return fetchGames(url).then((res) => {
      dispatch(loadGames(res.data.data.games.game))
    }).catch((error) => dispatch(handleError(error)))
  };
}
