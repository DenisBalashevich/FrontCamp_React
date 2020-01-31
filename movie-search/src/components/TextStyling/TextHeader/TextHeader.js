import React from 'react';
import styles  from './TextHeader.module.scss';

export default function TextHeader(props) {
    return (
        <div className={styles.textHeader}>{props.text}</div>
    );
  }
