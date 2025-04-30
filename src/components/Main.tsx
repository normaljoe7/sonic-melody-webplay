
import React, { useState } from 'react';
import { songs, playlists, formatTime } from '../lib/data/songs';
import { useAudio } from '../contexts/AudioContext';
import { Search, Play, Pause } from 'lucide-react';

export const Main = () => {
  const { currentSong, isPlaying, playSong, togglePlay } = useAudio();
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredSongs = searchQuery 
    ? songs.filter(song => 
        song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.album.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : songs;
  
  return (
    <div className="flex-1 overflow-auto bg-gradient-to-b from-spotify-dark to-spotify-base pb-24">
      {/* Search bar */}
      <div className="sticky top-0 bg-spotify-dark px-8 py-4 z-10">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-spotify-lightGray" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for songs, artists, or albums"
            className="w-full bg-white bg-opacity-10 rounded-full pl-10 pr-4 py-2 text-sm text-spotify-white placeholder:text-spotify-lightGray focus:outline-none focus:ring-2 focus:ring-spotify-green"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="px-8 py-4">
        <h1 className="text-3xl font-bold text-spotify-white">Good afternoon</h1>
        
        {/* Quick access playlists section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {playlists.map((playlist) => (
            <div 
              key={playlist.id} 
              className="bg-spotify-card bg-opacity-60 hover:bg-opacity-80 transition-all rounded-md flex items-center overflow-hidden h-20 group"
            >
              <img
                src={playlist.coverUrl}
                alt={playlist.name}
                className="h-20 w-20 object-cover"
              />
              <span className="font-bold px-4 truncate flex-1">{playlist.name}</span>
              <div className="opacity-0 group-hover:opacity-100 mr-4 transition-opacity">
                <button 
                  className="bg-spotify-green rounded-full p-3 shadow-lg hover:scale-105 transition-transform"
                >
                  <Play className="h-4 w-4 text-black" fill="black" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Recently played section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-spotify-white">Recently played</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 mt-4">
            {songs.slice(0, 7).map((song) => (
              <div 
                key={song.id} 
                className="bg-spotify-card p-4 rounded-md hover:bg-spotify-mediumGray transition-colors duration-300 group cursor-pointer"
                onClick={() => playSong(song)}
              >
                <div className="relative">
                  <img 
                    src={song.coverUrl} 
                    alt={song.title} 
                    className="w-full aspect-square rounded-md object-cover mb-4 shadow-lg"
                  />
                  <button 
                    className="absolute right-2 bottom-2 bg-spotify-green rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 hover:scale-105 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (currentSong?.id === song.id) {
                        togglePlay();
                      } else {
                        playSong(song);
                      }
                    }}
                  >
                    {currentSong?.id === song.id && isPlaying ? (
                      <Pause className="h-4 w-4 text-black" fill="black" />
                    ) : (
                      <Play className="h-4 w-4 text-black" fill="black" />
                    )}
                  </button>
                </div>
                <h3 className="font-semibold text-spotify-white truncate">{song.title}</h3>
                <p className="text-sm text-spotify-lightGray truncate">{song.artist}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Song list */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-spotify-white">
            {searchQuery ? "Search Results" : "Popular songs"}
          </h2>
          <div className="mt-4 bg-spotify-card bg-opacity-60 rounded-md overflow-hidden">
            <table className="w-full">
              <thead className="border-b border-spotify-mediumGray border-opacity-30">
                <tr className="text-left text-sm text-spotify-lightGray">
                  <th className="px-4 py-2 w-12 text-center">#</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2 hidden sm:table-cell">Album</th>
                  <th className="px-4 py-2 text-right">Duration</th>
                </tr>
              </thead>
              <tbody>
                {filteredSongs.map((song, index) => (
                  <tr 
                    key={song.id}
                    className={`hover:bg-spotify-mediumGray text-sm ${
                      currentSong?.id === song.id ? 'bg-spotify-mediumGray bg-opacity-50' : ''
                    } transition-colors`}
                    onClick={() => playSong(song)}
                  >
                    <td className="px-4 py-3 text-center">
                      {currentSong?.id === song.id && isPlaying ? (
                        <span className="text-spotify-green">
                          <Pause className="h-4 w-4 inline" />
                        </span>
                      ) : (
                        <span className="text-spotify-lightGray">
                          {index + 1}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <img 
                          src={song.coverUrl} 
                          alt={song.title} 
                          className="h-10 w-10 rounded mr-3"
                        />
                        <div>
                          <div className={`font-medium ${currentSong?.id === song.id ? 'text-spotify-green' : 'text-spotify-white'}`}>
                            {song.title}
                          </div>
                          <div className="text-spotify-lightGray text-xs">
                            {song.artist}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-spotify-lightGray hidden sm:table-cell">
                      {song.album}
                    </td>
                    <td className="px-4 py-3 text-right text-spotify-lightGray">
                      {formatTime(song.duration)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
