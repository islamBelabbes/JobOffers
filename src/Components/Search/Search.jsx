import React from "react";
import SearchInput from "./SearchInput";
import { useFilter } from "../../Store";
import Button from "../Shared/Button";

function Search() {
  const setFilter = useFilter((state) => state.setFilter);
  const filter = useFilter((state) => state.filter);
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { title } = Object.fromEntries(formData);
    setFilter({ ...filter, title: title });
  };
  return (
    <div className="w-full py-[80px] flex gap-[40px] flex-col">
      <div>
        <h1 className="text-[56px] font-bold leading-[84px] text-primary text-center xl:text-left">
          Find your{" "}
          <span className="text-[56px] font-bold leading-[84px] text-secondary">
            new job
          </span>{" "}
          today
        </h1>
        <p className="mt-2 font-normal leading-6 text-center xl:text-left xl:text-lg text-primaryLight">
          Thousands of jobs in the computer, engineering and technology sectors
          are waiting for you.
        </p>
      </div>
      <form className="flex" onSubmit={submitHandler}>
        <SearchInput />
        <Button
          variant={"primary"}
          styles={"py-[18px] px-[40px] rounded-none xl:rounded-r "}
          type={"submit"}
        >
          Search
        </Button>
      </form>
    </div>
  );
}

export default Search;
