import styles from "../styles/Track.module.css"
import { useState } from "react";
function Track({storedMusic}) {
  const [currentSong, setCurrentSong] = useState(null); // State to track the currently playing song

  // Function to play the audio of a specific song
  const play = (previewUrl) => {
    // Pause any currently playing song
    if (currentSong && currentSong !== previewUrl) {
      const currentAudio = document.getElementById(currentSong);
      if (currentAudio) {
        currentAudio.pause();
       
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

  function secondsToMinutes(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    return minutes + ":" + remainingSeconds + "s";
}


  return (
<div className={styles.outter} >
{storedMusic &&
      storedMusic.map((item, index) => (
        <div className={styles.card} key={item.index}>
          <img src={item.artist.picture_medium} alt={item.id} />
          {/* Audio element with id set to the preview URL */}
          <audio id={item.preview} src={item.preview} />
          <div className={styles.trackNumber}>{index+1}</div>
          <div className={styles.addTrack}>+</div>
          <div>{secondsToMinutes(item.duration)}</div>
          {/* Conditional rendering of play/pause button based on currentSong state */}
          {currentSong === item.preview ? (
            <button className={styles.play} onClick={() => pause(item.preview)}>Pause</button>
          ) : (
         
            <button className={styles.play} onClick={() => play(item.preview)}>Play</button>
          )}
            <img src={item.album.cover_medium} alt={item.id} />
          <div>
          <h1 >{item.title}</h1>
          <div>{`Album:${item.album.title}`}{ ` Artist:${item.artist.name}`}</div>
          
          </div>
      

        </div>
      ))}





    
</div>
  );
}

export default Track;