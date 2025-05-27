// components/Hero.tsx
"use client";
import Image from "next/image";
import Elean from "../../../assets/images/elearn.png";
import { useEffect, useState } from "react";

// Words to cycle through for "Smart" and "Future"
const smartWords = ["Savvy", "Ingenious", "Adaptive"];
const futureWords = ["Next-gen", "Visionary", "Forthcoming"];

const Hero = () => {
  // State for dynamic text animation
  const [smartText, setSmartText] = useState("Smart");
  const [futureText, setFutureText] = useState("Future");

  useEffect(() => {
    const smartInterval = setInterval(() => {
      setSmartText((prev) => {
        const currentIndex = smartWords.indexOf(prev);
        return smartWords[(currentIndex + 1) % smartWords.length];
      });
    }, 3000);

    const futureInterval = setInterval(() => {
      setFutureText((prev) => {
        const currentIndex = futureWords.indexOf(prev);
        return futureWords[(currentIndex + 1) % futureWords.length];
      });
    }, 3000);

    return () => {
      clearInterval(smartInterval);
      clearInterval(futureInterval);
    };
  }, []);

  return (
    <section className="hero-section bg-[#FFF8DC] py-12 md:py-24">
      {" "}
      {/* Cornsilk background */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Text and Search */}
        <div
          className="w-full md:w-1/2 space-y-6 animate-slide-in-left" // Animation for slide-in
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Ilearnhub is the{" "}
            <span className="text-[#FF7F50] inline-block">{smartText}</span>{" "}
            text for{" "}
            <span className="text-[#FF7F50] inline-block">{futureText}</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Ilearnhub is a global training provider located worldwide. Join us
            to unlock your potential.
          </p>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for location"
              className="w-full md:w-64 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition duration-300">
              Continue
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 animate-slide-in-right">
          <Image
            src={Elean} // Replace with your undraw image path
            alt="Learning Illustration"
            width={500}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
