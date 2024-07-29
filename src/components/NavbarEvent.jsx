import React from "react";

function NavbarEvent({ onSectionChange }) {
  return (
    <>
      <nav className="flex w-full md:w-[48rem] items-center justify-start mx-auto mt-5">
        <ul className="flex justify-between bg-zinc-800 gap-x-2 p-2 rounded-xl">
          <button
            className="w-full bg-transparent text-whiteText text-base font-lexendDeca font-medium rounded-lg p-2 transition-all duration-300 cursor-pointer hover:transform-gpu hover:bg-whiteText hover:text-zinc-800"
            onClick={() => onSectionChange("project")}
          >
            Projects
          </button>

          <button
            className="w-full bg-transparent text-whiteText text-base font-lexendDeca font-medium rounded-lg p-2 transition-all duration-300 cursor-pointer hover:transform-gpu hover:bg-whiteText hover:text-zinc-800"
            onClick={() => onSectionChange("blog")}
          >
            Blogs
          </button>

          <button
            className="w-full bg-transparent text-whiteText text-base font-lexendDeca font-medium rounded-lg p-2 transition-all duration-300 cursor-pointer hover:transform-gpu hover:bg-whiteText hover:text-zinc-800"
            onClick={() => onSectionChange("about")}
          >
            About
          </button>
        </ul>
      </nav>
    </>
  );
}

export default NavbarEvent;
