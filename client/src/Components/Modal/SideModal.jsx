import React from "react";
import Overlay from "./Overlay";

function SideModal({ children, styles, closeStyles }) {
  return (
    <Overlay styles={`items-start justify-end`} closeStyles={closeStyles}>
      <div
        className={`p-3 bg-white rounded overflow-y-auto  slide-in-right  ${styles}`}
      >
        {children}
      </div>
    </Overlay>
  );
}

export default SideModal;
