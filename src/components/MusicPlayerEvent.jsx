import React from "react";

function MusicPlayerEvent() {
  return (
    <>
      <div className="w-full h-full mx-auto bg-zinc-800">
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
              <label class="slider">
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
      </div>
    </>
  );
}

export default MusicPlayerEvent;
