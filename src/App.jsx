import React from 'react';
import { Link, Route, Routes } from 'react-router';

function App() {
  return (
    <div>
      <nav className="flex justify-between h-8 bg-green-200 px-4 items-center">
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
        </div>
        <div className="flex gap-4">
          <Link to="login">Log in</Link>
          <Link to="register">Register</Link>
        </div>
      </nav>
      <Routes>
        {/* Public */}
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
        <Route path="login" element={<h1>Log in</h1>} />
        <Route path="register" element={<h1>Register</h1>} />

        {/* Private */}
        <Route path="admin">
          <Route path="dashboard" element={<h1>Dashboard Page</h1>} />
          <Route path="manage" element={<h1>Manage Page</h1>} />
          <Route path="setting" element={<h1>Settings Page</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
