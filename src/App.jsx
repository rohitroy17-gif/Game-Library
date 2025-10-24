// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Layout from './Layout';
import HomePage from './HomePage';
import MyProfile from './MyProfile';
import Login from './Login';
import Register from './Register';
import NotFound from './NotFound';
import GameDetails from './GameDetails';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import Developers from './Developers';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/games/:id" element={<GameDetails />} />
            <Route
                path="/game/:id"
                element={
               <PrivateRoute>
               <GameDetails />
               </PrivateRoute>
              }/>
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;

