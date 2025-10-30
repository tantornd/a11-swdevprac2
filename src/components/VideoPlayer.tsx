'use client';

import { useRef, useEffect } from 'react';

interface VideoPlayerProps {
  vdoSrc: string;
  isPlaying: boolean;
}

export default function VideoPlayer({ vdoSrc, isPlaying }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      src={vdoSrc}
      className="w-full h-full object-cover"
      loop
      muted
      playsInline
    />
  );
}