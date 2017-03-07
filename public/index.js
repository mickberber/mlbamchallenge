import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'redux';

import App from './src/components/app';

const render = (Component) => {
  ReactDOM.render(<AppContainer>
    <Component />
  </AppContainer>, document.querySelector('.attach'));
}

render(App);

if(module.hot) {
  module.hot.accept('./src/components/app', () => {
    render(App);
  });
}
