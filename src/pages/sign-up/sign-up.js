import React, { useState } from 'react';
import firebase from 'firebase';

export default function Signup() {

    const [email, setEmail] = useState('');
    const bindEmail = (e) => {
        console.log('value', e.target.value)
        setEmail(e.target.value)
    };

    const [password, setPassword] = useState('');
    const bindPassword = (e) => {
        console.log('value', e.target.value)
        setPassword(e.target.value)
    };

    
    const register = (e) => {
        console.log('email', email)
        console.log('password', password)

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                console.log("auth done")
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });

        e.preventDefault();

    }




    return (
        <form>
            <label>Enter your name:
                <input
                    type="email"
                    name="useremail"
                    id="email"
                    onChange={bindEmail}

                />
            </label>
            <label>Enter your Password:
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={bindPassword}
    

                />
            </label>
            <button type="submit" onClick={register}>Register</button>
        </form>
    )

}

