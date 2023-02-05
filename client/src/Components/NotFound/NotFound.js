import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Link to="/">
        <img
          className="img-fluid w-100"
          src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.png"
          alt=""
        />
      </Link>
    </div>
  );
};

export default NotFound;
