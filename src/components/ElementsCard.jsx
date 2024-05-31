import React from "react";

export default function ElementsCard() {
  return (
    <>
      <div className="flex flex-col p-4 bg-zinc-800 border-zinc-800 shadow-md rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center mr-auto">
            <div className="inline-flex w-12 h-12">
              <img
                src="https://setografi.vercel.app/_astro/profileimage.DHpe1amW_1JoshG.webp"
                alt="wahyu seto pranata"
                className=" relative w-12 h-12 object-cover rounded-2xl"
              />
              <span className="animate-ping absolute w-12 h-12 inline-flex border-2 rounded-2xl border-redOrange opacity-75"></span>
              <span></span>
            </div>

            <div className="flex flex-col ml-3">
              <div className="font-medium leading-none text-gray-100">
                Wahyu Seto Pranata
              </div>
              <p className="text-sm text-gray-500 leading-none mt-1">
                Designer + Developer
              </p>
            </div>
          </div>
          <a
            href="#"
            className="flex-no-shrink text-lg font-medium tracking-wider text-gray-400 hover:text-mediumVermilion transition ease-in duration-300 mr-2"
          >
            <i className="ri-camera-fill"></i>
          </a>
          <a
            hrf="#"
            className="flex-no-shrink text-lg font-medium tracking-wider text-gray-400 hover:text-mediumVermilion transition ease-in duration-300 ml-2"
          >
            <i className="ri-mic-fill"></i>
          </a>
        </div>
      </div>
    </>
  );
}
