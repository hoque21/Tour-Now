import React from 'react';
import Main from '../assets/video/main.mp4';
import Hero from './Hero';

const Home = () => {
  return (
    <div className="relative">
      <div className="absolute  w-full h-full">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-[650px] object-cover z-[-1]"
          src={Main}
        ></video>
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Home;
