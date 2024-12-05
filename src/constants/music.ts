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
    songName: 'Example Song 1',
    artist: 'Artist Name 1',
    files: {
      cover: '/img/profileimage2.jpg',
      song: '/music/mixkit-fun-jazz-647.mp3',
    },
  },
  {
    songName: 'Example Song 2',
    artist: 'Artist Name 2',
    files: {
      cover: '/img/profileimage2.jpg',
      song: '/music/mixkit-fun-jazz-647.mp3',
    },
  },
  // Add more songs as needed
];
