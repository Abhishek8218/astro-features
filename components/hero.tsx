import Image from "next/image";

import React from 'react'

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          All your online orders need just one restaurant billing software
        </h1>
        <p className="text-lg mb-6">
          Accept multiple orders, manage riders, reconcile order payments and do much more without any hassle!
        </p>
        <button className="bg-red-500 text-white px-6 py-2 rounded-full">
          Take a free demo
        </button>
      </div>
      <div className="md:w-1/2 mt-5 flex justify-center">
        <Image src="/hero.webp" alt="Hero" width={300} height={300} className="w-[300px] md:w-[450px] h-[280px] md:h-[350px]" />
      </div>
    </section>
  )
}

export default HeroSection
