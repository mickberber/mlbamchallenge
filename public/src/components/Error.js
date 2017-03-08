import React from 'react';
import styles from '../styles/main.css';

const Error = () => {
  return (<div className={styles.game_container}>
    <div id={styles.error}>
      Hmmm.... something went wrong. Please try reloading the page.
    </div>
  </div>);
};

export default Error;
