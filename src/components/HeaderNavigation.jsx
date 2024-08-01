import React from 'react';
import logo from '/images/connecting-chains.svg';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function HeaderNavigation() {
  return (
    <div className="w-full h-[68px] bg-[#ffffff4c] flex items-center justify-between px-[5%] max-w-screen-xl mx-auto">
      <img className="w-[126px] h-[72px] object-cover" alt="Logo" src={logo} />
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <span className="font-medium text-black text-lg">Solutions</span>
          <ChevronDownIcon className="w-6 h-6 text-black" />
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-medium text-black text-lg">Industries</span>
          <ChevronDownIcon className="w-6 h-6 text-black" />
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-medium text-black text-lg">Resources</span>
          <ChevronDownIcon className="w-6 h-6 text-black" />
        </div>
        <span className="font-medium text-black text-lg">Pricing</span>
        <span className="font-medium text-black text-lg">Company</span>
      </div>
      <div className="bg-[#244b74] text-white px-6 py-2 rounded-lg flex items-center">
        <span className="font-medium text-lg">Schedule a call</span>
      </div>
    </div>
  );
}

export default HeaderNavigation;
