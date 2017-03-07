import { connect } from 'react-redux';

import App from '../components/App';
import {} from '../actions/index';

const mapDispatchToProps(dispatch) {
  return {};
};

const mapStateToProps(state) {
  return {};
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

export default Container;
