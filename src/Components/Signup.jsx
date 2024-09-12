// src/components/Signup.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const signup = (e) => {
    e.preventDefault();
    console.log("Signup clicked");
  };

  return (
    <div className="signup">
      <div className="signup-bg">
        <img src={`${process.env.PUBLIC_URL}/images/signup-bg.jpg`} alt="background" />
      </div>
      <div className="main">
        <center><img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" /></center>
        <center><h2>Sign up for DJI</h2></center>
        <form>
          <label htmlFor="emailaddress"> Email address: </label>
          <input type="email" id="username" placeholder="Enter your email" />

          <label htmlFor="password"> Password: </label>
          <input type="password" id="password" placeholder="Create a password" />

        </form>

        <button onClick={signup}>Sign up</button>
        <center>
          <p>Already have an account? <Link to="/login">Log in</Link></p>
        </center>
      </div>
    </div>
  );
}

export default Signup;
