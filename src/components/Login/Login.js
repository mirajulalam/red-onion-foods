import React, { useState } from 'react';
import './Login.css';
import logoImages1 from '../../images/logo2.png';
import { Link } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleUserSignIn = event => {
        event.preventDefault();

    }
    return (
        <div className='from-signup'>
            <img className='text-center' src={logoImages1} alt="" />
            <form onSubmit={handleUserSignIn}>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Email Address' required />
                <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' required />
                <input type="submit" value="Submit" />
            </form>
            <Link to='/signup' className='text-danger pe-auto text-decoration-none'><p>New to red onion foods</p></Link>
        </div>
    );
};

export default Login;