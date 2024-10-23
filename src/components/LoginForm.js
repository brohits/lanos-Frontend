import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./AuthForms.css";
import Logo from "../../src/Lanos LOGO (3).png";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin} className="auth-form">
        <img src={Logo}/>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        <ReCAPTCHA
          sitekey="your-recaptcha-site-key"
          className="Captcha"
          onChange={(value) => console.log("Captcha value:", value)}
        />
        <button type="submit" className="auth-button">
          Login
        </button>
        <p className="forgot-password">Forgotten Password</p>
        <hr />
        <button className="google-login-button">
          <i className="fab fa-google"></i> Log in with Google
        </button>
        <p>
          Don’t have an account? <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
