import styles from "../styles/Track.module.css"

function Track({searchData, setPlaylist, playlist}) {
  

const addSong = (song) =>{
  setPlaylist((prev)=>{
    if(prev.findIndex((e)=> e.id === song.id ) !== -1){
      return prev;}
     else{return [...prev, song]}});
    
  console.log(playlist)
}
const removeTraack = (taskIndex) =>{
  setPlaylist((prev)=>{
      return prev.filter((item, index) => index !== taskIndex)
  })
}

  return (
<div className={styles.outter} >
{searchData &&
      searchData.map((item, index) => (
        <div className={styles.card} key={item.index}>
          <img className={styles.albumImage}src={item.album.images[1].url} alt={item.id} />
 
        
          <div className={styles.trackNumber}>{index+1}</div>
          <div>
          <h1 className={styles.title}>{item.name}</h1>
          <div className={styles.info}>{ `${item.artists[0].name}`}</div>
          </div>
          <div className={styles.albumName}> {item.album.name}</div>
          <div onClick={()=>addSong(item)} className={styles.addTrack}>+</div>     
      

        </div>
      ))}





    
</div>
  );
}

export default Track;