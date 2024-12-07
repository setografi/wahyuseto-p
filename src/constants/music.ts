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
      song: '/music/2Pac_Pop_Smoke-Write_This_Down.mp3',
    },
  },
  {
    songName: 'Example Song 2',
    artist: 'Artist Name 2',
    files: {
      cover: '/img/logo_6.png',
      song: '/music/mixkit-fun-jazz-647.mp3',
    },
  },
  // Add more songs as needed
];
