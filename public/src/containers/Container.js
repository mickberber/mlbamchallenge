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
    date: state.date,
    selectedIndex: state.selectedIndex
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

export default Container;
