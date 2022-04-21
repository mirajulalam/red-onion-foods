import React, { useState } from 'react';
import './SignUp.css';
import logoImages from '../../images/logo2.png';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }
    if (user) {
        navigate('/home')
    }
    const handleCreateUser = event => {
        event.preventDefault();
        console.log(name, email, password);
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className="form-container">
            <div className='from-info'>
                <img className='text-center' src={logoImages} alt="" />
                <form onSubmit={handleCreateUser}>
                    <input onBlur={handleNameBlur} type="text" name="name" id="" placeholder='Name' required />
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Email' required />
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' required />
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" placeholder='Confirm password' required />
                    <input type="submit" value="Submit" />
                </form>
                <Link to='/login' className='text-danger pe-auto text-decoration-none'><p>Already have an account</p></Link>
            </div>
        </div>
    );
};

export default SignUp;