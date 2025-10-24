import React from 'react';
import Banner from './Banner';
import PopularGames from './PopularGames';
import Newsletter from './Newsletter';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <>
    <div  className="container text-center text-red-400 text-3xl mx-auto p-4">
      <Helmet>
        <title>Home | Gamehub</title>
      </Helmet>
      <b><h1>Welcome to Gamehub</h1></b>
    </div>
    <div className="container mx-auto p-4">
      <Banner />
      <PopularGames />
      <Newsletter />
    </div>
    </>
  );
};

export default HomePage;
