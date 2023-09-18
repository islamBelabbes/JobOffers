import React from "react";

const NavMenu = [
  {
    title: "Start a Search",
    path: "/",
  },
  {
    title: "Jobs List",
    path: "/",
  },
  {
    title: "Salary Estimate",
    path: "/",
  },
  {
    title: "Pricing",
    path: "/",
  },
];
function Nav() {
  return (
    <ul className="flex w-full gap-[48px]">
      {NavMenu.map((item, index) => (
        <li
          className="text-primary font-normal leading-6 text-base "
          key={index}
        >
          <a href={item.path}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
