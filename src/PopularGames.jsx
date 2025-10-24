// PopularGames.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import gamesData from '../src/games.json'

const PopularGames = () => {
  const navigate = useNavigate();
  const sortedGames = [...gamesData].sort((a, b) => b.ratings - a.ratings).slice(0, 3);

  return (
    <div className="grid grid-cols-3 p-4 gap-4 mt-8 bg-gray-800">
      {sortedGames.map(game => (
        <div 
          key={game.id} 
          className="border p-4 rounded-2xl cursor-pointer bg-gray-600 hover:shadow-lg"
          onClick={() => navigate(`/games/${game.id}`)}
        >
          <img src={game.coverPhoto} alt={game.title} className="w-full h-40 object-cover rounded"/>
          <h2 className="font-bold mt-2 text-red-800">{game.title}</h2>
          <p className='text-yellow-800'>Rating: {game.ratings}</p>
        </div>
      ))}
    </div>
  );
};

export default PopularGames;
