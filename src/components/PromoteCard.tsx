'use client';

import { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import useWindowListener from '@/hooks/useWindowListener';

export default function PromoteCard() {
  const [isPlaying, setIsPlaying] = useState(true);

  useWindowListener('contextmenu', (e: Event) => {
    e.preventDefault();
  });

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full bg-[#1a1a1a] py-12">
      <div className="w-full px-8">
        <div className="bg-[#2a2a2a] rounded-xl shadow-2xl overflow-hidden w-full">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/5 bg-[#2a2a2a] p-8 md:p-12 flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-video rounded-lg overflow-hidden bg-black border border-gray-700">
                <VideoPlayer vdoSrc="/vdo/venue.mp4" isPlaying={isPlaying} />
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg 
                        className="w-8 h-8 text-white ml-1" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                )}
                <div className="absolute bottom-3 left-3 text-gray-400 font-medium text-xs">
                  VideoPlayer
                </div>
              </div>
            </div>

            <div className="md:w-3/5 p-8 md:p-16 flex flex-col justify-center bg-[#2a2a2a]">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Book your venue today.
              </h2>
              <br></br>
              <button
                onClick={togglePlayPause}
                className="self-start bg-[#1a1a1a] hover:bg-[#0f0f0f] text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg border border-gray-600 hover:border-gray-500"
              >
                {isPlaying ? 'Pause' : 'Play'}
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-4 text-gray-500 text-sm font-medium">
          PromoteCard
        </div>
      </div>
    </div>
  );
}