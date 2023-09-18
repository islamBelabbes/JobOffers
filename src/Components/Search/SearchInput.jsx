import React from "react";
import SearchIcon from "../../assets/SearchIcon.svg";
import Map from "../../assets/MapPinLine.svg";
import Button from "../Shared/Button";
import styles from "../Shared/Style";
import { CountryDropdown } from "react-country-region-selector";
function SearchInput() {
  return (
    <div className="flex flex-col w-full gap-0 xl:flex-row">
      <div
        className={`p-[18px] flex gap-4 w-full items-center flex-1 ${styles.primaryBorder} rounded-none rounded-l `}
      >
        <img className="w-6 h-6" src={SearchIcon} alt="" />
        <input
          name="title"
          type="text"
          className="text-[rgba(20, 20, 20, 0.50] text-base font-normal leading-6 focus:outline-none w-full"
          placeholder="What position are you looking for ?"
        />
      </div>
      <div
        className={`p-[18px] flex gap-4 w-full items-center  ${styles.primaryBorder} rounded-none xl:basis-[420px] `}
      >
        <img className="w-6 h-6" src={Map} alt="" />
        {/* <input
          type="text"
          name="location"
          className="text-[rgba(20, 20, 20, 0.50] text-base font-normal leading-6 focus:outline-none w-full"
          placeholder="Location"
        /> */}
        <CountryDropdown
          classes="w-full focus-outline-none disabled:opacity-50 disabled:cursor-not-allowed "
          disabled
        />
      </div>
    </div>
  );
}

export default SearchInput;
