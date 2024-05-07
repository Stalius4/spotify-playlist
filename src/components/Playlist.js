import styles from "../styles/Playlist.module.css"

function PlayList({playlist,setPlaylist}) {

  const removeTrack = (songIndex) =>{
    setPlaylist((prev)=>{
        return prev.filter((item, index) => index !== songIndex)
    })
  }

  return (
<div className={styles.outer}>
  <div className={styles.flexRow}>
    <spam className={styles.plus}>+</spam>
    <input className={styles.playlistName} placeholder="Enter Playlist Name"></input>
  </div>
  <div className={styles.header}>
    <div className={styles.titleArtist}>Title/Artist</div>
    <div className={styles.album}>Album</div>
  </div>
{playlist &&
      playlist.map((item, index) => (
        <div className={styles.card} key={item.index}>
          <img className={styles.albumImage}src={item.album.images[1].url} alt={item.id} />
 
        
          <div className={styles.trackNumber}>{index+1}</div>
          <div>
          <h1 className={styles.title}>{item.name}</h1>
          <div className={styles.info}>{ `${item.artists[0].name}`}</div>
          </div>
          <div className={styles.albumName}> {item.album.name}</div>
          <div className={styles.addTrack} onClick={()=>removeTrack(index)}>+</div>     
      

        </div>
      ))}
</div>
  );
}

export default PlayList;