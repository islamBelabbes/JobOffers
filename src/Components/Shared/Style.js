const borderStyle = "border border-[rgba(20, 20, 20, 0.10)] rounded";

const styles = {
  primaryBorder: borderStyle,
  primaryInput: `text-[rgba(20, 20, 20, 0.50] text-base font-normal leading-6 focus:outline-none w-full px-[12px] py-[8px] ${borderStyle}`,
  primaryRadio: "w-4 h-4 fill-white",
};

export const layout = {
  MainContainer: `p-6 flex flex-col gap-4 bg-white ${borderStyle} rounded-lg`,
};

export default styles;
