import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of the animations in milliseconds
      easing: 'ease-in-out', // easing function
      once: true, // whether animation should happen only once
      mirror: false // whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className="h-screen bg-black/20 flex justify-center items-center bg-cover bg-center relative">
      <div className="container flex flex-col items-center text-center p-4">
        <div className="text-white mb-8">
          <p
            data-aos="fade-down"
            data-aos-delay="300"
            className="text-xl font-mono font-semibold"
          >
            Our Package
          </p>
          <p
            data-aos="fade-down"
            data-aos-delay="300"
            className="text-3xl font-semibold shadow-md mt-4"
          >
            Search Your Destination
          </p>
        </div>

        <div  data-aos="fade-down"
            data-aos-delay="
            600"
            className="bg-white rounded-md p-4 shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col items-start">
              <label htmlFor="destination" className="text-gray-700 font-semibold mb-2">
                Search Your Destination
              </label>
              <input
                type="text"
                name="destination"
                id="destination"
                placeholder="Dubai"
                className="w-full bg-gray-100 my-2 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="checkin" className="text-gray-700 font-semibold mb-2">
                Check-in Date
              </label>
              <input
                type="date"
                name="checkin"
                id="checkin"
                className="w-full bg-gray-100 my-2 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="checkout" className="text-gray-700 font-semibold mb-2">
                Check-out Date
              </label>
              <input
                type="date"
                name="checkout"
                id="checkout"
                className="w-full bg-gray-100 my-2 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-full py-2 px-6 font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
