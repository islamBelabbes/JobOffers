import React from "react";

const NavMenu = [
  {
    title: "Start a Search",
    path: "#",
  },
  {
    title: "Jobs List",
    path: "#",
  },
  {
    title: "Salary Estimate",
    path: "#",
  },
  {
    title: "Pricing",
    path: "#",
  },
];
function Nav() {
  return (
    <ul className="flex w-full gap-[48px]">
      {NavMenu.map((item, index) => (
        <li
          className="text-base font-normal leading-6 cursor-not-allowed text-primary opacity-60 "
          key={index}
        >
          <a className="pointer-events-none" href={item.path}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
