import { connect } from 'react-redux';

import App from '../components/App';
import { getGames, updateIndex } from '../actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    loadGames: () => {
      dispatch(getGames());
    },
    updateIndex: (newIndex) => {
      dispatch(updateIndex(newIndex));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    games: state.games,
    date: state.date,
    selectedIndex: state.selectedIndex,
    error: state.error
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

export default Container;
