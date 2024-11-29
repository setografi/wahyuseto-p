import React, { useEffect, useRef, useState } from 'react';

function MusicPlayerEvent() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="glassmorphism border-border-100 flex h-fit w-full flex-col items-center justify-center rounded-lg border p-4 backdrop-blur-2xl md:flex-row">
      <audio ref={audioRef} src="/music/mixkit-fun-jazz-647.mp3" loop />

      <div className="relative h-36 w-36">
        <div className="w-fit">
          <div className="flex h-32 w-32 animate-rotate items-center justify-center rounded-full bg-dark-background-secondary">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-x-2 border-y-2 border-x-dark-background-secondary border-y-dark-text-primary">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-dark-text-primary">
                <div className="h-4 w-4 rounded-full bg-dark-background-secondary"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 mb-2 mr-2 flex w-fit -rotate-45 flex-col items-center justify-center">
          <div className="absolute bottom-0 mb-1 h-11 w-2 bg-dark-text-primary"></div>
          <div className="z-[1] h-5 w-5 rounded-full bg-dark-text-primary"></div>
        </div>
      </div>

      <div className="text-dark-text-primary md:mx-auto">
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-base font-medium">Fun Jazz</h2>
          <h3 className="mb-1 text-base hover:underline">Francisco Alvear</h3>
        </div>

        <div className="flex items-start justify-between space-x-4">
          <i className="ri-volume-up-line cursor-not-allowed text-lg text-dark-text-tertiary"></i>
          <div className="flex items-center justify-center gap-4">
            <i className="ri-rewind-line cursor-pointer text-lg transition-colors duration-500 hover:text-dark-text-secondary"></i>
            <i
              className={`${
                isPlaying ? 'ri-pause-line' : 'ri-play-line'
              } cursor-pointer text-lg transition-colors duration-500 hover:text-dark-text-secondary`}
              onClick={togglePlayPause}
            ></i>
            <i className="ri-speed-line cursor-pointer text-lg transition-colors duration-500 hover:text-dark-text-secondary"></i>
          </div>
          <i className="ri-heart-3-fill cursor-pointer text-lg text-accent-magenta-600 transition-colors duration-500"></i>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayerEvent;
