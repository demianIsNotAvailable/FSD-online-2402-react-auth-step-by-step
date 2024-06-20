import { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { CustomInput } from "../../common/custom-input/CustomInput";

export default function Register() {
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
      <div className='form-container'>
        <h1>Register</h1>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <CustomInput
          type='text'
          name='email'
          placeholder='Email'
          value={email}
          onChange={inputHandler}
        />
        <CustomInput
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={inputHandler}
        />
        <CustomInput
          type='password'
          name='passwordConfirmation'
          placeholder='Confirm Password'
          value={passwordConfirmation}
          onChange={inputHandler}
        />
        <button onClick={errorCheck}>Register</button>
        <p>{msg}</p>
      </div>
    );
}