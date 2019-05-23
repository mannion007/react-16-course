import React from 'react';
import styles from './Cockpit.module.css';

const Cockpit = (props) => {
    return (
        <div className={styles.Cockpit}>
            <h1>Teams app</h1>
            <button onClick={props.click} className={props.showTeams ? styles.Red : ''}>Toggle Teams</button>
        </div>
    );
}

export default Cockpit;