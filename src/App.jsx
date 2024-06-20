import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [msg, setMsg] = useState("");

  const inputHandler = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "passwordConfirmation") {
      setPasswordConfirmation(e.target.value);
    }
  };

  const errorCheck = () => {
    let errorMessage = "";
    if (email === "") {
      errorMessage += "Email is required. ";
    }
    if (password === "") {
      errorMessage += "Password is required. ";
    }
    if (passwordConfirmation === "") {
      errorMessage += "Password confirmation is required. ";
    }
    if (password !== passwordConfirmation) {
      errorMessage += "Passwords do not match. ";
    }

    if (errorMessage === "") {
      setMsg("Registration successful.");
    } else {
      setMsg(errorMessage);
    }
  };

  return (
    <div className='register-container'>
      <h1>Register</h1>
      <input
        type='text'
        name='email'
        placeholder='Email'
        onChange={inputHandler}
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        onChange={inputHandler}
      />
      <input
        type='password'
        name='passwordConfirmation'
        placeholder='Confirm Password'
        onChange={inputHandler}
      />
      <button onClick={errorCheck}>Register</button>
      <p>{msg}</p>
    </div>
  );
}

export default App;
