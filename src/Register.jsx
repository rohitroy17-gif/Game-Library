import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { register, googleLogin } = useAuth();
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const upper = /[A-Z]/.test(password);
    const lower = /[a-z]/.test(password);
    return upper && lower && password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setError(
        "Password must have 1 uppercase, 1 lowercase letter, and be at least 6 characters long."
      );
      return;
    }
    try {
      await register(name, email, password, photoURL);
      navigate("/");
    } catch (err) {
      setError("Failed to register. Try again.");
    }
  };

  const handleGoogleLogin = async () => {
    await googleLogin();
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-3 rounded text-black"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 rounded text-black"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Photo URL"
          className="w-full p-2 mb-3 rounded text-black"
          onChange={(e) => setPhotoURL(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 rounded text-black"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-green-600 py-2 rounded mb-3">Register</button>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 py-2 rounded"
        >
          Continue with Google
        </button>
        <p className="mt-3 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
