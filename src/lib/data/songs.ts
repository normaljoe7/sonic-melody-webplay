
export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number; // in seconds
  coverUrl: string;
  audioUrl: string;
}

export const songs: Song[] = [
  {
    id: "1",
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: 203,
    coverUrl: "https://via.placeholder.com/300?text=Blinding+Lights",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    id: "2",
    title: "Don't Start Now",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    duration: 183,
    coverUrl: "https://via.placeholder.com/300?text=Don't+Start+Now",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: "3",
    title: "Dance Monkey",
    artist: "Tones and I",
    album: "The Kids Are Coming",
    duration: 210,
    coverUrl: "https://via.placeholder.com/300?text=Dance+Monkey",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },
  {
    id: "4",
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    album: "Fine Line",
    duration: 174,
    coverUrl: "https://via.placeholder.com/300?text=Watermelon+Sugar",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  },
  {
    id: "5",
    title: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    duration: 203,
    coverUrl: "https://via.placeholder.com/300?text=Levitating",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
  },
  {
    id: "6",
    title: "Save Your Tears",
    artist: "The Weeknd",
    album: "After Hours",
    duration: 215,
    coverUrl: "https://via.placeholder.com/300?text=Save+Your+Tears",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
  },
  {
    id: "7",
    title: "Mood",
    artist: "24kGoldn ft. iann dior",
    album: "El Dorado",
    duration: 191,
    coverUrl: "https://via.placeholder.com/300?text=Mood",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
  },
  {
    id: "8",
    title: "Montero",
    artist: "Lil Nas X",
    album: "Montero",
    duration: 198,
    coverUrl: "https://via.placeholder.com/300?text=Montero",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
  },
  {
    id: "9",
    title: "Bad Habits",
    artist: "Ed Sheeran",
    album: "=",
    duration: 230,
    coverUrl: "https://via.placeholder.com/300?text=Bad+Habits",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
  },
  {
    id: "10",
    title: "Stay",
    artist: "The Kid LAROI, Justin Bieber",
    album: "F*CK LOVE 3",
    duration: 141,
    coverUrl: "https://via.placeholder.com/300?text=Stay",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
  }
];

export const playlists = [
  { id: "1", name: "Chill Vibes", coverUrl: "https://via.placeholder.com/300?text=Chill+Vibes" },
  { id: "2", name: "Workout Mix", coverUrl: "https://via.placeholder.com/300?text=Workout+Mix" },
  { id: "3", name: "Throwback Hits", coverUrl: "https://via.placeholder.com/300?text=Throwback+Hits" },
  { id: "4", name: "Road Trip", coverUrl: "https://via.placeholder.com/300?text=Road+Trip" },
];

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}
