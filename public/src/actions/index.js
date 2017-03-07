import axios from 'axios';

export const LOAD_GAMES = 'LOAD_GAMES';
export const HANDLE_KEY_DOWN = 'HANDLE_KEY_DOWN';
export const ERROR_HANLDE = 'ERROR_HANLDE';
const default_url = 'http://gdx.mlb.com/components/game/mlb/year_2016/month_05/day_20/master_scoreboard.json';

const fetchGames = (url) => {
  return axios.get(default_url);
}

export const getGames = (date) => {
  return (dispatch) => {
    return fetchGames().then(
      res => dispatch(loadGames(res.data.data.games.game)),
      error => dispatch(handleError(error))
    );
  };
};

const loadGames = (games) => {
  return {
    type: LOAD_GAMES,
    games
  };
}

const handleError = (error) => {
  type: ERROR_HANLDE,
  error
}

const handleKeyDown = (key) => {
  return {
    type: HANDLE_KEY_DOWN,
    key
  };
}
