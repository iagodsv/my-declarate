import React from 'react';
import MusicPlayer from './components/MusicPlayer';
import Letter from './components/Letter';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <MusicPlayer />
      <Letter />
    </div>
  );
};

export default App;
