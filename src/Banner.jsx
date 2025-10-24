// Banner.jsx
import React from 'react';
import Slider from 'react-slick';
import gamesData from '../src/games.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const bannerGames = gamesData.slice(0, 3);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <Slider {...settings}>
      {bannerGames.map(game => (
        <div key={game.id}>
          <img src={game.coverPhoto} alt={game.title} className="w-full h-64 object-cover"/>
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
