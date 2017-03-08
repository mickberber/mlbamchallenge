import React from 'react';

import styles from './../styles/main.css';
import Game from './Game';
import Loading from './Loading';
import Error from './Error';

const App = ({ loadGames, updateIndex, toggleDetails, handleError, games, selectedIndex, showDetails, error }) => {

  if(!games.length) {
    if(error) {
      handleError(error);
      return (<Error error={error} />);
    }
    loadGames();
    return (<Loading />);
  }

  window.onkeydown = (e) => {
    if(e.key === 'ArrowRight' && selectedIndex !== games.length - 1) {
      updateIndex(selectedIndex + 1);
      if(selectedIndex > 2) {
        document.body.scrollLeft += 200;
      }
    }
    if(e.key === 'ArrowLeft' && selectedIndex !== 0) {
      updateIndex(selectedIndex - 1);
      if(selectedIndex < games.length - 3) {
        document.body.scrollLeft -= 200;
      }
    }
    if(e.key === 'Enter') {
      toggleDetails();
    }
  }

  games = games.map((game, i) => {
    if(selectedIndex === i) {
      return (<Game key={i} game={game} selected={true} showDetails={showDetails} />);
    }
    return (<Game key={i} game={game} selected={false} />);
  });

  return (<div className={styles.game_container}
    onKeyDown={onkeydown}>
    {games}
  </div>);
}

export default App;
