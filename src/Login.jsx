import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { login, googleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/"); // redirect to home
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  const handleGoogleLogin = async () => {
    await googleLogin();
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 rounded text-black"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 rounded text-black"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-blue-600 py-2 rounded mb-3">Login</button>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 py-2 rounded"
        >
          Continue with Google
        </button>
        <p className="mt-2 text-sm">
        <Link to="/forgot-password" className="text-blue-500 hover:underline">
        Forgot password?
       </Link></p>
 
        <p className="mt-3 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-400 underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
