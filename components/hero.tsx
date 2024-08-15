import Image from "next/image";

import React from 'react'

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
      <div className="md:w-1/2">
      <Image src="/grandeur-logo.webp" alt="Hero" width={150} height={44} className="mb-10" />
        <h1 className="text-3xl md:text-4xl font-bold mb-4 ">
        Revolutionize Customer Management with Astro Software: Achieve Greater Efficiency and Speed
        </h1>
        <p className="text-lg mb-6">
        Leverage Astro&apos;s Advanced Tools to Optimize Workflow, Improve Response Times, and Enhance Customer Interactions.
        </p>
        <a href="https://acm-orcin.vercel.app/" className="bg-orange-500 text-white px-6 py-2 rounded-full">
          Take a free demo
        </a>
      </div>
      <div className="md:w-1/2 mt-5 flex justify-center">
        <Image src="/hero.png" alt="Hero" width={300} height={300} className="w-[300px] md:w-[450px] h-[280px] md:h-[350px]" />
      </div>
    </section>
  )
}

export default HeroSection
