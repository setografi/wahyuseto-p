import React from "react";

function MusicPlayerEvent() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#ABC4AA] p-4">
      <div className="relative w-36 h-36">
        <div className="w-fit">
          <div className="w-32 h-32 bg-[#675D50] items-center justify-center animate-rotate flex rounded-full">
            <div className="w-20 h-20 flex items-center justify-center border-y-2 border-y-[#F3DEBA] border-x-2 border-x-[#675D50] rounded-full">
              <div className="w-14 h-14 bg-[#F3DEBA] flex items-center justify-center rounded-full">
                <div className="w-4 h-4 bg-[#675D50] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-fit flex flex-col items-center justify-center mb-2 mr-2 -rotate-45">
          <div className="absolute bottom-0 w-2 h-11 bg-[#F3DEBA] mb-1"></div>
          <div className="w-5 h-5 bg-[#F3DEBA] rounded-full z-[1]"></div>
        </div>
      </div>

      <div className="mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-sm font-medium">The Scientist</h2>
          <h3 className="text-sm mb-1">Coldplay</h3>
        </div>
        <div className="flex items-center justify-between space-x-4">
          <i className="ri-volume-up-line text-base cursor-pointer"></i>
          <div className="flex items-center justify-center gap-4">
            <i className="ri-rewind-line text-base cursor-pointer"></i>
            <i className="ri-play-line text-base cursor-pointer"></i>
            <i className="ri-speed-line text-base cursor-pointer"></i>
          </div>
          <i className="ri-heart-3-line text-base cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayerEvent;
