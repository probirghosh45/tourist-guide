import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
    return (
        <>
            <div className="form-container">
            <h2 className="form-title">
                Registration
            </h2>
            <form>
                <div className="control">
                    <label className='email-title' htmlFor="email">Email</label>
                    <input type="email" name='email' required/>
                </div>
                <div className="control">
                    <label className='pass' htmlFor="password">Password</label>
                    <input type="password" name='password' required/>
                </div>
                <div className="control">
                    <label className='pass' htmlFor="password">Confirm Password</label>
                    <input type="password" name='password' required/>
                </div>
                <div className='butonn'>
                <input className='submit-btn' type="submit" value="REGISTER NOW" />
                </div>
            </form>
            <p className='user-account'>Already Have An Account? <Link to="/login">Please Login</Link> </p>
        </div>

        </>
    );
};

export default Registration;