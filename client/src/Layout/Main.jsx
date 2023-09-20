import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import EmailSubscribe from "../Components/EmailSubscribe/EmailSubscribe";
import FilterContainer from "../Components/Filter/FilterContainer";
import Header from "../Components/Header/Header";
import ListNewJob from "../Components/ListNewJob/ListNewJob";
import Listing from "../Components/Listing/Listing";
import Search from "../Components/Search/Search";
function Main() {
  return (
    <div className="relative">
      <ToastContainer />
      <div className="max-w-[1440px] w-full  px-[16px] xl:px[64px]  font-sans m-auto ">
        <Header />
        <Search />
      </div>
      <div className="w-full  py-[48px] font-sans m-auto bg-[#FAFAFA]">
        <div className="max-w-[1440px] w-full p-2 xl:px-[64px]  flex gap-[32px] m-auto">
          {/* Left Side + mobile side menu  */}
          <FilterContainer />
          {/* Main Content */}
          <div className="flex-1">
            <Listing />
          </div>

          {/* Right Side */}
          <div className="max-w-[250px] w-full  flex-col gap-4 hidden xl:flex">
            <EmailSubscribe />
            <ListNewJob />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
