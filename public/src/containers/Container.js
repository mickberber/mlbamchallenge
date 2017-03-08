import { connect } from 'react-redux';

import App from '../components/App';
import { getGames, updateIndex, toggleDetails, handleError } from '../actions/index';
import { urlConstructor } from '../utils';

const mapDispatchToProps = (dispatch) => {
  return {
    loadGames: () => {
      dispatch(getGames(urlConstructor()));
    },
    updateIndex: (newIndex) => {
      dispatch(updateIndex(newIndex));
    },
    toggleDetails: () => {
      dispatch(toggleDetails());
    },
    handleError: (error) => {
      dispatch(handleError(error));
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
