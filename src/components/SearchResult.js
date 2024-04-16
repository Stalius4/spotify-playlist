import styles from "../styles/SearchResult.module.css"
import React, { useRef, useState } from 'react';
function SearchResult({isLoading, storedMusic}) {
  const [currentSong, setCurrentSong] = useState(null); // State to track the currently playing song

  // Function to play the audio of a specific song
  const play = (previewUrl) => {
    // Pause any currently playing song
    if (currentSong && currentSong !== previewUrl) {
      const currentAudio = document.getElementById(currentSong);
      if (currentAudio) {
        currentAudio.pause();
        console.log(currentSong)
      }
    }

    // Play the clicked song
    const audio = document.getElementById(previewUrl);
    if (audio) {
      audio.play();
      setCurrentSong(previewUrl);
    }
  };

  // Function to pause the audio of a specific song
  const pause = (previewUrl) => {
    const audio = document.getElementById(previewUrl);
    if (audio) {
      audio.pause();
      setCurrentSong(null);
    }
  };
  return (
    <div>
    {storedMusic &&
      storedMusic.map((item) => (
        <div className={styles.card} key={item.id}>
          <img src={item.album.cover_medium} alt={item.id} />
          {/* Audio element with id set to the preview URL */}
          <audio id={item.preview} src={item.preview} />
          {/* Conditional rendering of play/pause button based on currentSong state */}
          {currentSong === item.preview ? (
            <button onClick={() => pause(item.preview)}>Pause</button>
          ) : (
         
            <button onClick={() => play(item.preview)}>Play</button>
          )}
          <h1 className={styles.card}>{item.title}</h1>
          <figure>
            <div></div>
          </figure>
        </div>
      ))}
  </div>
  );
}

export default SearchResult;