import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import google from '../../images/google.png'
import './SignUp.css'
const SignUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmpassword,setConfirmPassword] = useState('')
    const [error,setError] = useState('')
    const navigate = useNavigate();


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    const handleCreateUser = event => {
        setError('')
        event.preventDefault()
        if(password !== confirmpassword){
            setError("Your both password should be same");
            return;
        }
        if(password.length < 6){
            setError("Your password must be at least 6 characters")
            return;
        }
        createUserWithEmailAndPassword(email,password)
    }

    if(user){
        navigate('/')
    }
    return (
        <div className="form-container">
        <div className="m-auto p-0 p-md-3 w-100">
            <h2 className="form-title text-center mb-3">Sign Up</h2>
            <form onSubmit={handleCreateUser} className="w-100" action="">
                <div className="input-items">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="email" required/>
                </div>
                <div className="input-items">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required/>
                </div>
                <div className="input-items">
                    <label htmlFor="password2">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="password2" id="password2" required/>
                </div>
                <p className="text-danger fw-bold">{error}</p>
                <div className="input-items">

                    <input type="submit" className="btn btn-warning w-100" value="Sign Up" id="submit"  />
                </div>
            </form>
            <p className="my-3 py-2">Already have an account? <Link className="form-link" to='/login'>Login</Link></p>
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

export default SignUp;