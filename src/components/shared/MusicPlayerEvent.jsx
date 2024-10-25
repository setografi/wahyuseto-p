import React from 'react';

function MusicPlayerEvent() {
  return (
    <div className="bg-accent-cyan-500 flex w-full flex-col items-center justify-center rounded p-4 md:flex-row">
      <div className="relative h-36 w-36">
        <div className="w-fit">
          <div className="bg-dark-background-secondary flex h-32 w-32 animate-rotate items-center justify-center rounded-full">
            <div className="border-x-dark-background-secondary border-y-dark-text-secondary flex h-20 w-20 items-center justify-center rounded-full border-x-2 border-y-2">
              <div className="bg-dark-text-secondary flex h-14 w-14 items-center justify-center rounded-full">
                <div className="bg-dark-background-secondary h-4 w-4 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 mb-2 mr-2 flex w-fit -rotate-45 flex-col items-center justify-center">
          <div className="bg-dark-text-secondary absolute bottom-0 mb-1 h-11 w-2"></div>
          <div className="bg-dark-text-secondary z-[1] h-5 w-5 rounded-full"></div>
        </div>
      </div>

      <div className="text-dark-text-primary md:mx-auto">
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-base font-medium">The Scientist</h2>
          <h3 className="mb-1 text-base hover:underline">Coldplay</h3>
        </div>

        <div className="flex items-start justify-between space-x-4">
          <i className="ri-volume-up-line hover:text-light-text-primary cursor-pointer text-lg"></i>
          <div className="flex items-center justify-center gap-4">
            <i className="ri-rewind-line hover:text-light-text-primary cursor-pointer text-lg"></i>
            <i className="ri-play-line hover:text-light-text-primary cursor-pointer text-lg"></i>
            <i className="ri-speed-line hover:text-light-text-primary cursor-pointer text-lg"></i>
          </div>
          <i className="ri-heart-3-line hover:text-light-text-primary cursor-pointer text-lg"></i>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayerEvent;
