import React, { useEffect, useRef } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error('Error playing the audio:', error);
      });
    }
  }, []);

  return (
    <div className="music-player">
      <audio ref={audioRef} src="/mp3.mp3" autoPlay loop />
    </div>
  );
};

export default MusicPlayer;
