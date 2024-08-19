import React from "react";

function NavbarEvent({ onSectionChange }) {
  return (
    <>
      <nav className="w-full max-w-lg flex justify-center items-center mt-5 px-4">
        <ul className="w-full flex justify-between bg-zinc-800 gap-x-2 p-2 rounded-xl">
          <button
            className="w-full bg-transparent text-whiteText text-sm md:text-base font-lexendDeca font-medium rounded-lg py-2 px-3 transition-all duration-300 cursor-pointer hover:transform-gpu hover:bg-whiteText hover:text-zinc-800"
            onClick={() => onSectionChange("project")}
          >
            Projects
          </button>

          <button
            className="w-full bg-transparent text-whiteText text-sm md:text-base font-lexendDeca font-medium rounded-lg py-2 px-3 transition-all duration-300 cursor-pointer hover:transform-gpu hover:bg-whiteText hover:text-zinc-800"
            onClick={() => onSectionChange("blog")}
          >
            Blogs
          </button>

          <button
            className="w-full bg-transparent text-whiteText text-sm md:text-base font-lexendDeca font-medium rounded-lg py-2 px-3 transition-all duration-300 cursor-pointer hover:transform-gpu hover:bg-whiteText hover:text-zinc-800"
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
