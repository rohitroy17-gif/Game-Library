import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router";
import defaultImage from "../src/assets/569109798_1542145253605208_6687226149270206611_n.jpg";

const UpdateProfile = () => {
  const { user, updateUserInfo } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateUserInfo(name, photoURL || defaultImage); // fallback
    setMessage("Profile updated successfully!");
    setTimeout(() => navigate("/my-profile"), 1000);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-4">Update Information</h2>

      {message && <p className="text-green-500">{message}</p>}

      <form onSubmit={handleUpdate} className="w-80 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          className="border p-2 rounded"
        />
        <img
          src={photoURL || user.photoURL || defaultImage}
          alt="Preview"
          className="w-24 h-24 rounded-full mx-auto mt-2"
        />

        <button type="submit" className="bg-green-600 text-white py-2 rounded">
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
