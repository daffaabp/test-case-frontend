import React from 'react';
import CountUp from 'react-countup';

const Excellence = () => {
return (
<div className="flex flex-col lg:flex-row items-center gap-10 px-4 lg:px-[120px] py-14 relative bg-[#eff4fa]">
    <p
        className="text-center lg:text-left text-gray-900 font-poly text-[40px] lg:text-[40px] font-normal tracking-[0] leading-[normal]">
        Your Trusted Partner
        <br />
        in HR Excellence
    </p>
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-2.5 flex-1">
        <div className="flex flex-col items-center gap-3 flex-1">
            <div className="text-gray-900 text-[56px] lg:text-[56px] font-poly font-normal leading-[normal] whitespace-nowrap">
                <CountUp end={251} duration={2.5} />
                +
            </div>
            <div className="text-gray-700 text-lg lg:text-lg font-normal leading-[27px] whitespace-nowrap">
                Talent Hired
            </div>
        </div>
        <div className="w-full lg:w-px lg:h-[68px] h-0 bg-gray-900"></div>
        <div className="flex flex-col items-center gap-3 flex-1">
            <div className="text-gray-900 text-[56px] lg:text-[56px] font-poly font-normal leading-[normal] whitespace-nowrap">
                <CountUp end={50} duration={2.5} />
                +
            </div>
            <div className="text-gray-700 text-lg lg:text-lg font-normal leading-[27px] whitespace-nowrap">
                Companies Work
            </div>
        </div>
        <div className="w-full lg:w-px lg:h-[68px] h-0 bg-gray-900"></div>
        <div className="flex flex-col items-center gap-3 flex-1">
            <div className="text-gray-900 text-[56px] lg:text-[56px] font-poly font-normal leading-[normal] whitespace-nowrap">
                <CountUp end={95} duration={2.5} />
                %
            </div>
            <div className="text-gray-700 text-lg lg:text-lg font-normal leading-[27px] whitespace-nowrap">
                Average Satisfied
            </div>
        </div>
    </div>
</div>
);
};

export default Excellence;
