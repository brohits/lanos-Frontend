import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./AuthForms.css";
import Logo from "../../src/Lanos LOGO (3).png";

const LoginForm = () => {
  const [email, setEmail] = useState(""); // Changed from username to email
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }), // Send email instead of username
    });

    const data = await response.json();
    if (response.ok) {
      // Handle successful login (e.g., store token)
      console.log("Login successful:", data.token);
    } else {
      // Handle error
      console.error("Login error:", data.msg);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin} className="auth-form">
        <img src={Logo} alt="Logo" />
        <input
          type="email" // Ensure the input type is email
          placeholder="Email"
          value={email} // Use email variable
          onChange={(e) => setEmail(e.target.value)} // Use setEmail
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
