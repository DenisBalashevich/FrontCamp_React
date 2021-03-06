import React from 'react';

import indexStyles from '../../../styles/index.module.scss';
import styles  from './ControlContainer.module.scss';

export default function ControlContainer(props) {
    return (
        <div className={`${indexStyles.flexContainer} ${styles.controlContainer}`}>
            {props.children}
        </div>
    );
}
