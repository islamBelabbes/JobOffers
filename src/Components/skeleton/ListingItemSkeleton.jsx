import React from "react";

function ListingItemSkeleton() {
  return (
    <div
      role="status"
      className="animate-pulse p-6 border border-transparent rounded-[8px] shadow-sm flex gap-6 w-full bg-white hover:border-secondary transition-all duration-400 cursor-pointer  "
    >
      <div className="hidden xl:block">
        <div className="h-[72px] bg-gray-300  dark:bg-gray-600 w-[72px]"></div>
      </div>
      <div className="w-full">
        <span className="text-lg font-normal text-primary leading-[27px]">
          <div className="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-60"></div>
        </span>
        <div className="flex gap-[18px] items-center mt-1 ">
          <h1 className="text-2xl font-medium leading-9 text-primary">
            <div className="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-60"></div>
          </h1>
        </div>
        <div className="flex mt-[8px]">
          {Array(4)
            .fill(0)
            .map((detail, index) => (
              <div key={index} className="flex items-center flex-1 gap-1">
                <div className="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-14"></div>
              </div>
            ))}
        </div>
        <div className="text-[rgba(20, 20, 20, 0.70)] text-base  font-normal leading-6 mt-3">
          <div className="w-full h-5 bg-gray-300 rounded-full dark:bg-gray-600"></div>
          <div className="w-full h-5 mt-3 bg-gray-300 rounded-full dark:bg-gray-600"></div>
        </div>
      </div>
    </div>
  );
}

export default ListingItemSkeleton;
