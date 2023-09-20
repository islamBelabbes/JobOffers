import React from "react";

const ButtonVariants = {
  primary:
    "py-2 px-5 bg-secondary rounded text-white font-medium text-base disabled:opacity-50 disabled:cursor-not-allowed",
  secondary:
    "py-2 px-5 bg-white rounded-[6px] text-primary border border-[rgba(20, 20, 20, 0.10)] font-medium text-base",
};
function Button({ variant, styles, children, onClick, disabled, type }) {
  return (
    <button
      className={`${ButtonVariants[variant]} ${styles}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
