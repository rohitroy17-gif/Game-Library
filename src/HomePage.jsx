import React from 'react';
import Banner from './Banner';
import PopularGames from './PopularGames';
import Newsletter from './Newsletter';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <>
    <div  className="container text-center text-red-400 text-3xl  max-w-full p-4 bg-gray-800
">
      <Helmet>
        <title>Home | Gamehub</title>
      </Helmet>
      <b><h1>Welcome to Gamehub</h1></b>
    </div>
    <div className="container max-w-full p-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
      <Banner />
      <PopularGames />
      <Newsletter />
    </div>
    </>
  );
};

export default HomePage;
