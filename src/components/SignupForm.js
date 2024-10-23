import React, { useState } from "react";
import "./AuthForms.css";
import Logo from "../../src/Lanos LOGO (3).png";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSignup} className="auth-form">
        <img src={Logo}/>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className="auth-button">
          Create Account
        </button>
        <hr />
        <button className="google-login-button">
          <i className="fab fa-google"></i> Signup with Google
        </button>
        <p>
          Already have an account? <a href="#">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
