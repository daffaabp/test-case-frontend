import React from 'react';

const TrustedPartner = () => {
return (
<div className="flex flex-col lg:flex-row items-center gap-[100px] p-[100px] bg-[#ffffff] relative">
    <img className="w-full lg:w-[544px] h-[544px] object-cover mb-10 lg:mb-0" alt="Frame"
        src="/images/excellence_hr.svg" />
    <div className="flex flex-col items-start justify-center gap-10 w-full lg:w-[590px]">
        <div className="flex flex-col items-start gap-5 w-full">
            <div
                className="inline-flex items-center justify-center gap-2 px-3.5 py-2 bg-white rounded-full border border-solid border-gray-300">
                <p className="font-bold text-gray-900 text-base whitespace-nowrap">
                    Get To Know With Us
                </p>
            </div>
            <div className="flex flex-col items-start gap-6 w-full">
                <p className="text-gray-900 text-4xl lg:text-5xl font-poly font-bold leading-tight">
                    Your Trusted Partner
                    <br />
                    in HR Excellence
                </p>
                <p className="text-gray-700 text-lg leading-7">
                    We are a team of seasoned HR professionals dedicated to helping businesses thrive through strategic
                    HR
                    management. With years of experience and a commitment to excellence, we tailor solutions to meet
                    your
                    unique needs.
                </p>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-4 w-full">
            <div
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#18324d] rounded-lg w-full lg:w-auto">
                <div className="text-white text-lg font-medium">
                    Schedule a call
                </div>
            </div>
            <div
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white rounded-lg border border-solid border-gray-300 w-full lg:w-auto">
                <div className="text-gray-900 text-lg font-medium">
                    Learn more
                </div>
            </div>
        </div>
    </div>
</div>
);
};

export default TrustedPartner;
