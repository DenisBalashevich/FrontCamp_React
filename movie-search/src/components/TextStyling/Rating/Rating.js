import React from 'react';
import styles  from './Rating.module.scss';

export default function Rating(props) {
    return (
        <div className={styles.rating}>{props.value}</div>
    );
  }
