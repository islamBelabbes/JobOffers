import React from "react";
import Logo from "../../assets/Logo.svg";
import Menu from "../../assets/Menu.svg";
import Nav from "./Nav";
import Button from "../Shared/Button";
import { useModal } from "../../Store";
import { UserButton, useUser } from "@clerk/clerk-react";
import MobileNav from "./MobileNav";
function Header() {
  const { isSignedIn, isLoaded } = useUser();

  const openModal = useModal((state) => state.openModal);
  return (
    <div className="flex items-center justify-between w-full py-4">
      {/* <MobileNav /> */}
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="hidden xl:block">
        <Nav />
      </div>
      <div className="gap-4 min-w-[200px] flex ">
        {isLoaded ? (
          isSignedIn ? (
            <div className="ml-auto">
              <UserButton />
            </div>
          ) : (
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
  );
}

export default Header;
