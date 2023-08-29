import React, { useState } from 'react';
import { auth } from '../firebase'; // Make sure this is your Firebase auth instance
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Button, Container, TextField } from '@mui/material';
import './SignIn.css';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {

    const [form, setForm] = useState({ email: '', password: '' });

    const onChangeEmail = (event) => {
        setForm({ ...form, email: event.target.value });
    }

    const onChangePassword = (event) => {
        setForm({ ...form, password: event.target.value });
    }


    const LogIn =  (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, form.email, form.password)
            .then((userCredentials) => { //this function means that we will wait till we get the result so we get back to user credentials
                console.log("successful sign in", userCredentials);
            })
            .catch((error) => {
                console.log("There is an error.", error);
            })
    }

    return (
        <Container className='centerDiv'>


            <div className="flip-card">
                <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                        <div className='flip-card-front-content'>
                            <h1 style={{ color: "#241468" }}>SignIn with Your email</h1>
                            <FontAwesomeIcon style={{ color: "#241468" }} icon={faEnvelope} bounce />
                        </div>
                    </div>

                    <div className='flip-card-back'>
                        <div className='flip-card-back-content'>
                            <form className="formContent" onSubmit={LogIn}>
                                <div className='formContent'>

                                    <div className='InputDiv'>
                                        <TextField style={{ marginBottom: "16px" }} label="email" type="email" value={form.email} onChange={onChangeEmail} />
                                        <TextField style={{ marginBottom: "16px" }} label="password" type="password" value={form.password} onChange={onChangePassword} />
                                    </div>


                                </div>

                                <div>
                                    <Button type="submit" id="submitBtn" variant="contained">Sign In</Button>
                                </div>


                            </form>
                        </div>


                    </div>

                </div>
            </div>
        </Container>
    )
}


export default SignIn;