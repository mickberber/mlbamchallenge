import React from 'react';
import styles from '../styles/main.css';

const Game = ({game}) => {
  console.log(game)
  return <div className={styles.game_thumb}>
    <div>{game.away_team_name + ' vs. ' + game.home_team_name}</div>
    <div>{game.time + ' ' + game.time_zone}</div>
    <div>{game.venue}</div>
    <div>{game.location}</div>
  </div>
}

export default Game;