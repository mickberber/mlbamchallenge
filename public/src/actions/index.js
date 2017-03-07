export const LOAD_GAMES = 'LOAD_GAMES';
export const HANDLE_KEY_DOWN = 'HANDLE_KEY_DOWN';

export const getGames = (date) => {
  return {
    type: LOAD_GAMES,
    date,
  };
};

export const handleKeyDown = (key) => {
  return {
    type: HANDLE_KEY_DOWN,
    key,
  };
}
