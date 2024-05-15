






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


On array.map () method:
-on hover change image only for 1 array

```javascript
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

    <img 
    onMouseEnter={() => handleMouseEnter(index)}
    onMouseLeave={handleMouseLeave}
    src={hoveredItem === index? openBin:closedBin} className={styles.bin}/>
    ```