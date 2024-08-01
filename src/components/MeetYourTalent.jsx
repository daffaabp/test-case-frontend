import React from "react";
import { BrandText } from "./BrandText";
import snowflake from "/images/snowflake-03.svg";

const MeetYourTalent = () => {
return (
<div className="flex flex-col items-start gap-[72px] px-[100px] py-[72px] relative bg-[#eff4fa]">
    <div className="flex flex-col md:flex-row items-center justify-between relative w-full">
        <div className="inline-flex flex-col items-start justify-center gap-10 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start justify-center gap-5 relative flex-[0_0_auto]">
                <div
                    className="inline-flex items-center justify-center gap-2 px-3.5 py-2 relative flex-[0_0_auto] bg-white rounded-[100px] border border-solid border-gray-300">
                    <img src={snowflake} alt="Snowflake" className="!relative !w-6 !h-6" />
                    <p
                        className="relative w-fit mt-[-1.00px] font-satoshi font-bold text-gray-900 text-base tracking-[0] leading-6 whitespace-nowrap">
                        #1 HR Solution in the world
                    </p>
                </div>
                <div className="inline-flex flex-col items-start justify-center gap-6 relative flex-[0_0_auto]">
                    <p
                        className="relative w-fit mt-[-1.00px] font-poly font-normal text-gray-900 text-[56px] tracking-[0] leading-[normal]">
                        Meet Your Talent
                        <br />
                        Sourcing Needs Here
                    </p>
                    <p
                        className="relative w-[465px] font-poly font-normal text-gray-800 text-lg tracking-[0] leading-[27px]">
                        Find top-tier talent effortlessly. From entry-level to executive roles, we connect you with the
                        right
                        candidates.
                    </p>
                </div>
            </div>
            <div className="inline-flex items-start gap-4 relative flex-[0_0_auto]">
                <div
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 relative flex-[0_0_auto] bg-[#18324d] rounded-lg">
                    <div
                        className="relative w-fit mt-[-1.00px] font-satoshi font-medium text-white text-lg tracking-[0] leading-[normal]">
                        Schedule a call
                    </div>
                </div>
                <div
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 relative flex-[0_0_auto] bg-white rounded-lg border border-solid border-gray-300">
                    <div
                        className="relative w-fit mt-[-1.00px] font-satoshi font-medium text-gray-900 text-lg tracking-[0] leading-[normal]">
                        Learn more
                    </div>
                </div>
            </div>
        </div>

        <div className="relative w-full md:w-[592px] h-[534px]">
            <img className="absolute top-0 left-0 w-full h-full object-cover" src="/images/full_frame.svg"
                alt="Combined Graphics" />
        </div>
    </div>

    <div className="relative w-full">
        <BrandText className="!relative !self-stretch !w-full !h-14" />
    </div>
</div>
);
};

export default MeetYourTalent;
