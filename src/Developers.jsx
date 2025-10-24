// src/pages/Developers.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const developers = [
  {
    id: 1,
    name: "Krafton",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Krafton_Full_Logo.png",
    bio: "Creators of PUBG, known for immersive online gaming experiences.",
    website: "https://www.krafton.com/",
  },
  {
    id: 2,
    name: "Epic Games",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg",
    bio: "Makers of Fortnite and Unreal Engine, pioneers in 3D gaming.",
    website: "https://www.epicgames.com/",
  },
  {
    id: 3,
    name: "InnerSloth",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/The_Wolf_Among_Us_Logo.png",
    bio: "An indie studio best known for the viral hit 'Among Us'.",
    website: "https://www.innersloth.com/",
  },
];

const Developers = () => {
  return (
    <>
    <div className="container text-center text-red-400 text-3xl mx-auto p-4">
      <Helmet>
        <title>Developers | Gamehub</title>
      </Helmet>
      <b><h1>Featured Game Developers</h1></b>
    </div>
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Developers</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {developers.map((dev) => (
          <div
            key={dev.id}
            className="border rounded-xl p-4 flex flex-col items-center shadow-md hover:shadow-lg transition"
          >
            <img
              src={dev.image}
              alt={dev.name}
              className="w-24 h-24 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold">{dev.name}</h3>
            <p className="text-gray-600 text-center mt-2">{dev.bio}</p>
            <a
              href={dev.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-blue-600 hover:underline"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Developers;
