import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from '../API';
import Button from "./Button";
import { Wrapper } from "./Login.styles";
import { Context } from "../Context";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const [_user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(requestToken, username, password);
      console.log('sessionId:', sessionId)
      setUser({ sessionId: sessionId.session_id, username })
      navigate('/');

    } catch (error) {
      setError(true);
    }
  }

  const handleInput = event => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  }

  return (
    <Wrapper>
      {error && <div>Wrong username or password!</div>}
      <label>Username:</label>
      <input
        type='text'
        name='username'
        value={username}
        onChange={handleInput}
      />
      <input
        type='password'
        name='password'
        value={password}
        onChange={handleInput}
      />
      <Button text='Login' handleClick={handleSubmit} />

    </Wrapper>
  );
}

export default Login;