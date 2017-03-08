import axios from 'axios';

const default_url = 'http://gdx.mlb.com/components/game/mlb/year_2016/month_05/day_20/master_scoreboard.json';
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

const handleError = (error) => {
  return {
    type: ERROR_HANDLE,
    error
  };
}

const fetchGames = (url) => {
  return axios.get(default_url);
}

export const getGames = () => {
  return (dispatch) => {
    return fetchGames().then((res) => {
      dispatch(loadGames(res.data.data.games.game))
    }).catch((error) => dispatch(handleError(error)))
  };
}
