import React from 'react';

function NavbarEvent({ onSectionChange }) {
  return (
    <>
      <nav className="mt-5 flex w-full max-w-lg items-center justify-center px-4">
        <ul className="flex w-full justify-between gap-x-2 rounded-xl bg-zinc-800 p-2">
          <button
            className="w-full cursor-pointer rounded-lg bg-transparent px-3 py-2 font-lexendDeca text-sm font-medium text-whiteText transition-all duration-300 hover:transform-gpu hover:bg-whiteText hover:text-zinc-800 md:text-base"
            onClick={() => onSectionChange('project')}
          >
            Projects
          </button>

          <button
            className="w-full cursor-pointer rounded-lg bg-transparent px-3 py-2 font-lexendDeca text-sm font-medium text-whiteText transition-all duration-300 hover:transform-gpu hover:bg-whiteText hover:text-zinc-800 md:text-base"
            onClick={() => onSectionChange('blog')}
          >
            Blogs
          </button>

          <button
            className="w-full cursor-pointer rounded-lg bg-transparent px-3 py-2 font-lexendDeca text-sm font-medium text-whiteText transition-all duration-300 hover:transform-gpu hover:bg-whiteText hover:text-zinc-800 md:text-base"
            onClick={() => onSectionChange('about')}
          >
            About
          </button>
        </ul>
      </nav>
    </>
  );
}

export default NavbarEvent;
