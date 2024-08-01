import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const clientsData = [
  {
    id: 1,
    name: 'Sarah Williams',
    role: 'COO of Lum Inc.',
    description: "Connecting Chains exceeded our expectations with their outstanding recruitment services. They thoroughly grasped our requirements and presented highly qualified candidates. Their dedication and attention to detail made the process seamless.",
    image: '/images/clients.svg',  // Update path if necessary
  },
  {
    id: 2,
    name: 'John Doe',
    role: 'CEO of Tech Corp',
    description: "The team at Connecting Chains was exceptional. They understood our needs and provided us with top-notch candidates. Their professionalism and efficiency were remarkable.",
    image: '/images/clients.svg',  // Update path if necessary
  },
];

const OurClients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : clientsData.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < clientsData.length - 1 ? prevIndex + 1 : 0));
  };

  const { name, role, description, image } = clientsData[currentIndex];

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 bg-white mb-24"> <br /> <br /> <br />
      <div className="text-center mb-6 md:mb-8">
        <button className="px-3 py-1 text-xs md:text-sm font-medium leading-5 text-gray-700 border rounded-full">
          What Our Clients Say
        </button>
        <h2 className="text-2xl md:text-4xl font-normal text-gray-900 mt-2 md:mt-4 [font-family:'Poly-Regular']">
          Hear from Our Clients
        </h2>
      </div>
      <div className="p-4 md:p-6 rounded-lg shadow-md">
        <p className="text-xl md:text-xl text-gray-700 mb-4 md:mb-6 font-satoshi font-normal leading-8 md:leading-10">
          "{description}"
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 md:mb-10">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src={image}
              alt={name}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4"
            />
            <div>
              <p className="text-base md:text-lg font-semibold text-gray-900">{name}</p>
              <p className="text-xs md:text-sm text-gray-600">{role}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              className="bg-gray-200 text-gray-700 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-200 text-gray-700 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
       {/* <br /> <br /> <br /> <br /> */}
    </div>
  );
};

export default OurClients;
