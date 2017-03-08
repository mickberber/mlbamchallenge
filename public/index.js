import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import store from './src/reducers/index';
import Container from './src/containers/Container';

const render = (Component) => {
  ReactDOM.render(<AppContainer>
    <Provider store={store}>
      <Component />
    </Provider>
  </AppContainer>, document.querySelector('.attach'));
}

render(Container);

if(module.hot) {
  module.hot.accept('./src/containers/Container', () => {
    render(App);
  });
}
