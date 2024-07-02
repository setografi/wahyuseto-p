import React from "react";

function NavbarEvent({ onSectionChange }) {
  return (
    <>
      <nav className="max-w-3xl w-full mx-auto grid grid-cols-2 gap-4 items-start mt-5">
        <ul className="flex justify-between bg-zinc-800 gap-x-2 p-2 rounded-xl">
          <button
            className="w-full bg-transparent text-whiteText text-base font-lexendDeca font-medium rounded-lg p-2 transition-all duration-300 cursor-pointer hover:transform-gpu hover:bg-whiteText hover:text-zinc-800"
            onClick={() => onSectionChange("project")}
          >
            Projects
          </button>

          <button
            className="w-full bg-transparent text-whiteText text-base font-lexendDeca font-medium rounded-lg p-2 transition-all duration-300 cursor-pointer hover:transform-gpu hover:bg-whiteText hover:text-zinc-800"
            onClick={() => onSectionChange("skill")}
          >
            Skills
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
