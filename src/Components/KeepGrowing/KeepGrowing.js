import React from 'react';
import { Container } from 'react-bootstrap';
import './KeepGrowing.css';

const KeepGrowing = () => {
    return (
        <>
        <Container>
            <div className="grow">
                
            </div>
        <div className="grooming-section pt-3 pb-5">
        <div className="container ps-6 pe-6">
          <div className="text-center">
            <h1 className="fs-1 pt-3">We just keep growing</h1>
            <p className="fs-5 pt-3">
              Our global community and our tourist guide service catalog get bigger
              every day. Check out our
              <br /> latest numbers as of June 2022.
            </p>
          </div>
          <div className="row justify-content-md-center">
            <div className="col text-center details">
              <h1>44k</h1>
              <p>Client</p>
            </div>
            <div className="col text-center details">
              <h1>650+</h1>
              <p>Members</p>
            </div>
            <div className="col text-center details">
              <h1>183+</h1>
              <p>Services</p>
            </div>
            <div className="col text-center details">
              <h1>1K+</h1>
              <p>Proved Help</p>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col text-center details">
              <h1>2M+</h1>
              <p>Viewers</p>
            </div>
            <div className="col text-center details">
              <h1>5K+</h1>
              <p>Videos</p>
            </div>
          </div>
        </div>
      </div>
        </Container>
    
        </>
    );
};

export default KeepGrowing;