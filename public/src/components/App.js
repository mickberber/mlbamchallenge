import React from 'react';

import styles from './../styles/main.css';
import Game from './Game';
import Loading from './Loading';

const App = ({
  loadGames,
  games,
  date
}) => {
  if(!games.length) {
    loadGames();
    return (<Loading />);
  }
  games = games.map((game, i) => {
    return (<Game key={i} game={game}/>)
  });
  return (<div className={styles.game_container}>
    {games}
  </div>);
}

export default App;
