import React from 'react';
import styles from './Developer.module.css';

const Developer = (props) => {
    return (
        <div>
            <div className="Developer"><span className={styles.name}> Name: {props.Name}</span>, Role: {props.Role}</div>
        </div>
    );
}

export default Developer;