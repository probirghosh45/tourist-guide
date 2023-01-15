import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <>
        <div className='login-style'>
            <Container>
            <div className="form-container">
            <h2 className="form-title">
                Login
            </h2>
            <form>
                <div className="control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required/>
                </div>
                <div className="control">
                    <label className='pass' htmlFor="password">Password</label>
                    <input type="password" name='password' required/>
                </div>
                <div className='butonn'>
                <input className='submit-btn' type="submit" value="login" />
                </div>
            </form>
            <p className='user-account'>New User? <Link to="/registration">Create A New Account</Link> </p>
            <div className='google-btn'>
                <button>Google Sign in</button>
            </div>
        </div>
            </Container>
        </div>
        </>
        
    );
};

export default Login;