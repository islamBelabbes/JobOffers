import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import { useFilter } from "../../Store";
import Button from "../Shared/Button";
import { setQueryStringParameter } from "../../utility/utility";

function Search() {
  const setFilter = useFilter((state) => state.setFilter);
  const filter = useFilter((state) => state.filter);
  const [searchVAL, setSearchVAL] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { title } = Object.fromEntries(formData);
    setFilter({ ...filter, title: title });
    setQueryStringParameter("title", title);
  };

  const clearInput = () => {
    setFilter({ ...filter, title: "" });
    setQueryStringParameter("title", "");
    setSearchVAL("");
  };
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const titleParam = searchParams.get("title");
    if (!titleParam) return;
    setSearchVAL(titleParam);
  }, []);

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
      <form className="flex flex-col lg:flex-row " onSubmit={submitHandler}>
        <SearchInput
          searchVAL={searchVAL}
          setSearchVAL={setSearchVAL}
          clearInput={clearInput}
        />
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
