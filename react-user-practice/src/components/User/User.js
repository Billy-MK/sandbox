import React from 'react';
import styles from "./User.module.css"

const User = (props) => {


    return (
        <div>
            <div className={styles.user}>{props.username} ({props.age} years old)</div>
        </div>
    )
}

export default User