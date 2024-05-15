import styles from "../styles/Playlist.module.css"
import closedBin from "../images/bin.png"
import openBin from "../images/openBin.png"
import { useState } from "react";
import {addPlaylist} from "../utilities/utilities"

function PlayList({playlist,setPlaylist, token}) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [playlistName, setPlaylistName]= useState("")
  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const removeTrack = (songIndex) =>{
    setPlaylist((prev)=>{
        return prev.filter((item, index) => index !== songIndex)
    })
  }



  return (
<div className={styles.outer}>
  <div className={styles.flexRow}>
    <span className={styles.plus}>+</span>
    <input
    className={styles.playlistName}
    placeholder="Enter Playlist Name"
    value={playlistName}
    onChange={e=>setPlaylistName(e.target.value)}
    ></input>
  </div>
  <div className={styles.header}>
    <div className={styles.titleArtist}>Title/Artist</div>
    <div className={styles.album}>Album</div>
  </div>
{playlist &&
      playlist.map((item, index) => (
        <div className={styles.card} key={item.id}>
          <img className={styles.albumImage}src={item.album.images[1].url} alt={item.id} />
 
        
          <div className={styles.trackNumber}>{index+1}</div>
          <div>
          <h1 className={styles.title}>{item.name}</h1>
          <div className={styles.info}>{ `${item.artists[0].name}`}</div>
          </div>
          <div className={styles.albumName}> {item.album.name}</div>
          <div className={styles.addTrack} onClick={()=>removeTrack(index)}>
            <img alt="bin"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            src={hoveredItem === index? openBin:closedBin} className={styles.bin}/>
          </div>     
      
        </div>
      ))}
    
      <button onClick={()=>addPlaylist(token, playlistName, playlist)}>addPlaylist</button>
</div>
  );
}

export default PlayList;