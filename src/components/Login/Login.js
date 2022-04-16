import React from 'react';
import './Login.css';
import logoImages1 from '../../images/logo2.png';
import { Link } from 'react-router-dom';
const Login = () => {

    return (
        <div className='from-signup'>
            <img className='text-center' src={logoImages1} alt="" />
            <form>
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="submit" value="Submit" />
            </form>
            <Link to='/signup' className='text-danger pe-auto text-decoration-none'><p>New user</p></Link>
        </div>
    );
};

export default Login;