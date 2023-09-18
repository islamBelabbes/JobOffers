import React from "react";
import SideModal from "../Modal/SideModal";
import { UserButton, useUser } from "@clerk/clerk-react";
import Button from "../Shared/Button";
import { useModal } from "../../Store";
function MobileNav() {
  const { isSignedIn, isLoaded } = useUser();
  const openModal = useModal((state) => state.openModal);

  return (
    <SideModal
      styles={"rounded-none h-full w-full xl:w-[400px]"}
      closeStyles={"xl:hidden translate-x-[-20px] translate-y-[20px]"}
      disableClose={true}
    >
      <div className="flex justify-end mt-16">
        <div className="gap-4 min-w-[200px] hidden xl:flex ">
          {isLoaded ? (
            isSignedIn ? null : (
              <>
                <Button
                  variant={"secondary"}
                  onClick={() => openModal("loginModal")}
                >
                  Log in
                </Button>
                <Button
                  variant={"primary"}
                  onClick={() => openModal("SignUpModal")}
                >
                  Sign Up
                </Button>
              </>
            )
          ) : null}
        </div>
      </div>
    </SideModal>
  );
}

export default MobileNav;
