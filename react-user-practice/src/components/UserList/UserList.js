import React, { useState } from 'react';
import styles from "./UserList.module.css";
import Container from "../../UI/Container/Container"
import User from "../User/User"

const UserList = (props) => {
    const [users, setUsers] = useState([]);

    return (
        <Container>
            {users.map((user) => {
                return <User key={Math.random()} username={user.username} age={user.age}></User>
            })}
        </Container>
    )
}

export default UserList