import React from 'react';

function MusicPlayerEvent() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[#ABC4AA] p-4">
      <div className="relative h-36 w-36">
        <div className="w-fit">
          <div className="flex h-32 w-32 animate-rotate items-center justify-center rounded-full bg-[#675D50]">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-x-2 border-y-2 border-x-[#675D50] border-y-[#F3DEBA]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F3DEBA]">
                <div className="h-4 w-4 rounded-full bg-[#675D50]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 mb-2 mr-2 flex w-fit -rotate-45 flex-col items-center justify-center">
          <div className="absolute bottom-0 mb-1 h-11 w-2 bg-[#F3DEBA]"></div>
          <div className="z-[1] h-5 w-5 rounded-full bg-[#F3DEBA]"></div>
        </div>
      </div>

      <div className="mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-sm font-medium">The Scientist</h2>
          <h3 className="mb-1 text-sm">Coldplay</h3>
        </div>
        <div className="flex items-center justify-between space-x-4">
          <i className="ri-volume-up-line cursor-pointer text-base"></i>
          <div className="flex items-center justify-center gap-4">
            <i className="ri-rewind-line cursor-pointer text-base"></i>
            <i className="ri-play-line cursor-pointer text-base"></i>
            <i className="ri-speed-line cursor-pointer text-base"></i>
          </div>
          <i className="ri-heart-3-line cursor-pointer text-base"></i>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayerEvent;
