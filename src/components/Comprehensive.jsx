import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper-bundle.min.css';

const sections = [
    {
        title: 'Executive Search',
        description: 'We specialize in finding top executives who can lead your organization to success. Our thorough search process ensures we identify leaders with the vision and experience you need.',
    },
    {
        title: 'Permanent Staffing',
        description: 'We offer permanent staffing solutions to ensure your team has the best talents.',
    },
    {
        title: 'Contract Staffing',
        description: 'Our contract staffing services provide you with flexibility and skilled professionals for specific projects.',
    },
    {
        title: 'Outsourcing Recruitment',
        description: 'We manage the recruitment process from start to finish, providing you with the best candidates.',
    },
];

const bgImages = [
    '/images/bg-1.svg',
    '/images/bg-2.svg',
    '/images/bg-3.svg',
    '/images/bg-4.svg',
];

const Comprehensive = () => {
    const [openSection, setOpenSection] = useState('Executive Search');

    return (
        <div className="max-w-7xl mx-auto px-8 py-16 bg-white">
            <div className="text-center mb-12">
                <button className="px-6 py-2 text-sm font-medium text-gray-700 border rounded-full">
                    What We Provide
                </button>
            </div>

            <div className="text-center mb-12">
                <h2 className="text-5xl font-normal -mt-6 font-poly w-full max-w-4xl mx-auto">
                    Comprehensive <br /> Solutions for Your Success
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row bg-blue-50 rounded-lg shadow-lg overflow-hidden">
                {/* Left Section */}
                <div className="w-full lg:w-1/2 p-8">
                    {sections.map((section) => (
                        <div key={section.title} className="mb-6">
                            <button
                                onClick={() => setOpenSection(section.title)}
                                className="w-full flex justify-between items-center py-4 text-lg font-semibold text-gray-700 rounded-lg"
                            >
                                {section.title}
                                <span className="text-xl">{openSection === section.title ? '−' : '+'}</span>
                            </button>
                            <AnimatePresence>
                                {openSection === section.title && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="text-gray-600 mt-2"
                                    >
                                        <p>{section.description}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <hr className="my-6 border-gray-300" />
                        </div>
                    ))}
                </div>

                {/* Right Section with Swiper Slider */}
                <div className="w-full lg:w-1/2 relative">
                    <Swiper
                        loop={true}
                        autoplay={{ delay: 1000 }} // Change the delay as needed
                        effect="fade"
                        className="h-full"
                    >
                        {bgImages.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: `url(${image})` }}
                                >
                                    <div className="p-8 h-full flex flex-col justify-end bg-black bg-opacity-50">
                                        <h3 className="text-2xl font-bold text-white mb-4">Finding Top Leaders</h3>
                                        <button className="bg-white text-gray-900 px-6 py-3 rounded-md shadow-md w-[150px] font-bold">Learn More</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Comprehensive;
