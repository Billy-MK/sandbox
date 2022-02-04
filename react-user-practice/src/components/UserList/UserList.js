import React from 'react';
import Container from "../../UI/Container/Container"
import User from "../User/User"

const UserList = (props) => {
    return (
        <Container>
            {props.users.map((user) => {
                return <User removeUser={props.removeUser} key={Math.random()} username={user.username} age={user.age} id={user.id}></User>
            })}
        </Container>
    )
}

export default UserList