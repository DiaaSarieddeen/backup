import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Container, Button, TextField } from '@mui/material';
import './Signup.css';
import { auth} from '../firebase';// Make sure you have your Firebase configuration correctly imported
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, where } from 'firebase/firestore';
import { query } from 'express';




const SignUp = () => {
    const [form, setForm] = useState({ userName: "", email: "", password: "" });

    const Register = async (event) => {

        event.preventDefault();

        try {
            const email = form.email;
            const emailConfirmation = document.getElementById("emailInputConfirmation").value;
            const password = form.password;
            const passwordConfirmation = document.getElementById("passwordInputConfirmation").value;


            if ((email !== emailConfirmation)) {
                alert("The email and email Confirmation don't match.");
                return;
            }

            else if ((password !== passwordConfirmation)) {
                alert("Password and Password Confirmation don't match.")
                return;
            }

            else {
                const userCredentials = await createUserWithEmailAndPassword(auth, form.email, form.password);

                const newUserName = {
                    username: form.userName,
                }

                    = console.log("Success in signing up: ", userCredentials);
                window.alert(`successfully created user ${form.userName}`);

            }




        } catch (error) {
            console.log("Error signing up; Can't create user", error.message);
        }
    }



    const onHandleEmail = (e) => {

        setForm({ ...form, email: e.target.value }); // Fixed the key to 'email'
    }

    const onHandlePassword = (e) => {
        setForm({ ...form, password: e.target.value }); // Fixed the key to 'password'
    }

    const onHandleUserName = (e) => {
        setForm({ ...form, userName: e.target.value });
    }

    return (
        <Container>
            <div className="flip-card">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className='flip-card-front-content'>
                                <h1 style={{ color: "#241468" }}>Don't have An Account? Create One.</h1>
                                <FontAwesomeIcon style={{ color: "#241468" }} icon={faUserPlus} fade />
                            </div>
                        </div>

                        <div className="flip-card-back">
                            <form onSubmit={Register}>
                                <div className="InputFields">
                                    <TextField style={{ marginBottom: "14px", width: '250px' }} label="username" value={form.userName} onChange={onHandleUserName} type="text" required />
                                    <TextField style={{ marginBottom: "14px", width: '250px' }} label="email" type="email" value={form.email} onChange={onHandleEmail} required />
                                    <TextField style={{ marginBottom: "14px", width: '250px' }} label="confirm email" type="email" id="emailInputConfirmation" required />
                                    <TextField style={{ marginBottom: "14px", width: '250px' }} label="password" type="password" value={form.password} onChange={onHandlePassword} required />
                                    <TextField style={{ marginBottom: "14px", width: '250px' }} label="password confirmation" id="passwordInputConfirmation" type="password" required />
                                    <br /><Button type="submit" id="submitBtn">Sign Up</Button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    );
}

export default SignUp;
