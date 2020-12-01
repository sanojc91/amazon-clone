import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //firebase sign in
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/')
        })
        .catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault();
        //firebase register
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            //it sucessfully creates a new user
            console.log(auth);
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message));
    }

    return (
        <div className='login'>
            <Link to="/">
                <img 
                    className='login__logo' 
                    src='https://vietnguyen.info/wp-content/uploads/2016/09/amazon-logo.png'
                />
            </Link>
            <div className='login__container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's condions of use & Sale. Please see our Privacy Policy Nortice, Our Cookies Notice and our Interest-based Ads Notice
                </p>
                <button onClick={register} className='login__registerButton' >Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
