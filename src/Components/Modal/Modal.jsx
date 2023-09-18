import React from "react";
import Overlay from "./Overlay";

function Modal({ styles, children }) {
  return (
    <Overlay>
      <div className={`p-3 bg-white rounded h-96 w-96 ${styles}`}>
        {children}
      </div>
    </Overlay>
  );
}

export default Modal;
