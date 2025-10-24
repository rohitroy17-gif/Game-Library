// GameDetails.jsx
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import gamesData from '../src/games.json'
import { useAuth } from './AuthContext';

const GameDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();

  if (!user) return <Navigate to="/login" />;

  const game = gamesData.find(g => g.id === id);
  if (!game) return <p>Game not found</p>;

  return (
    <div className="container mx-auto p-4">
      <img src={game.coverPhoto} alt={game.title} className="w-full h-64 object-cover rounded"/>
      <h1 className="text-2xl font-bold mt-4">{game.title}</h1>
      <p className="mt-2">{game.description}</p>
      <p className="mt-2">Category: {game.category}</p>
      <p className="mt-2">Developer: {game.developer}</p>
      <p className="mt-2">Rating: {game.ratings}</p>
      <a href={game.downloadLink} target="_blank" rel="noreferrer" className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded">Download</a>
    </div>
  );
};

export default GameDetails;
