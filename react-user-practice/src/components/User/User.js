import React from 'react';
import styles from "./User.module.css"

const User = (props) => {


    return (
        <div>{props.username}, {props.age}</div>
    )
}

export default User