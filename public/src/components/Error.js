import React from 'react';
import styles from '../styles/main.css';

const Error = ({ error }) => {
  return (<div className={styles.game_container}>
    <div id={styles.error}>
      <div>Hmmm.... something went wrong. Please try reloading the page.</div>
      <div>{error}</div>
    </div>
  </div>);
};

export default Error;
