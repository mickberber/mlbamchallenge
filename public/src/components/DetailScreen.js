import React from 'react';
import styles from '../styles/main.css';

const DetailScreen = (game) => {
  return (<div className={styles.details_screen}>
    <div>
      {game.game.away_team_city + ' ' + game.game.away_team_name}
      {' (' + game.game.away_win + ' - ' + game.game.away_loss + ')'}
    </div>
    <div>
      {game.game.home_team_city + ' ' + game.game.home_team_name}
      {' (' + game.game.home_win + ' - ' + game.game.home_loss + ')'}
    </div>
    <div>
      WP: {game.game.winning_pitcher.first + ' ' + game.game.winning_pitcher.last}
    </div>
    <div>
      LP: {game.game.losing_pitcher.first + ' ' + game.game.losing_pitcher.last}
    </div>
    <div>
      {game.game.away_name_abbrev + ': ' + game.game.linescore.r.away}
    </div>
    <div>
      {game.game.home_name_abbrev + ': ' + game.game.linescore.r.home}
    </div>
  </div>);
}

export default DetailScreen;
