import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Resetpass() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const reset = (e) => {
    e.preventDefault();
    console.log("Reset clicked");
    if (!checked) {
      alert("Please verify you're not a robot");
      return;
    }
    // Proceed with reset password logic
  };

  return (
    <div className="resetpw">
      <div className="resetpw-bg">
        <img src={`${process.env.PUBLIC_URL}/images/reset-bg.jpg`} alt="background" />
      </div>
      <div className="main">
        <center><img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" /></center>
        <br />
        <center><h2>Reset Password</h2></center>
        <form>
          <label htmlFor="emailaddress">Email address:</label>
          <input type="email" id="username" placeholder="Enter your email" required />
        </form>
        <div className="recaptcha-container">
          <input
            type="checkbox"
            id="fake-recaptcha"
            className="recaptcha-checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="fake-recaptcha" className="recaptcha-label">
            I'm not a robot
          </label>
          <img
            src={`${process.env.PUBLIC_URL}/images/RecaptchaLogo.jpg`}
            alt="reCAPTCHA logo"
            className="recaptcha-logo"
          />
        </div>
        <button onClick={reset}>Next</button>
      </div>
    </div>
  );
}

export default Resetpass;
