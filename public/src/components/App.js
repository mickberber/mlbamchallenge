import React, {Component} from 'react';
import axios from 'axios';

import styles from './../styles/main.css';
import Game from './Game';
import Loading from './Loading';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
    };
  }

  componentWillMount() {
    axios.get('http://gdx.mlb.com/components/game/mlb/year_2016/month_05/day_20/master_scoreboard.json')
      .then((res) => {
        this.setState({
          games: res.data.data.games.game,
        });
      })
      .catch((e) => { console.log(e); });
  }

  render() {
    if(!this.state.games.length) {
      return (<Loading />);
    }
    const games = this.state.games.map((game, i) => {
      return <Game key={i}
                   style={styles.game_container}
                   game={game} />
    });
    return (<div>
      <div className={styles.game_container}>
        {games}
      </div>
    </div>)
  }
}

export default App;
