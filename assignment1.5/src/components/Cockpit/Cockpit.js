import React from 'react';
import styles from './Cockpit.module.css';

const Cockpit = (props) => {
    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <button onClick={props.click} className={props.showTeams ? styles.Red : ''}>Toggle Teams</button>
        </div>
    );
}

export default Cockpit;