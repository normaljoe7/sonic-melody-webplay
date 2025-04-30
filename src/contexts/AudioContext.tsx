
import React, { createContext, useState, useContext, useRef, useEffect } from 'react';
import { Song } from '../lib/data/songs';

interface AudioContextProps {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  duration: number;
  playSong: (song: Song) => void;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
  seek: (time: number) => void;
  nextSong: () => void;
  prevSong: () => void;
  queue: Song[];
  addToQueue: (song: Song) => void;
  removeFromQueue: (songId: string) => void;
}

const AudioContext = createContext<AudioContextProps | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [queue, setQueue] = useState<Song[]>([]);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    audioRef.current = new Audio();
    
    const audio = audioRef.current;
    
    const handleTimeUpdate = () => {
      if (audio) {
        setProgress(audio.currentTime);
      }
    };
    
    const handleLoadedMetadata = () => {
      if (audio) {
        setDuration(audio.duration);
      }
    };
    
    const handleEnded = () => {
      nextSong();
    };
    
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, []);
  
  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong.audioUrl;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(err => console.error("Playback failed:", err));
      }
    }
  }, [currentSong]);
  
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(err => console.error("Playback failed:", err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);
  
  const playSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };
  
  const togglePlay = () => {
    if (currentSong) {
      setIsPlaying(!isPlaying);
    } else if (queue.length > 0) {
      // Play the first song in the queue if no current song
      playSong(queue[0]);
      setQueue(prevQueue => prevQueue.slice(1));
    }
  };
  
  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
  };
  
  const seek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setProgress(time);
    }
  };
  
  const nextSong = () => {
    if (queue.length > 0) {
      playSong(queue[0]);
      setQueue(prevQueue => prevQueue.slice(1));
    } else {
      setIsPlaying(false);
    }
  };
  
  const prevSong = () => {
    // In a real app, you'd have a history of played songs
    // For now we'll just restart the current song
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setProgress(0);
    }
  };
  
  const addToQueue = (song: Song) => {
    setQueue(prevQueue => [...prevQueue, song]);
  };
  
  const removeFromQueue = (songId: string) => {
    setQueue(prevQueue => prevQueue.filter(song => song.id !== songId));
  };
  
  const value = {
    currentSong,
    isPlaying,
    volume,
    progress,
    duration,
    playSong,
    togglePlay,
    setVolume,
    seek,
    nextSong,
    prevSong,
    queue,
    addToQueue,
    removeFromQueue,
  };
  
  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
