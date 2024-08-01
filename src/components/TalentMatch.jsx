import React from "react";

export const TalentMatch = () => {
  return (
    <div className="absolute top-0 left-[274px] w-[278px] h-[140px] flex flex-col items-center justify-center gap-3 p-5 bg-white rounded-xl">
      <img className="relative w-[46px] h-[46px] object-cover" alt="Frame" src="/images/match.svg" />
      <div className="relative w-fit font-satoshi font-medium text-gray-900 text-xl tracking-[0] leading-[normal]">
        Talent Match!
      </div>
    </div>
  );
};
