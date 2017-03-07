import { connect } from 'react-redux';

import App from '../components/App';
import { loadGames } from '../actions/index';

const mapDispatchToProps(dispatch) {
  return {
    loadGames: () => {}
  };
};

const mapStateToProps(state) {
  return {
    games: state.games,
    date: state.date
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

export default Container;
