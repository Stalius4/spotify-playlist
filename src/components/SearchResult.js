import styles from "../styles/SearchResult.module.css"
import React from 'react';
import Track from "./Track";
function SearchResult({ searchData, playlist, setPlaylist}) {
  
  return (
<div className={styles.outer}>
  <div className={styles.flexRow}>
    <spam className={styles.plus}>+</spam>
    <h2>Pick Your Songs</h2>
  </div>
  <div className={styles.header}>
    <div className={styles.titleArtist}>Title/Artist</div>
    <div className={styles.album}>Album</div>
  </div>
   
        <Track searchData={searchData} playlist={playlist} setPlaylist={setPlaylist} ></Track>
  
  </div>
  );
}

export default SearchResult;