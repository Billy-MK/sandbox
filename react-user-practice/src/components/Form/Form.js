import React, {useState} from 'react';
import styles from "./Form.module.css";
import Container from "../../UI/Container/Container"
import Modal from "../Modal/Modal"

const Form = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [showModal, setShowModal] = useState(false)

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();
        if (username.trim().length < 1) {
            setShowModal(true);
            return;
        }
        props.onSubmitUser({username: username, age: age});
        document.getElementById('age').value = '';
        setUsername('');
        document.getElementById('username').value = '';
        setAge('');
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <Container>
            <form onSubmit={submitForm}>
                <label className={styles.label} for="username">Username</label><br></br>
                <input className={styles.input} onChange={usernameChangeHandler} type="text" id="username" name="username"></input>
                <label className={styles.label} for="age">Age (Years)</label><br></br>
                <input className={styles.input} onChange={ageChangeHandler} type="text" id="age" name="age"></input>
                <button className={styles.submitButton} type="submit">Add User</button>
            </form>
            {showModal ? <Modal closeModal={closeModal} header={"Error"} body={"This is an error message"} /> : null}
            
        </Container>
    )
}

export default Form