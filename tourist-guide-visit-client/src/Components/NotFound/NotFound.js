import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className="img-fluid w-100" src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.png" alt="" />
            <Link to="/"><Button>Go Back</Button></Link>
        </div>
    );
};

export default NotFound;