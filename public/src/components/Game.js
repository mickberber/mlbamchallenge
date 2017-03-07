import React from 'react';

const Game = ({game}) => {
  console.log(game)
  return <div>
    <div>{game.away_team_name + ' vs. ' + game.home_team_name}</div>
    <div>{game.time + ' ' + game.time_zone}</div>
    <div>{game.venue}</div>
    <div>{game.location}</div>
  </div>
}

export default Game;
