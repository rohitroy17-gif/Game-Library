// src/pages/UpdateProfile.jsx
import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const { user, updateUserInfo } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUserInfo(name, photoURL);
      setMessage("Profile updated successfully!");
      setTimeout(() => navigate("/my-profile"), 1000);
    } catch (err) {
      setError("Failed to update profile");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-4">Update Information</h2>

      {error && <p className="text-red-500">{error}</p>}
      {message && <p className="text-green-500">{message}</p>}

      <form onSubmit={handleUpdate} className="w-80 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Photo URL"
          className="border p-2 rounded"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />

        <button type="submit" className="bg-green-600 text-white py-2 rounded">
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
