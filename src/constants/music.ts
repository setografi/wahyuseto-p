// src/data/music.ts
export interface SongFiles {
  cover: string;
  song: string;
}

export interface Song {
  songName: string;
  artist: string;
  files: SongFiles;
}

export const songs: Song[] = [
  {
    songName: 'Write This Down',
    artist: '2Pac, Pop Smoke',
    files: {
      cover: '/img/cover-song-01.webp',
      song: '/music/twopac_pop_smoke-write_this_down.mp3',
    },
  },
  {
    songName: 'The Scientist',
    artist: 'Coldplay',
    files: {
      cover: '/img/cover-song-02.webp',
      song: '/music/coldplay-the_scientist.mp3',
    },
  },
  {
    songName: 'Psychosocial',
    artist: 'Slipknot',
    files: {
      cover: '/img/cover-song-03.webp',
      song: '/music/slipknot-psychosocial.mp3',
    },
  },
  // Add more songs as needed
];
