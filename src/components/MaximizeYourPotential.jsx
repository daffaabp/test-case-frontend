import React from 'react';

const MaximizeYourPotential = () => {
return (
<div className="flex flex-col lg:flex-row items-center gap-[100px] p-[100px] bg-white relative">
    {/* Left Section */}
    <div className="w-full lg:w-1/2 flex flex-col items-start">
        <div
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-300 mb-2">
            <span className="text-sm text-gray-500 font-semibold">
                4 Reasons Why We
            </span>
        </div>
        <h1 className="text-3xl lg:text-4xl mb-4 font-poly text-[40px] lg:text-[40px] font-normal">
            Maximize Your Potential
            <br />
            with Strategic HR Solutions
        </h1>
        <div className="relative mb-6">
            <img src="/images/your_potential.svg" alt="Team discussion"
                className="rounded-lg shadow-md w-full object-cover" />
        </div>
    </div>

    {/* Right Section */}
    <div className="w-full lg:w-1/2 flex flex-col gap-8">
        <div className="flex items-start space-x-4">
            <div className="bg-gray-100 p-3 rounded-lg">
                <img src="../../public/images/users.svg" alt="Expert Team Icon" className="w-6 h-6" />
            </div>
            <div>
                <h3 className="text-lg font-semibold">Expert Team</h3>
                <p className="text-gray-600">
                    Our team knows different industries inside out, ensuring tailored solutions for your needs.
                </p>
            </div>
        </div>
        <div className="flex items-start space-x-4">
            <div className="bg-gray-100 p-3 rounded-lg">
                <img src="../../public/images/hourglass.svg" alt="Time Saving Icon" className="w-6 h-6" />
            </div>
            <div>
                <h3 className="text-lg font-semibold">Time Saving</h3>
                <p className="text-gray-600">
                    We have connections all over India, bringing talent from everywhere to you.
                </p>
            </div>
        </div>
        <div className="flex items-start space-x-4">
            <div className="bg-gray-100 p-3 rounded-lg">
                <img src="../../public/images/check.svg" alt="Quality Assurance Icon" className="w-8 h-6" />
            </div>
            <div>
                <h3 className="text-lg font-semibold">Quality Assurance</h3>
                <p className="text-gray-600">
                    Every candidate we present is thoroughly screened to match your requirements perfectly.
                </p>
            </div>
        </div>
        <div className="flex items-start space-x-4">
            <div className="bg-gray-100 p-3 rounded-lg">
                <img src="../../public/images/people-happy.svg" alt="Client Priority Icon" className="w-8 h-6" />
            </div>
            <div>
                <h3 className="text-lg font-semibold">Client Priority</h3>
                <p className="text-gray-600">
                    We offer personalized service and clear communication every step of the way.
                </p>
            </div>
        </div>
    </div>
</div>
);
};

export default MaximizeYourPotential;
