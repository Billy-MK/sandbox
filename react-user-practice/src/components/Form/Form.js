import React from 'react';
import styles from "./Form.module.css";
import Container from "../../UI/Container/Container"

const Form = () => {

    const submitForm = (e) => {
        e.preventDefault();
        console.log("form submission")
    }

    return (
        <Container>
            <form onSubmit={submitForm}>
                <label className={styles.label} for="username">Username</label><br></br>
                <input className={styles.input} type="text" id="username" name="username"></input>
                <label className={styles.label} for="age">Age (Years)</label><br></br>
                <input className={styles.input} type="text" id="age" name="age"></input>
                <button className={styles.submitButton} type="submit">Add User</button>
            </form>
        </Container>
    )
}

export default Form