import React from 'react';
import styles  from './SvgIcon.module.scss';

export default function SvgIcon(props) {
    return (
        <div className={styles.svgIcon}>
            {props.icon}
        </div>
    );
  }
