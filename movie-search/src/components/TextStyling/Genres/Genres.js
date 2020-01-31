import React from 'react';
import styles from './Genres.module.scss';

export default function Genres(props) {
  if (!props.genres) { return null; }

  return (
    <div className={`${styles.genres} ${props.className}`}>
      {props.genres.join(', ')}
    </div>
  );
}
