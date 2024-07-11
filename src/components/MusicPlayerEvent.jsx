import React from "react";

function MusicPlayerEvent() {
  return (
    <>
      {/* <div className="w-full h-full mx-auto bg-zinc-800">
        <div className="flex justify-between items-center px-6 pt-4 pb-2">
          <div className="flex items-center">
            <i className="ri-music-2-line text-goldenRod text-lg"></i>
            <div className="mx-3">
              <h3 className="text-base font-medium text-gray-700 dark:text-gray-200">
                Tabun
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                YOASOBI
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <i className="ri-heart-3-line text-mediumVermilion text-lg"></i>
            <i className="ri-star-line text-gray-400 text-lg"></i>
          </div>
        </div>

        <div className="px-6 pt-2 pb-4">
          <div className="flex items-center">
            <i className="ri-volume-up-line text-gray-400 text-lg"></i>
            <div className="w-full flex items-center mx-3">
              <label className="slider">
                <input type="range" defaultValue={50} class="level"></input>
              </label>
            </div>
            <p className="text-sm text-gray-400">50%</p>
          </div>

          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span> 00:03 </span>
            <span> 3:35 </span>
          </div>
        </div>
      </div> */}

      <div className="w-full h-full flex flex-col items-center justify-center bg-[#ABC4AA]">
        <div className="relative w-40 h-40">
          <div className="w-fit">
            <div className="w-36 h-36 bg-[#675D50] items-center justify-center animate-rotate flex rounded-full">
              <div className="w-24 h-24 flex items-center justify-center border-y-2 border-y-[#F3DEBA] border-x-2 border-x-[#675D50] rounded-full">
                <div className="w-16 h-16 bg-[#F3DEBA] flex items-center justify-center rounded-full">
                  <div className="w-5 h-5 bg-[#675D50] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-fit flex flex-col items-center justify-center mb-2 mr-2 -rotate-45">
            <div className="absolute bottom-0 w-2 h-12 bg-[#F3DEBA] mb-1"></div>
            <div className="w-6 h-6 bg-[#F3DEBA] rounded-full z-[1]"></div>
          </div>
        </div>

        <div className="mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-sm font-medium">The Scientist</h2>
            <h3 className="text-sm mb-1">Coldplay</h3>
          </div>
          <div className="flex items-center justify-between space-x-8">
            <i className="ri-volume-up-line text-sm cursor-pointer"></i>
            <div className="flex items-center justify-center gap-4">
              <i className="ri-rewind-line text-sm cursor-pointer"></i>
              <i className="ri-play-line text-sm cursor-pointer"></i>
              <i className="ri-speed-line text-sm cursor-pointer"></i>
            </div>
            <i className="ri-heart-3-line text-sm cursor-pointer"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default MusicPlayerEvent;
