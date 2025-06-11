// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Chatroom from './pages/chatroom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/chatroom" element={<Chatroom />} />
    </Routes>
  );
}

export default App;
