import React from "react";

export default function ProfileButton() {
  return (
    <>
      <div className="flex gap-4 ml-4 text-center justify-center items-center">
        <a
          href=""
          target="_blank"
          className="flex-no-shrink bg-redOrange hover:bg-vividRed px-5 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-redOrange hover:border-vividRed text-white rounded-full transition ease-in duration-300"
        >
          Follow
        </a>
        <a
          href="mailto:wahyusetotkrx18@gmail"
          target="_blank"
          className="flex-no-shrink bg-redOrange hover:bg-vividRed px-5 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-redOrange hover:border-vividRed text-white rounded-full transition ease-in duration-300"
        >
          Contact Me
        </a>
      </div>
    </>
  );
}
