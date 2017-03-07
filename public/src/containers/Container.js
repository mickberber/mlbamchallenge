import { connect } from 'react-redux';

import App from '../components/App';
import { getGames } from '../actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    loadGames: () => {
      dispatch(getGames());
    }
  };
};

const mapStateToProps = (state) => {
  return {
    games: state.games,
    date: state.date
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

export default Container;
