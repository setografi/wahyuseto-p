import React, { useState, useRef } from 'react';
import { songs } from '../../constants/music';

const MusicPlayer: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleChangeMusic = (
    options: {
      isPrev?: boolean;
      playListIndex?: number;
    } = {}
  ) => {
    let newIndex = currentSongIndex;

    if (options.playListIndex !== undefined) {
      newIndex = options.playListIndex;
    } else if (options.isPrev) {
      newIndex = Math.max(0, currentSongIndex - 1);
    } else {
      newIndex = Math.min(songs.length - 1, currentSongIndex + 1);
    }

    setCurrentSongIndex(newIndex);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      audioRef.current.currentTime = percent * audioRef.current.duration;
    }
  };

  const progressWidth = audioRef.current ? (currentTime / audioRef.current.duration) * 100 : 0;

  return (
    <div className="music-player glassmorphism glow-shadow flex h-56 w-full flex-col overflow-hidden rounded-lg border border-accent-lavender-400/60 p-4 backdrop-blur-2xl md:h-60 lg:h-72">
      <audio
        ref={audioRef}
        src={songs[currentSongIndex].files.song}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => handleChangeMusic()}
      />
      <div className="slider relative flex items-center justify-start space-x-2 pb-4">
        <div className="slider__content group relative">
          <div className="h-16 w-16 overflow-hidden rounded-3xl">
            <img
              src={songs[currentSongIndex].files.cover}
              alt={songs[currentSongIndex].songName}
              className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-125 group-hover:grayscale-0"
            />
          </div>

          <button
            className="absolute inset-0 flex items-center justify-center"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <i className="ri-pause-fill text-4xl text-white"></i>
            ) : (
              <i className="ri-play-fill text-4xl text-white"></i>
            )}
          </button>
        </div>

        <div className="flex w-full flex-col items-center justify-center space-y-2 px-4">
          <div className="slider__controls flex w-full items-center justify-between">
            <button onClick={() => handleChangeMusic({ isPrev: true })}>
              <i className="ri-skip-left-fill text-3xl"></i>
            </button>
            <div className="flex flex-col items-center">
              <div className="font-ibmPlexsans text-lg font-bold text-neutral-100 md:text-xl">
                {songs[currentSongIndex].artist}
              </div>
              <div className="text-sm text-neutral-500">{songs[currentSongIndex].songName}</div>
            </div>
            <button onClick={() => handleChangeMusic()}>
              <i className="ri-skip-right-fill text-3xl"></i>
            </button>
          </div>

          <div
            className="progress h-2 w-full cursor-pointer rounded-full bg-neutral-800/60"
            onClick={handleScrub}
          >
            <div
              className="progress__bar h-full rounded-full bg-gradient-to-tl from-purple-500 to-accent-lavender-500"
              style={{ width: `${progressWidth}%` }}
            />
          </div>
        </div>
      </div>

      <ul className="music-player__playlist flex flex-col justify-start overflow-y-auto">
        {songs.map((song, index) => (
          <li
            key={index}
            className={`flex cursor-pointer items-center border-b border-neutral-300 p-2 ${
              index === currentSongIndex ? 'rounded-md bg-neutral-800/60' : ''
            }`}
            onClick={() => handleChangeMusic({ playListIndex: index })}
          >
            <img
              src={song.files.cover}
              alt={song.songName}
              className="mr-4 h-16 w-16 rounded-3xl grayscale"
            />
            <div>
              <div className="text-sm font-bold md:text-base">{song.songName}</div>
              <div className="text-xs text-neutral-300 md:text-sm">{song.artist}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicPlayer;
