import React, { useEffect } from "react";
import ListingItem from "./ListingItem";
import filter from "../../assets/filter.svg";
import { useFilter, useModal } from "../../Store";
import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../../api/jobs.Api";
import ListingItemSkeleton from "../skeleton/ListingItemSkeleton";
import notify from "../../notify/notify";
function Listing() {
  const openModal = useModal((state) => state.openModal);
  const Filter = useFilter((state) => state.filter);
  const jobsQuery = useQuery({
    queryKey: ["jobs", Filter],
    queryFn: () => getJobs(Filter),
    refetchOnWindowFocus: false,
  });

  if (jobsQuery.isError) {
    notify("Something want wrong please try again later", "error");
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        {/* Jobs Count */}
        <h1 className=" text-primary text-[32px] font-bold leading-[48px] ">
          {jobsQuery.isLoading || jobsQuery.isError ? (
            <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
              <div className="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-60"></div>
            </div>
          ) : (
            `${jobsQuery?.data?.data?.length} Jobs`
          )}
        </h1>

        {/* Open Side Filter Modal */}
        <div className="" onClick={() => openModal("filterModal")}>
          <img
            className="w-[40px] h-[40px] object-contain cursor-pointer"
            src={filter}
            alt="filter"
          />
        </div>
      </div>

      {/* Display Jobs */}
      <div className="flex flex-col gap-4 ">
        {jobsQuery.isLoading || jobsQuery.isError ? (
          Array(5)
            .fill(0)
            .map((item, index) => <ListingItemSkeleton key={index} />)
        ) : jobsQuery.data?.data.length > 0 ? (
          jobsQuery.data?.data.map((job, index) => (
            <ListingItem key={index} data={job} />
          ))
        ) : (
          <h1 className="text-primary text-[20px] font-medium leading-[30px] text-center">
            No Jobs Found.{" "}
          </h1>
        )}
      </div>
    </div>
  );
}

export default Listing;
