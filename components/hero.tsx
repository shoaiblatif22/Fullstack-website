import React from "react";
export const Hero = () => {
  return <section className="relative bg-gradient-to-b from-cream via-brown-50 to-white" aria-label="Hero section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brown-800 sm:text-5xl md:text-6xl">
            Pamper Your Pets
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-brown-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover premium accessories for your beloved furry friends
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md">
              <a href="/shop" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-cream bg-sienna-500 hover:bg-sienna-600 transition-colors md:py-4 md:text-lg md:px-10" aria-label="Browse our shop">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};