import React from 'react';
import styles from '../styles/main.css';
import DetailScreen from './DetailScreen';

const Game = ({game, selected, showDetails}) => {
  return (<div className={styles.game_thumb}
              id={selected ? styles.selected : ''}>
    <div className={styles.game_title}>
      {game.away_team_name + ' vs. ' + game.home_team_name}
    </div>
    <div className={styles.game_img}>
      <img src={game.video_thumbnails.thumbnail[0].content} />
    </div>
    <div className={styles.game_details}>
      <div>{game.time + ' ' + game.time_zone}</div>
      <div>{game.venue}</div>
      <div>{game.location}</div>
    </div>
      {showDetails ? <DetailScreen game={game} /> : null}
  </div>)
}

export default Game;
