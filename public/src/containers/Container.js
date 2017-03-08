import { connect } from 'react-redux';

import App from '../components/App';
import { getGames, updateIndex, toggleDetails } from '../actions/index';
import { urlConstructor } from '../utils';

// const url = 'http://gdx.mlb.com/components/game/mlb/year_2016/month_05/day_20/master_scoreboard.json';
const mapDispatchToProps = (dispatch) => {
  return {
    loadGames: () => {
      dispatch(getGames(urlConstructor()));
      // dispatch(getGames(url));
    },
    updateIndex: (newIndex) => {
      dispatch(updateIndex(newIndex));
    },
    toggleDetails: () => {
      dispatch(toggleDetails());
    }
  };
};

const mapStateToProps = (state) => {
  return {
    games: state.games,
    selectedIndex: state.selectedIndex,
    showDetails: state.showDetails,
    error: state.error
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

export default Container;
