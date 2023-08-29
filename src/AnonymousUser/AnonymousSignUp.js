import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
import { anonymous } from '../images/anonymous.jpg';
import { auth } from '../firebase'
import { signInAnonymously, getAuth } from 'firebase/auth';
const SignUpAnonymously = () => {
    const [AnonymousUser, setAnonymousUser] = useState(null);

    try {
        const signedInUser = signInAnonymously(getAuth(auth));
        setAnonymousUser(signedInUser.AnonymousUser);

    } catch (error) {
        console.log("Failure to sign in anonymously", error);
    }

}

const UserSignInAnonymously = () => {
    return (
        <>
            <Container>
                <div className='wholeCard'>
                    <div className='CardInnerMaterial'>
                        <div className='flipCardContent'>
                            <div className='cardFront'>
                                <img src={anonymous} alt="anonymous"></img>
                                <h1>Hide And Speek</h1>
                                <p>Talk anonymously to let your heart out.</p>
                            </div>
                            <div className='cardBack'>
                                <Button>Sign in Anonymously</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default UserSignInAnonymously;