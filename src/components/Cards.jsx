import React from 'react';
import display from '../assets/display.jpeg'
import cover from '../assets/cover.avif'
import motherboard from '../assets/mi-mobile-motherboard.jpeg'
import battery from '../assets/battery-module.png'
import circuits from '../assets/circuits.jpeg'
import camera from '../assets/camera.jpeg'
import speaker from '../assets/speakers.jpeg'
import type_c from '../assets/type-c.webp'


const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {generateCards()}
    </div>
  );
};

const generateCards = () => {
  const cardData = [
    {
      imageUrl:display,
      text: 'Mobile display',
    },
    {
      imageUrl: cover,
      text: 'Mobile back covers',
    },
    {
      imageUrl: motherboard,
      text: 'LED TV Motherboard',
    },
    {
      imageUrl: battery,
      text: ' Battery module',
    },
    {
      imageUrl: speaker,
      text: 'Mobile Speakers',
    },
    {
      imageUrl: type_c,
      text: 'Type-c Ports',
    },
    {
      imageUrl: camera,
      text: 'Mobile phone camera',
    },
    {
        imageUrl:circuits,
        text: 'Mobile circuits'
    }

  ];

  return cardData.map((card, index) => (
    <>
    <div className="p-6">
    <div
      key={index}
      className="w-56 text-orange-500 h-64 m-4 p-2 pt-4 bg-slate-300 border border-gray-300 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <img  src={card.imageUrl} alt={card.text} className="mx-auto h-32 rounded-md" />
      <p className="text-center mt-2">{card.text}</p>
    </div>
    </div>
    
    </>
   
  ));
};

export default Cards;
