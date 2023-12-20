import React, { useEffect } from "react";
import close from "../../assets/close.svg";
import { useModal } from "../../Store";
function Overlay({ children, styles, closeStyles }) {
  const CloseModal = useModal((state) => state.closeModal);
  useEffect(() => {
    document.querySelector("html").style.overflow = "hidden";
    return () => {
      document.querySelector("html").style.overflow = "auto";
    };
  }, []);
  return (
    <div className={`overlay h-full ${styles || ""} `} onClick={CloseModal}>
      {/* <div
        className={`absolute top-0 right-0 translate-y-2  translate-x-[-30px] w-[25px] cursor-pointer ${
          closeStyles && closeStyles
        }`}
        onClick={CloseModal}
      >
        <img src={close} alt="" />
      </div> */}

      <div
        className="flex items-center justify-center w-full h-full cursor-auto xl:w-auto "
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Overlay;
