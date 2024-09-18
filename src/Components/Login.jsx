import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    console.log("Login clicked");
  };

  const skipLogin = () => {
    // Handle skip login logic, e.g., navigate to homepage or dashboard
    console.log("Skip clicked");
    navigate('/home'); // Change this to the path you want to redirect to
  };

  return (
    <div className="login">
      <div className="login-bg">
        <img src={`${process.env.PUBLIC_URL}/images/login-bg.jpg`} alt="background" />
      </div>
      <div className="main">
        <center><img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" /></center>
        <br />
        <center><h2>Log in to DJI</h2></center>
        <form>
          <label htmlFor="emailaddress"> Email address: </label>
          <input type="email" id="username" placeholder="Enter your email" />

          <label htmlFor="password"> Password: </label>
          <input type="password" id="password" placeholder="Enter your password" />

          <Link to="/Resetpass" style={{ display: "flex", justifyContent: "flex-end" }}>Forgot Password?</Link>
        </form>

        <button onClick={login}>Log-in</button>

        {/* Add the Skip button */}
       

        <center>
          <p>New User? <Link to="/Signup"> Create Your Dji account </Link></p>
        </center>

        <button className="skip-btn" onClick={skipLogin}>Skip for Now</button>
      </div>
    </div>
  );
}

export default Login;
