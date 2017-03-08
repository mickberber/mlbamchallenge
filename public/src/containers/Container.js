import { connect } from 'react-redux';

import App from '../components/App';
import { getGames, updateIndex, toggleDetails } from '../actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    loadGames: () => {
      dispatch(getGames());
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
    date: state.date,
    selectedIndex: state.selectedIndex,
    showDetails: state.showDetails,
    error: state.error
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

export default Container;
