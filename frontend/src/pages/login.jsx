import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';

function Login() {
  const { setUsername } = useContext(UserContext); // ✅ ici c'est correct
  const [pseudo, setPseudo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pseudo.trim()) {
      setUsername(pseudo);
      navigate('/chatroom');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Entre ton pseudo"
        value={pseudo}
        onChange={(e) => setPseudo(e.target.value)}
      />
      <button type="submit">Entrer</button>
    </form>
  );
}

export default Login;
