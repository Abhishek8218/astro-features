'use client'


import Image from "next/image";
import React, { useState } from 'react';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
      <div className="md:w-1/2">
        <Image src="/grandeur-logo.webp" alt="Hero" width={150} height={44} className="mb-10" />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Revolutionize Customer Management with Astro Software: Achieve Greater Efficiency and Speed
        </h1>
        <p className="text-lg mb-6">
          Leverage Astro&apos;s Advanced Tools to Optimize Workflow, Improve Response Times, and Enhance Customer Interactions.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a         href="https://wa.me/919149050623?text=Hello,%20Astro"  className="bg-orange-500 text-white px-6 py-2 rounded-full text-center">
            Take a free demo
          </a>
          <button
            onClick={openModal}
            className="bg-blue-500 text-white px-6 py-2 rounded-full"
          >
            Watch Tutorial
          </button>
        </div>
      </div>
      <div className="md:w-[380px] mt-5 flex justify-center">
        <img src="/hero.png" alt="Hero" className="object-contain h-auto" />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-4 rounded-lg w-full max-w-2xl">
            <button
              onClick={closeModal}
              className="absolute top-0 right-2 text-2xl font-bold hover:bg-gray-200 rounded-[100%] px-2 "
            >
              &times;
            </button>
            <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
              <video
                className="absolute top-0 left-0 w-full h-full"
                controls
                src="/astro-intro.mp4" // Path to your video in the public folder
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
