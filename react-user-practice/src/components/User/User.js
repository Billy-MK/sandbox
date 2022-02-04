import React from 'react';
import styles from "./User.module.css"

const User = (props) => {
    const deleteUser = () => {
        props.removeUser(props.id);
    }

    return (
        <div onClick={deleteUser}>
            <div className={styles.user}>{props.username} ({props.age} years old)</div>
        </div>
    )
}

export default User