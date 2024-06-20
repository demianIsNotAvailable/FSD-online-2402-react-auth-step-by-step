import { useState } from "react";
import { Link } from "react-router-dom";
import { CustomInput } from "../../common/custom-input/CustomInput";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const inputHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const loginHandler = () => {
    if (credentials.email === "" || credentials.password === "") {
      setMsg("Email and password are required.");
    } else {
      setMsg("Login successful.");
    }
  };

  return (
    <div className='form-container'>
      <h1>Login</h1>
      <Link to='/'>Home</Link>
      <Link to='/register'>Register</Link>
      <CustomInput
        type='email'
        name='email'
        placeholder='Email'
        value={credentials.email}
        onChange={inputHandler}
      />
      <CustomInput
        type='password'
        name='password'
        placeholder='Password'
        value={credentials.password}
        onChange={inputHandler}
      />
      <button onClick={loginHandler}>Login</button>
      <p>{msg}</p>
    </div>
  );
}
