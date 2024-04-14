
import styles from "./styles/App.module.css"
import SearchBar from "./components/SearchBar"
import Track from "./components/Track"
import TrackList from "./components/TrackList"
import Playlist from './components/Playlist';
import SearchResult from './components/SearchResult';
import React, {useState, useEffect} from "react"
import {searchMusic} from "./utilities/utilities"
function App() {
const [searchResult, setSearchResult] = useState("")


useEffect(() => {
searchMusic(searchResult)
}, [searchResult]);


  return (
    <div className={styles.App}>
      <div className={styles.AppInner}>
      <SearchBar  searchResult={searchResult} setSearchResult={setSearchResult}/>
        <div className={styles.flex}>
      <TrackList/>
      <Playlist/>

        </div>
      <Track/>
      <SearchResult/>

      </div>

    </div>
  );
}

export default App;
