import React from 'react';
import Main from '../assets/video/main.mp4';
import Hero from './Hero';

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        src={Main}
      ></video>
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 flex items-center justify-center h-full">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
