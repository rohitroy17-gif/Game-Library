// src/pages/MyProfile.jsx
import React from "react";
import { useAuth } from "./AuthContext";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import image from "../src/assets/569109798_1542145253605208_6687226149270206611_n.jpg"

const MyProfile = () => {
  const { user } = useAuth();

  if (!user) return <p className="text-center mt-10">Please log in first.</p>;

  return (
    <>
    <div className="container text-center text-red-400 text-3xl mx-auto p-4">
      <Helmet>
        <title>My Profile | Gamehub</title>
      </Helmet>
      <b><h1>My Profile</h1></b>
    </div>
    <div className="flex flex-col items-center mt-10">
      <img
       src={user.photoURL || image}
        alt="Profile"
        className="w-24 h-24 rounded-full mb-4"
      />
      <h2 className="text-2xl font-bold">{user.displayName || "No Name"}</h2>
      <p className="text-gray-600">{user.email}</p>

      <Link
        to="/update-profile"
        className="mt-6 bg-blue-600 text-white py-2 px-4 rounded"
      >
        Update Information
      </Link>
    </div>
    </>
  );
};

export default MyProfile;
