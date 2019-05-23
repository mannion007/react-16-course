import React from 'react';
import styles from './Developer.module.css';

const Developer = (props) => {
    return <div className="Developer"><span className={styles.name}> Name:</span> {props.name}, Role: {props.role}</div>;
}

export default Developer;