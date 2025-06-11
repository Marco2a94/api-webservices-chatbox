import React, { userConext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext} from '../context/userContext';

function Login() {
  const { setUser } = userContext();
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      setUser({ username });
      navigate('/chat');
    } else {
      alert('Please enter a username');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;