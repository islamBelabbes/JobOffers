import React from "react";
import ListingItem from "./ListingItem";
import filter from "../../assets/filter.svg";
import { useFilter, useModal } from "../../Store";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getJobs } from "../../api/jobs.Api";
import ListingItemSkeleton from "../skeleton/ListingItemSkeleton";
import ReactPaginate from "react-paginate";
import { calculateTotalPages } from "../../utility/pagination.Utility";
import styles from "../Shared/Style";

function Listing() {
  const openModal = useModal((state) => state.openModal);
  const Filter = useFilter((state) => state.filter);
  const {
    isLoading,
    isError,
    data: jobs,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["jobs", Filter],
    getNextPageParam: (page) => page?.nextPage,
    queryFn: ({ pageParam = 1 }) => getJobs(Filter, pageParam),
    refetchOnWindowFocus: false,
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        {/* Jobs Count  */}
        <h1 className=" text-primary text-[32px] font-bold leading-[48px] ">
          {isLoading ||
          isError ||
          jobs?.pages[jobs?.pages.length - 1] === undefined ? (
            <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
              <div className="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-60"></div>
            </div>
          ) : (
            `${jobs?.pages[jobs?.pages?.length - 1]?.jobs.length} Jobs`
          )}
        </h1>

        {/* Open Side Filter Modal */}
        <div className="" onClick={() => openModal("filterModal")}>
          <img
            className="w-[40px] h-[40px] object-contain cursor-pointer xl:hidden"
            src={filter}
            alt="filter"
          />
        </div>
      </div>

      {/* Display Jobs */}
      <div className="flex flex-col gap-4 ">
        {isLoading ||
        isError ||
        jobs?.pages[jobs?.pages.length - 1] === undefined ? (
          Array(5)
            .fill(0)
            .map((item, index) => <ListingItemSkeleton key={index} />)
        ) : jobs?.pages[jobs?.pages.length - 1]?.jobs?.length > 0 ? (
          jobs?.pages[jobs?.pages.length - 1]?.jobs?.map((job, index) => (
            <ListingItem key={index} data={job} />
          ))
        ) : (
          <h1 className="text-primary text-[20px] font-medium leading-[30px] text-center">
            No Jobs Found.{" "}
          </h1>
        )}
      </div>

      {/* pagination */}

      <div
        id="pag"
        className={isFetchingNextPage ? "cursor-not-allowed" : null}
      >
        <div
          className={`flex ${
            isFetchingNextPage && "opacity-50 pointer-events-none"
          }`}
        >
          {!isLoading && !isError && (
            <ReactPaginate
              className="flex items-center gap-4 mx-auto"
              nextLinkClassName={`bg-white ${styles.primaryBorder} py-[8px] px-[16px] text-[16px] text-normal`}
              previousLinkClassName={`bg-white ${styles.primaryBorder} py-[8px] px-[16px] text-[16px] text-normal`}
              pageLinkClassName={`${styles.primaryBorder} py-[8px] px-[16px] text-[16px] text-normal`}
              activeLinkClassName="bg-[#3575E2] text-white"
              disabledLinkClassName="cursor-not-allowed opacity-50"
              breakLabel="..."
              nextLabel=">"
              onPageChange={() => fetchNextPage()}
              pageCount={calculateTotalPages(
                jobs?.pages[0]?.total,
                jobs?.pages[0]?.limit
              )}
              previousLabel="<"
              renderOnZeroPageCount={null}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Listing;
