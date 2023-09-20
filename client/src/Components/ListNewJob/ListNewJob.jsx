import React from "react";
import Button from "../Shared/Button";
import { layout } from "../Shared/Style";
import { useAuth } from "@clerk/clerk-react";
import { useModal } from "../../Store";
import notify, { dismiss } from "../../notify/notify";

function JobUpload() {
  const { isSignedIn } = useAuth();
  const OpenModal = useModal((state) => state.openModal);
  const clickHandler = () => {
    if (!isSignedIn) {
      return OpenModal("loginModal");
    }
    return notify("this feature is not available yet", "info");
  };
  return (
    <div className={layout.MainContainer}>
      <h1 className="text-primary text-[20px] font-bold leading-[30px] whitespace-nowrap">
        🚀 Get noticed faster
      </h1>
      <p className="text-[rgba(20, 20, 20, 0.80)] text-sm font-normal leading-[21px]">
        Quis eiusmod deserunt cillum laboris magna cupidatat esse labore irure
        quis cupidatat in.
      </p>
      <Button variant={"primary"} styles={"w-full"} onClick={clickHandler}>
        Upload your resume
      </Button>
    </div>
  );
}

export default JobUpload;
