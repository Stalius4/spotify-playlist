
import styles from "./styles/App.module.css"
import SearchBar from "./components/SearchBar"
import Track from "./components/Track"
import TrackList from "./components/TrackList"
import Playlist from './components/Playlist';
import SearchResult from './components/SearchResult';
import React, {useState, useEffect} from "react"
import {addPlaylist, searchSong} from "./utilities/utilities"
import { fetchAccessToken, handleAuth } from "./utilities/auth";


function App() {
 
  const [token, setToken] = useState("")
  const [searchData, setSearchData] = useState([])
  const [searchValue,setSearchValue] =useState("")
  const [playlist, setPlaylist]=useState([]);
  

  useEffect(() => {
    // Extract the URL query parameters
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
  
    // If the code exists, call the function to fetch the access token
    if (code) {
      fetchAccessToken(code, setToken);
    }
  }, [setToken]);

  useEffect(() => {

    if(searchValue){
      searchSong(token,setSearchData, searchValue)

    }
  }, [searchValue]);



  return (
    <div className={styles.App}>
      <SearchBar setSearchValue={setSearchValue} searchValue={searchValue} />

      <div className={styles.flexRow}>
            <SearchResult searchData={searchData} playlist={playlist} setPlaylist={setPlaylist} />
            <Playlist playlist={playlist}></Playlist>
      </div>

     
<div className={styles.fontRed }>
<button onClick={()=>addPlaylist(token)}>addPlaylist</button>

</div>
    </div>
  );
}

export default App;
