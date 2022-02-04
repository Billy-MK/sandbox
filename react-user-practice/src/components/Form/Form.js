import React, {useState} from 'react';
import styles from "./Form.module.css";
import Container from "../../UI/Container/Container"
import Modal from "../Modal/Modal"

const Form = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState(0);
    const [modal, setModal] = useState({display: false})

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();
        if (username.trim().length < 1) {
            setModal({display: true, header: "Invalid input", body: "Username field cannot be blank."});
            return;
        }
        if (age.trim().length < 1) {
            setModal({display: true, header: "Invalid input", body: "Age field cannot be blank."});
            return;
        }
        if (isNaN(age.trim())) {
            setModal({display: true, header: "Invalid input", body: "Age must be a number."});
            return;
        }
        props.onSubmitUser({username: username, age: age});
        document.getElementById('age').value = '';
        setUsername('');
        document.getElementById('username').value = '';
        setAge('');
    }

    const closeModal = () => {
        setModal({display: false})
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
            {modal.display ? <Modal closeModal={closeModal} header={modal.header} body={modal.body} /> : null}
        </Container>
    )
}

export default Form