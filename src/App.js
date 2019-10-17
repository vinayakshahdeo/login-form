import React, { useState } from 'react';
import './App.css';
import { login } from './components/Utils';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, showLoader] = useState(false);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = async (e) =>{
    e.preventDefault();

    setError('');
    showLoader(true);

    try {
      await login({ username, password });
      setIsLoggedIn(true);
    } catch (error) {
      setError('Incorrect username or password!');
      showLoader(false);
      setUsername('');
      setPassword('');
    }
  }
  const onLogout = (e)=>{
    setIsLoggedIn(false)
    setUsername('');
    setPassword('');
    setError('');
    showLoader(false);
  }
  return (
    <div className='App'>
      <div id='login-container'>
      {isLoggedIn ? <><h1>Hello {username}!</h1>
      <button onClick= {onLogout}>Log Out</button></> : <>
      <form className="form" onSubmit={onSubmit}>
{error && <p className="error">{error}</p> }
<p>Please Login</p>
<input type="text" placeholder="username" value={username} onChange={e=>setUsername(e.currentTarget.value)}/>
<input type="password" placeholder="password" autoComplete="new-password" value={password} onChange={e=>setPassword(e.currentTarget.value)}/>
<button className="submit" type="submit" disabled={isLoading}>{isLoading ? 'Logging In': 'Log In'}</button>
</form></>}
      </div>
    </div>
  );
}

export default App;
