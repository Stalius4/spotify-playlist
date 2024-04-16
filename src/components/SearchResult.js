import styles from "../styles/SearchResult.module.css"
import React, { useRef, useState } from 'react';
function SearchResult({isLoading, storedMusic}) {

  const playerRef = useRef(null);
  const play = () => {
    playerRef.current.play()};
  const pause = () => playerRef.current.pause();

  return (
<div className={styles.outer}>
{/*  Expression: a && b

If a is truthy: It then evaluates and returns b.
If a is falsy: It returns a without evaluating b.*/}
{storedMusic && storedMusic.map((item) => (<div className={styles.card}>
  <img src={item.album.cover_medium} alt={item.id}></img>
  <h1 className={styles.card}key={item.id}>{item.title}</h1>
  <figure>

  <audio ref={playerRef} src={item.preview}></audio>
  <div>
                <button onClick={play}>Play</button>
                <button onClick={pause}>Pause</button>

            </div>
</figure>
  </div>
))}
</div>
  );
}

export default SearchResult;