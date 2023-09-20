import React from "react";
import MapMin from "../../assets/MapPinLineMin.svg";
import CurrencyDollar from "../../assets/CurrencyDollar.svg";
import Clock from "../../assets/Clock.svg";
import CalendarBlank from "../../assets/CalendarBlank.svg";
import parseNumberToShortString from "../../utility/numberToString.Utility";
import { timeAgo, isDateLessThanOneDayAgo } from "../../utility/Date.Utility";
function ListingItem({ data }) {
  const { title, description, company, salary, job_type, location, createdAt } =
    data;
  const details = [
    {
      id: "map",
      title: location,
      icon: MapMin,
    },
    {
      id: "clock",
      title: job_type,
      icon: Clock,
    },
    {
      id: "price",
      title: `${parseNumberToShortString(
        salary.from
      )}-${parseNumberToShortString(salary.to)}`,
      icon: CurrencyDollar,
    },
    {
      id: "calendar",
      title: timeAgo(createdAt),
      icon: CalendarBlank,
    },
  ];
  return (
    <div className="p-6 border border-transparent rounded-[8px] shadow-sm flex gap-6 w-full bg-white hover:border-secondary transition-all duration-400 cursor-pointer  ">
      <div className="hidden xl:block">
        <img width={72} height={74} src={company[0].logo} alt="" />
      </div>
      <div className="w-full">
        <span className="text-lg font-normal text-primary leading-[27px]">
          {company[0].name}
        </span>
        <div className="flex gap-[18px] items-start items-center ">
          <h1 className="flex-1 text-2xl font-medium leading-9 text-primary">
            {title}
          </h1>
          {isDateLessThanOneDayAgo(createdAt) && (
            <p className="px-[6px] py-[2px] flex items-center border border-transparent rounded-[3px] text-white bg-[#7D5AE2] text-[12px] font-medium leading-[18px] ">
              New post
            </p>
          )}
        </div>
        <div className="flex mt-[8px] flex-wrap gap-y-3 ">
          {details.map((detail, index) => (
            <div
              key={index}
              className="flex items-center gap-1 basis-[50%] lg:flex-1 lg:even:justify-start even:justify-end"
            >
              <img src={detail.icon} alt={detail.title} />
              <span className="text-[rgba(20, 20, 20, 0.70)] text-base  font-normal leading-6">
                {detail.title}
              </span>
            </div>
          ))}
        </div>
        <div className="text-[rgba(20, 20, 20, 0.70)] text-base  font-normal leading-6 mt-3">
          {description}
        </div>
      </div>
    </div>
  );
}

export default ListingItem;
