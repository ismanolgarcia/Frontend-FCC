import { useState, useEffect, useContext } from 'react';
import './pad.css';
import { BankContext } from '../../context';

export const Pad = ({ clipName, url, id }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isKeyActive, setIsKeyActive] = useState(false);
  const { getClipName } = useContext(BankContext);

  const playAudio = () => {
    const audioElement = document.getElementById(id);
    audioElement.currentTime = 0;
    audioElement.play();
    setIsPlaying(true);
    getClipName(clipName);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toUpperCase() === id) {
        playAudio();
        setIsKeyActive(true);
      }
    };
    const handleKeyUp = (event) => {
      if (event.key.toUpperCase() === id) {
        setIsKeyActive(false);
      }
    };

    const audioElement = document.getElementById(id);
    audioElement.addEventListener('ended', () => {
      setIsPlaying(false);
    });

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [id]);

  return (
    <div
      className={`drum-pad ${isPlaying ? 'active' : ''} ${
        isKeyActive ? 'key-active' : ''
      }`}
      id={`drum-pad-${id}`}
      onClick={playAudio}
    >
      <audio className="clip" src={url} id={id}></audio> <h3>{id}</h3>
    </div>
  );
};
