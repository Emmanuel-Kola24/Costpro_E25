import React, { useState, useEffect } from 'react';
// import { GlobalContext } from '../context/GlobalContext'; // Fix the incorrect import
import img2 from '../img/d_24w12159_hero_sept_mvm_tires_michelin.jpg'
import img3 from '../img/d_25w01106_hero_apparel.jpg'
import img4 from '../img/d_25w01107_cat_hero_lenovo.png'
import img5 from '../img/d_25w01143_hero_yardline.jpg'
import img6 from '../img/20240923_Marriott_B_US_ComHero_D.jpg'



const images = [img2, img3, img4, img5, img6]; // Array of images

const Hero = () => {
    // const { hero } = useContext(GlobalContext); // Ensure the context is properly used

    const [activeIndex, setActiveIndex] = useState(0); // Track the active slide
    const totalSlides = images.length; // Total number of slides

    // Handler for "next" button
    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    // Handler for "previous" button
    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    // Optional: Auto slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            // prevSlide();
            nextSlide(); // Automatically go to the next slide every 5 seconds
        }, 5000); // Set the interval to 5 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
      
        <div id="default-carousel" className="relative py-2">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        index === activeIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <img
                        src={img}
                        className="block w-full h-full object-cover"
                        alt={`Slide ${index + 1}`}
                    />
                </div>
            ))}
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
            {images.map((_, index) => (
                <button
                    key={index}
                    type="button"
                    className={`w-3 h-3 rounded-full ${
                        index === activeIndex ? 'bg-white' : 'bg-gray-400'
                    }`}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                ></button>
            ))}
        </div>

        <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={prevSlide}
        >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path d="M15 19l-7-7 7-7"></path>
                </svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>

        <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={nextSlide}
        >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path d="M9 5l7 7-7 7"></path>
                </svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div>
);
};

export default Hero;