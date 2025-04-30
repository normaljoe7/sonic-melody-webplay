
import React from 'react';
import { Home, Search, Library, Plus, Heart } from 'lucide-react';
import { playlists } from '../lib/data/songs';

export const Sidebar = () => {
  return (
    <div className="w-64 bg-spotify-darkest flex-shrink-0 h-full">
      {/* Logo */}
      <div className="px-6 pt-6 pb-4">
        <svg viewBox="0 0 1134 340" className="text-spotify-white h-10 w-auto">
          <path
            fill="currentColor"
            d="M8 171.4c0 14.5 5.8 27.1 17.6 38C38.1 221.2 56 226 76 226c20.9 0 37.9-4.9 51.1-15.9 11.3-9.9 16.9-22.4 16.9-37.6 0-14.7-5.7-27.2-17.5-38S96.1 116 76 116c-19.3 0-36.4 4.9-51 14.8-12 9.8-17 21.8-17 40.6zm213.2-52.6c0 3.1 1 6.5 3 10.2 2 3.8 4.6 7.3 8 10.6 3.2 3.4 7.2 6.2 11.9 8.4 4.6 2.3 9.7 3.4 15.2 3.4 4.3 0 7.7-.6 10.4-1.8 2.6-1.2 4.7-2.6 6.2-4 1.5-1.5 2.6-2.9 3.2-4.3.6-1.4.9-2.3.9-2.8 0-2.8-1.8-6-5.5-9.8-3.7-3.8-8.6-5.7-14.9-5.7-6.4 0-11.4 1.9-15.1 5.7-3.7 3.8-5.5 7-5.5 9.8h-17.8zm45.5 81c7.1 0 14-1.2 21-3.6s13.1-5.9 18.7-10.7c5.5-4.7 10-10.6 13.3-17.5 3.5-6.9 5.2-14.7 5.2-23.4 0-8.1-1.6-15.7-4.9-22.7-3.3-7-7.7-13.1-13.2-18.1-5.7-5-12.3-9-19.9-11.8-7.6-2.8-15.7-4.3-24.1-4.3-8.5 0-16.5 1.4-24 4.3-7.5 2.8-14.1 6.8-19.7 11.8-5.6 5.1-10 11.1-13.2 18.1-3.2 7-4.8 14.6-4.8 22.7 0 8.6 1.6 16.5 4.8 23.4 3.2 6.9 7.6 12.8 13.2 17.5 5.5 4.7 12.1 8.4 19.7 10.7 7.6 2.4 15.6 3.6 24 3.6zm211.7-95.1c-5.8-12.6-14.2-22.3-25.1-29.1-10.8-6.8-23.8-10.3-38.8-10.3-16.4 0-30.3 4.1-41.5 12.2-11.2 8.2-19.7 19.2-25.4 33.3s-8.6 30.2-8.6 48.2c0 18 2.9 33.9 8.7 47.9 5.8 14 14.2 25 25.3 33.1 11.1 8.1 24.9 12.1 41.3 12.1 17.8 0 32.2-5.5 43.3-16.4 11.1-10.9 17.8-26.5 20.4-46.6H389.9c-.5 0-1 .3-1.3.8-.3.5-.5 1-.5 1.7v14.7c0 .5.1 1 .4 1.4.3.5.6.7 1.1.7h61c.5 0 .9-.2 1.2-.7.3-.5.5-1 .5-1.7v-13.1c0-.5-.1-1-.3-1.3-.3-.4-.6-.6-1-.6h-16.1c-1.2-11.4-2.6-20.2-4.4-26.5-1.9-6.3-4-11.7-6.7-16.2zm-1.6 88.1c-7.4 6.4-16.9 9.6-28.4 9.6-7.1 0-13.3-1.4-18.6-4.3-5.3-2.8-9.8-7-13.4-12.4-3.6-5.4-6.3-12-8.2-19.9-1.9-7.8-2.8-16.8-2.8-27 0-10.1 1-19.1 2.8-27 1.9-7.9 4.6-14.6 8.2-20.2 3.6-5.5 8.1-9.8 13.4-12.7 5.3-3 11.5-4.4 18.6-4.4 11 0 20 3.3 27.2 9.8 7.2 6.5 12.1 15.5 14.7 26.9h-60.8v16.6h77.8c1 0 1.7-.3 2.3-.9.5-.6.8-1.7.8-3.3 0-8.2-.8-16.1-2.4-23.5-1.6-7.4-3.9-14.2-7-20.4zm-187.5 64.4V169.1c0-.5-.2-1-.5-1.3-.3-.3-.8-.5-1.3-.5h-17c-.5 0-1 .2-1.3.5-.4.3-.6.8-.6 1.3v188.2c0 .7.2 1.2.6 1.6.3.4.8.6 1.3.6h17c.5 0 1-.2 1.3-.6.3-.4.5-.9.5-1.6v-81.8c0-12.9 1-23.1 3-30.7 2-7.6 4.9-13.9 8.8-19.1 3.9-5.1 8.5-8.9 14-11.3 5.4-2.4 11.5-3.5 18.2-3.5 7.5 0 13.5 1.4 17.9 4.3 4.4 2.9 7.6 6.3 9.7 10.4 2 4.1 3.2 8.2 3.6 12.3.4 4.1.6 10.2.6 18.4v101.1c0 .6.1 1.1.4 1.5.3.4.7.6 1.2.6h17.1c.5 0 .9-.2 1.2-.6.3-.4.4-.9.4-1.5v-108c0-8.8-.5-16.7-1.6-23.7-1.1-7-3-13.4-5.9-19.1-2.9-5.7-6.8-10.7-11.8-14.9-5-4.2-11.5-7.4-19.4-9.6-7.9-2.2-17.5-3.3-28.7-3.3-7.8 0-15.1 1.2-22.1 3.6-7 2.4-13.3 5.8-18.9 10.3-5.7 4.4-10.4 9.8-14.4 16.2h-.4v-23c0-.5-.2-.9-.5-1.2-.3-.3-.7-.5-1.2-.5h-16.6c-.5 0-.9.2-1.2.5-.3.3-.5.7-.5 1.3v139.7zm169.7-139.7c0-.5-.2-1-.5-1.3s-.8-.5-1.3-.5h-17c-.5 0-1 .2-1.3.5-.3.3-.5.8-.5 1.3v188.2c0 .7.2 1.2.5 1.6.3.4.8.6 1.3.6h17c.5 0 1-.2 1.3-.6.3-.4.5-.9.5-1.6V169.1zm28.9 126.7c6.2 21.1 14.6 37.5 25.3 49.1 10.7 11.6 23.7 20.1 39 25.6 15.3 5.4 32.7 8.2 52.1 8.2 12.2 0 22.5-.7 31-2.1 8.5-1.4 16.3-3.3 23.6-5.7 7.2-2.4 14.1-5 20.6-7.9 6.5-2.9 13.3-6.1 20.4-9.5.6-.3 1-.7 1.4-1.2.4-.6.5-1.2.5-2v-16.2c0-.5-.1-.9-.3-1.3-.2-.4-.6-.7-1.1-1-.5-.3-1-.3-1.5-.1-.5.2-1 .4-1.5.8-4.9 2.9-9.8 5.6-14.8 8.1-5 2.6-10.4 4.8-16.1 6.7s-12.1 3.5-19 4.6c-7 1.1-15.1 1.7-24.2 1.7-13.5 0-25.5-2-36.2-6-10.6-4-19.8-9.8-27.4-17.4-7.7-7.6-13.5-16.9-17.6-28.1s-6.1-23.8-6.1-38c0-14.8 2.1-27.8 6.2-39 4.1-11.2 10-20.6 17.7-28.2 7.6-7.6 16.8-13.3 27.6-17.3 10.8-3.9 22.7-5.9 35.8-5.9 9.1 0 17.1.6 24 1.7 6.9 1.1 13 2.7 18.4 4.6 5.3 1.9 10.3 4.1 14.8 6.7 4.5 2.5 8.9 5.2 13.3 8 .5.3 1.1.5 1.6.6.5.1 1 0 1.5-.2.5-.3.8-.6 1-1s.3-.8.3-1.3v-16.2c0-.7-.2-1.4-.5-2-.3-.6-.8-1-1.4-1.3-6.9-3.4-13.5-6.4-19.9-9-6.4-2.7-12.8-4.9-19.1-6.9-6.3-1.9-13.2-3.4-20.4-4.5-7.3-1-15.7-1.6-25.3-1.6-19.6 0-37.1 2.8-52.6 8.4-15.5 5.6-28.7 13.8-39.5 24.4-10.8 10.7-19 23.7-24.7 39.1-5.7 15.4-8.5 32.5-8.5 51.2 0 17.6 2.7 33.6 8.1 47.8zm243.1-8.1h32.3c.5 0 1-.1 1.3-.4.3-.3.5-.6.5-1.1v-13c0-.5-.2-.8-.5-1.1-.3-.3-.8-.4-1.3-.4h-32.3v-94.4h50.4c.5 0 .9-.2 1.1-.5.2-.4.4-.8.4-1.4v-11.7c0-.6-.1-1-.4-1.4-.2-.4-.6-.5-1.1-.5h-50.4v-28.1c0-.6-.2-1.1-.6-1.5-.4-.4-1-.6-1.7-.6h-16.8c-.6 0-1.2.2-1.7.6-.4.4-.6.9-.6 1.5v28.1h-23c-.5 0-.9.2-1.1.5-.2.4-.3.8-.3 1.4v11.7c0 .6.1 1 .3 1.4.2.4.6.5 1.1.5h23v94.4h-33.7c-.5 0-.9.1-1.2.4-.3.3-.5.6-.5 1.1v13c0 .5.2.8.5 1.1.3.3.7.4 1.2.4h33.7v51.7c0 .6.2 1.2.6 1.6.4.4 1 .6 1.7.6h16.8c.7 0 1.2-.2 1.7-.6.4-.4.6-.9.6-1.6v-51.7z"
          />
        </svg>
      </div>
      
      {/* Main Navigation */}
      <nav className="px-2">
        <ul>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-spotify-white hover:text-spotify-white transition-colors rounded-md hover:bg-spotify-mediumGray">
              <Home className="w-6 h-6 mr-4" />
              <span className="font-medium">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-spotify-lightGray hover:text-spotify-white transition-colors rounded-md hover:bg-spotify-mediumGray mt-1">
              <Search className="w-6 h-6 mr-4" />
              <span className="font-medium">Search</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-spotify-lightGray hover:text-spotify-white transition-colors rounded-md hover:bg-spotify-mediumGray mt-1">
              <Library className="w-6 h-6 mr-4" />
              <span className="font-medium">Your Library</span>
            </a>
          </li>
        </ul>
      </nav>
      
      {/* Playlists */}
      <div className="mt-8 px-2">
        <div className="px-4">
          <button className="flex items-center text-spotify-lightGray hover:text-spotify-white transition-colors bg-spotify-darkest p-1 rounded-md">
            <div className="bg-spotify-lightGray hover:bg-spotify-white transition-colors p-1 rounded-sm mr-2">
              <Plus className="w-4 h-4 text-spotify-darkest" />
            </div>
            <span className="font-medium text-sm">Create Playlist</span>
          </button>
          
          <button className="flex items-center text-spotify-lightGray hover:text-spotify-white transition-colors bg-spotify-darkest p-1 rounded-md mt-4">
            <div className="bg-gradient-to-br from-purple-700 to-spotify-lightGray p-1 rounded-sm mr-2">
              <Heart className="w-4 h-4 text-spotify-darkest" />
            </div>
            <span className="font-medium text-sm">Liked Songs</span>
          </button>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-spotify-mediumGray my-4 mx-4 opacity-20"></div>
        
        {/* Playlist List */}
        <div className="overflow-y-auto max-h-[calc(100vh-350px)] no-scrollbar">
          <ul className="px-2">
            {playlists.map((playlist) => (
              <li key={playlist.id} className="py-1">
                <a 
                  href="#" 
                  className="text-sm text-spotify-lightGray hover:text-spotify-white px-2 py-1 transition-colors block truncate"
                >
                  {playlist.name}
                </a>
              </li>
            ))}
            {/* More filler playlists */}
            <li className="py-1">
              <a href="#" className="text-sm text-spotify-lightGray hover:text-spotify-white px-2 py-1 transition-colors block truncate">
                Dance Party Mix
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="text-sm text-spotify-lightGray hover:text-spotify-white px-2 py-1 transition-colors block truncate">
                2023 Top Hits
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="text-sm text-spotify-lightGray hover:text-spotify-white px-2 py-1 transition-colors block truncate">
                Morning Acoustic
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="text-sm text-spotify-lightGray hover:text-spotify-white px-2 py-1 transition-colors block truncate">
                Study Focus
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
