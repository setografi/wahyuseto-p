import React from "react";

export default function ElementsCard() {
  return (
    <>
      <div className="flex flex-col p-4 bg-zinc-800 border-zinc-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
        <div className="flex items-center justify-between">
          <div className="flex items-center mr-auto">
            <div className="inline-flex w-12 h-12">
              <img
                src=""
                alt="wahyu seto pranata"
                className=" relative w-12 h-12 object-cover rounded-2xl"
              />
              <span className="animate-ping absolute w-12 h-12 inline-flex border-2 rounded-2xl border-vermilionMain opacity-75"></span>
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
            className="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            hrf="#"
            className="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
