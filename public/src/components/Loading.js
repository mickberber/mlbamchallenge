import React from 'react';
import styles from '../styles/main.css';

const Loading = () => {
  return (<div className={styles.game_container}>
    <div className={styles.game_thumb}>
      Loading games...
    </div>
  </div>);
};

export default Loading;
