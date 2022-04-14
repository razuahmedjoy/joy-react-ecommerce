import React, { useState } from 'react';
import google from '../../images/google.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import auth from '../../firebase.init';
const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    if(user){
        navigate('/shop')
    }

    return (
        <div className="form-container">
            <div className="m-auto p-0 p-md-3 w-100">
                <h2 className="form-title text-center mb-3">Login</h2>
                <form onSubmit={handleSignIn} className="w-100" action="">
                    <div className="input-items">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="email" required />
                    </div>
                    <div className="input-items">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required/>
                    </div>
                    <p className="text-danger">{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <div className="input-items">

                        <input type="submit" className="btn btn-warning w-100" value="Login" id="submit" />
                    </div>
                </form>
                <p className="my-3 py-2">New to Ema-John? <Link className="form-link" to='/signup'>Create New Account</Link></p>
                <div className="form-bottom">
                    <div></div>
                    <p>or</p>
                   <div></div>
                 
                </div>
                <div className="social-login-buttons">
                    <div className="btn d-flex justify-content-center align-items-center p-3 btn-outline-primary">
                    <img src={google} alt="" width="20" height="20" className="mx-2"/> Continue with Google</div>
                </div>
            </div>
        </div>
    );
};

export default Login;