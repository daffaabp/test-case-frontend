import React from 'react';

const NeedsHere = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-[100px] p-[100px] bg-cover bg-center relative"
         style={{ backgroundImage: `url('/images/bg-needs-here.svg')` }}>

      <div className="w-full lg:w-1/2 flex flex-col items-start">
        <h1 className="text-3xl lg:text-6xl mb-6 mt-6 text-white [font-family:'Poly-Regular'] text-[40px] lg:text-[40px] font-normal">
          Meet Your Talent Sourcing Needs Here
        </h1>
        <p className="text-lg md:text-xl text-white mb-6 font-satoshi font-normal">
          Find top-tier talent effortlessly. From entry-level to executive roles,
          we connect you with the right candidates.
        </p>
        <button className="bg-white text-black font-semibold py-2 px-4 rounded-lg shadow-md">
          Schedule a call
        </button>
      </div>

      <div className="hidden lg:flex lg:w-1/2 justify-center items-center">
      </div>
    </div>
  );
};

export default NeedsHere;
 