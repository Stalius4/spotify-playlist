






##What I have learned while creating this project



If there is no same song with same id return prev array else add song to the array. (not sure why  !== -1)
```javascript
const addSong = (song) =>{
  setPlaylist((prev)=>{
    if(prev.findIndex((e)=> e.id === song.id ) !== -1){
      return prev;
      }
     else{
        return [...prev, song]
        }
    });
}
```
