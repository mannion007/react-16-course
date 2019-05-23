import React from 'react';
import styles from './Developer.module.css';

const Developer = (props) => {
    return (
        <div>
            <h1>The Teams</h1>
            <div className="Developer"><span className={styles.name}> Name:</span> {props.name}, Role: {props.role}</div>
        </div>
    );
}

export default Developer;