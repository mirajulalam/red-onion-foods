import React, { useState } from 'react';
import './Login.css';
import logoImages1 from '../../images/logo2.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || '/';

    if (user) {
        navigate(from, { replace: true });

    }

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();

        signInWithEmailAndPassword(email, password)

    }
    return (
        <div className="form-container">
            <div className='from-info'>
                <img className='text-center' src={logoImages1} alt="" />
                <form onSubmit={handleSubmit}>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Email Address' required />
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' required />
                    <input type="submit" value="Submit" />
                </form>
                <Link to='/signup' className='text-danger pe-auto text-decoration-none'><p>New to red onion foods</p></Link>
            </div>
        </div>
    );
};

export default Login;