import React from 'react';
import styles from '../styles/main.css';

const DetailScreen = ({ game }) => {
  let hasCompleted = game.winning_pitcher ? true : false;
  return (<div className={styles.details_screen}>
    <div>
      {game.away_team_city + ' ' + game.away_team_name}
      {' (' + game.away_win + ' - ' + game.away_loss + ')'}
    </div>
    <div>
      {game.home_team_city + ' ' + game.home_team_name}
      {' (' + game.home_win + ' - ' + game.home_loss + ')'}
    </div>
    {hasCompleted ? <PitcherDetails game={game} /> : null}
  </div>);
}

export default DetailScreen;

//extracted to load dynamically
const PitcherDetails = ({ game }) => {
  return (<div>
    <div>
      WP: {game.winning_pitcher.first + ' ' + game.winning_pitcher.last}
    </div>
    <div>
      LP: {game.losing_pitcher.first + ' ' + game.losing_pitcher.last}
    </div>
    <div>
      {game.away_name_abbrev + ': ' + game.linescore.r.away}
    </div>
    <div>
      {game.home_name_abbrev + ': ' + game.linescore.r.home}
    </div>
  </div>);
}
