import React from 'react';
import logo from '/images/connecting-chains.svg';

const Footer = () => {
  return (
    <footer className="bg-[#0f202d] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="mb-6 flex items-center">
            <div>
              <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
              <h2 className="text-2xl font-bold">Connecting Chains</h2>
              <p className="mt-2 max-w-xs">
                Find top-tier talent effortlessly. From entry-level to executive roles, we connect you with the
                right candidates.
              </p>
              <div className="flex mt-4 space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <img src="/images/linkedin-brands-solid.svg" alt="LinkedIn" className="w-6 h-6 " />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <img src="/images/instagram-brands-solid.svg" alt="Instagram" className="w-6 h-6 " />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <img src="/images/x-twitter-brands-solid.svg" alt="Twitter" className="w-6 h-6 " />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <img src="/images/facebook-brands-solid.svg" alt="Facebook" className="w-6 h-6 " />
                </a>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold">About</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-400">Locations</a></li>
              <li><a href="#" className="hover:text-gray-400">Our Process</a></li>
              <li><a href="#" className="hover:text-gray-400">Our Story</a></li>
              <li><a href="#" className="hover:text-gray-400">Careers</a></li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold">Menu</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-400">Consultancy</a></li>
              <li><a href="#" className="hover:text-gray-400">Counselling</a></li>
              <li><a href="#" className="hover:text-gray-400">Recruitment</a></li>
              <li><a href="#" className="hover:text-gray-400">Talent Sourcing</a></li>
              <li><a href="#" className="hover:text-gray-400">See All Services</a></li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold">Support</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-600 pt-6 flex justify-between items-center">
          <p className="text-sm">&copy; 2024 Connecting Chains. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Legal Notice</a>
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
