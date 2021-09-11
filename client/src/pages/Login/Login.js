import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
import history from '../../history';

import "./styles.css";

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [err, setErr] = useState('');
  useEffect(() => {}, [setToken]);

  const handleSubmit = async e => {
    e.preventDefault();
    axios.post("http://localhost:5000/login",
      { email: username, password: password })
      .then(res => {
        setErr('');
        const token = res.data.token;
        setToken(token);
        localStorage.setItem("token", token);
        localStorage.setItem("role", res.data.role);
        history.push(res.data.role.toLowerCase().replace("_", "-"));
      })
      .catch((err) => {
        if (err.response.status === 401) setErr('Incorrect username or password');
        else setErr('Something went wrong, please try again');
      });
  }
  return (
    <div className="login-wrapper">
      <h1 className="login-title">Log In To Your Account</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input className="username" type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input className="password" type="password" onChange={e => setPassword(e.target.value)} />
        </label>

        <span id="err">{err}</span>
        <div className="login-button">
          <button className="login" type="submit">Log In</button>
        </div>
      </form>
    </div>

  )
}

// prop type checking for token
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
}


