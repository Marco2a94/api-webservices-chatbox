import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Chatroom from './pages/chatroom';
import { UserProvider } from './context/userContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<Chatroom />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
