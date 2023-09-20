import React from "react";
import { layout } from "../Shared/Style";
import Button from "../Shared/Button";
import Location from "./Location";
import Salary from "./Salary";
import EmploymentType from "./EmploymentType";
import { useIsFetching } from "@tanstack/react-query";
function Filter({ handleSubmit, handleChange, values, clearFilter }) {
  const isFetching = useIsFetching(["jobs"]);

  return (
    <form
      onSubmit={handleSubmit}
      className={`${layout.MainContainer} flex flex-col gap-[16px] `}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-primary text-[20px] font-bold leading-[30px]">
          Filter
        </h1>

        {/* Clear Filter (show it only if there is a filter applied) */}
        <Button
          variant={"primary"}
          className=""
          onClick={clearFilter}
          type="button"
          disabled={!Object.values(values).filter(Boolean).length || isFetching}
        >
          clear
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 ">
        <Location onChange={handleChange} value={values} />
        <Salary onChange={handleChange} value={values} />
        <EmploymentType onChange={handleChange} value={values} />
        {/* <PostingDate onChange={handleChange} value={FilterValues} /> */}
      </div>

      {/* Filter Button */}
      <Button disabled={isFetching} variant={"primary"} type={"submit"}>
        Filter
      </Button>
    </form>
  );
}
export default Filter;
