import React from 'react';
import styles from '../styles/main.css';

const Game = ({game, selected}) => {
  return (<div className={styles.game_thumb}
              id={selected ? styles.selected : ''}>
    <div>{game.away_team_name + ' vs. ' + game.home_team_name}</div>
    <img src={game.video_thumbnails.thumbnail[0].content} />
    <div>{game.time + ' ' + game.time_zone}</div>
    <div>{game.venue}</div>
    <div>{game.location}</div>
  </div>)
}

export default Game;
