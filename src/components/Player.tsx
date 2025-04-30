
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, VolumeX, Volume1 } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { useAudio } from '../contexts/AudioContext';
import { formatTime } from '../lib/data/songs';

export const Player = () => {
  const { 
    currentSong, 
    isPlaying, 
    volume, 
    progress,
    duration,
    togglePlay, 
    setVolume, 
    seek,
    nextSong, 
    prevSong 
  } = useAudio();
  
  const [isSeeking, setIsSeeking] = useState(false);
  const [seekValue, setSeekValue] = useState(0);
  
  const handleSeekChange = (value: number[]) => {
    setIsSeeking(true);
    setSeekValue(value[0]);
  };
  
  const handleSeekComplete = (value: number[]) => {
    seek(value[0]);
    setIsSeeking(false);
  };
  
  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
  };
  
  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeX className="w-5 h-5" />;
    if (volume < 0.5) return <Volume1 className="w-5 h-5" />;
    return <Volume2 className="w-5 h-5" />;
  };

  useEffect(() => {
    if (!isSeeking && progress !== seekValue) {
      setSeekValue(progress);
    }
  }, [progress, isSeeking]);

  return (
    <div className="h-24 bg-spotify-darkGray border-t border-gray-800 flex items-center px-4 text-spotify-white fixed bottom-0 w-full">
      {/* Currently Playing */}
      <div className="w-1/4 flex items-center">
        {currentSong ? (
          <>
            <img 
              src={currentSong.coverUrl} 
              alt={`${currentSong.title} album art`} 
              className="h-14 w-14 rounded shadow mr-3" 
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium truncate">{currentSong.title}</span>
              <span className="text-xs text-spotify-lightGray truncate">{currentSong.artist}</span>
            </div>
          </>
        ) : (
          <div className="flex items-center text-spotify-lightGray">
            <span>No song selected</span>
          </div>
        )}
      </div>
      
      {/* Player Controls */}
      <div className="w-2/4 flex flex-col items-center justify-center">
        <div className="flex items-center mb-3 gap-6">
          <button className="text-spotify-lightGray hover:text-spotify-white">
            <Shuffle className="w-4 h-4" />
          </button>
          <button 
            className="text-spotify-lightGray hover:text-spotify-white" 
            onClick={prevSong}
          >
            <SkipBack className="w-5 h-5" />
          </button>
          <button 
            className="bg-spotify-white hover:bg-opacity-80 text-black rounded-full p-2 flex items-center justify-center"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          <button 
            className="text-spotify-lightGray hover:text-spotify-white" 
            onClick={nextSong}
          >
            <SkipForward className="w-5 h-5" />
          </button>
          <button className="text-spotify-lightGray hover:text-spotify-white">
            <Repeat className="w-4 h-4" />
          </button>
        </div>
        
        {/* Seek bar */}
        <div className="w-full flex items-center gap-3">
          <span className="text-xs text-spotify-lightGray w-10 text-right">
            {formatTime(seekValue)}
          </span>
          <Slider 
            defaultValue={[0]}
            max={duration}
            step={1}
            value={[seekValue]}
            onValueChange={handleSeekChange}
            onValueCommit={handleSeekComplete}
            className="w-full max-w-md cursor-pointer"
          />
          <span className="text-xs text-spotify-lightGray w-10">
            {formatTime(duration)}
          </span>
        </div>
      </div>
      
      {/* Volume Controls */}
      <div className="w-1/4 flex justify-end items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          {getVolumeIcon()}
          <Slider
            defaultValue={[1]}
            max={1}
            step={0.01}
            value={[volume]}
            onValueChange={handleVolumeChange}
            className="w-24 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
