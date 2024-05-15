
import styles from "./styles/App.module.css"
import SearchBar from "./components/SearchBar"

import Playlist from './components/Playlist';
import SearchResult from './components/SearchResult';
import React, {useState, useEffect} from "react"
import {searchSong} from "./utilities/utilities"
import { fetchAccessToken} from "./utilities/auth";


function App() {
 
  const [token, setToken] = useState("")

  //fetched data form Spotify
  const [searchData, setSearchData] = useState([])

  //user input in search bar
  const [searchValue,setSearchValue] =useState("")
  //tracks picked by user
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
      searchSong(token, setSearchData, searchValue)

    }
  }, [token , searchValue]);



  return (
    <div className={styles.App}>
      <SearchBar setSearchValue={setSearchValue} searchValue={searchValue} />

      <div className={styles.flexRow}>
            <SearchResult searchData={searchData} playlist={playlist} setPlaylist={setPlaylist} />
            <Playlist playlist={playlist} setPlaylist={setPlaylist} token={token}></Playlist>
      </div>

     
<div className={styles.fontRed }>


</div>
    </div>
  );
}

export default App;
