import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="App">
      {showLogin ? (
        <LoginForm />
      ) : (
        <SignupForm />
      )}
      <button
        onClick={() => setShowLogin(!showLogin)}
        className="toggle-form-button"
      >
        {showLogin ? "Go to Signup" : "Go to Login"}
      </button>
    </div>
  );
}

export default App;

