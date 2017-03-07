import React from 'react';

import styles from './../styles/main.css';
import Game from './Game';
import Loading from './Loading';

const App = ({ loadGames, games, date, selectedIndex }) => {
  console.log(games)

  if(!games.length) {
    loadGames();
    return (<Loading />);
  }

  // window.

  return (<div className={styles.game_container}>
    {games.map((game, i) => {
      if(selectedIndex === i) {
        return (<Game key={i} game={game} selected={true} />);
      }
      return (<Game key={i} game={game} selected={false} />);
    })}
  </div>);
}

export default App;
