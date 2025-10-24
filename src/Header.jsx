// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import image from "../src/assets/569109798_1542145253605208_6687226149270206611_n.jpg"

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold">Gamehub</Link>

      {/* Navigation */}
      <nav className="flex items-center gap-6">
        <Link to="/">Home</Link>
        <Link to="/developers">Developers</Link>

        {!user ? (
          <>
            <Link to="/login" className="bg-blue-600 px-3 py-1 rounded">Login</Link>
            <Link to="/register" className="bg-green-600 px-3 py-1 rounded">Register</Link>
          </>
        ) : (
          <>
            <img
               src={user.photoURL || image}
              alt="Profile"
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={() => window.location.href = '/my-profile'}
            />
            <button onClick={logout} className="bg-red-600 px-3 py-1 rounded">Logout</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

