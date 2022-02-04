import React from 'react';
import styles from "./User.module.css"

const User = (props) => {


    return (
        <div>
            <div>Username: {props.username}</div>
            <div>Age: {props.age}</div>
        </div>
    )
}

export default User