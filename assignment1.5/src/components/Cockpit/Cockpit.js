import React, { useEffect } from 'react';
import styles from './Cockpit.module.css';

const Cockpit = props => {

    useEffect(
        () => {
            console.log('[Team] useEffect');
            setTimeout(() => {alert('Saved data to cloud...')}, 500);
        },
        [props.teams]
    );

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <button onClick={props.click} className={props.showTeams ? styles.Red : ''}>Toggle Teams</button>
        </div>
    );
}

export default React.memo(Cockpit);