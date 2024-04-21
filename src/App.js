
import styles from "./styles/App.module.css"
import SearchBar from "./components/SearchBar"
import Track from "./components/Track"
import TrackList from "./components/TrackList"
import Playlist from './components/Playlist';
import SearchResult from './components/SearchResult';
import React, {useState, useEffect} from "react"
import {fetchMusic} from "./utilities/utilities"
function App() {
  const [isLoading, setIsLoading] = useState(true)
const [searchResult, setSearchResult] = useState("")
const [storedMusic,setStoredMusic] =useState([{
id:916424,
readable:true,
title:"Without Me",
title_short:"Without Me",
title_version:"",
link:"https://www.deezer.com/track/916424",
duration:290,
rank:961431,
explicit_lyrics:true,
explicit_content_lyrics:1,
explicit_content_cover:0,
preview:"https://cdns-preview-c.dzcdn.net/stream/c-cca63b2c92773d54e61c5b4d17695bd2-8.mp3",
md5_image:"ec3c8ed67427064c70f67e5815b74cef",


artist:{
  id:13,
  name:"Eminem",
  link:"https://www.deezer.com/artist/13",
  picture:"https://api.deezer.com/artist/13/image",
  picture_small:"https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
  picture_medium:"https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
  picture_big:"https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
  picture_xl:"https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
  tracklist:"https://api.deezer.com/artist/13/top?limit=50",
  type:"artist",
},
album:{
  id:103248,
  title:"The Eminem Show",
  cover:"https://api.deezer.com/album/103248/image",
  cover_small:"https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/56x56-000000-80-0-0.jpg",
  cover_medium:"https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/250x250-000000-80-0-0.jpg",
  cover_big:"https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/500x500-000000-80-0-0.jpg",
  cover_xl:"https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/1000x1000-000000-80-0-0.jpg",
  md5_image:"ec3c8ed67427064c70f67e5815b74cef",
  tracklist:"https://api.deezer.com/album/103248/tracks",
  type:"album",
},
type:"track"

},{
  id:916424,
  readable:true,
  title:"Without Me",
  title_short:"Without Me",
  title_version:"",
  link:"https://www.deezer.com/track/916424",
  duration:290,
  rank:961431,
  explicit_lyrics:true,
  explicit_content_lyrics:1,
  explicit_content_cover:0,
  preview:"https://cdns-preview-c.dzcdn.net/stream/c-cca63b2c92773d54e61c5b4d17695bd2-8.mp3",
  md5_image:"ec3c8ed67427064c70f67e5815b74cef",
  
  
  artist:{
    id:13,
    name:"Eminem",
    link:"https://www.deezer.com/artist/13",
    picture:"https://api.deezer.com/artist/13/image",
    picture_small:"https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
    picture_medium:"https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
    picture_big:"https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
    picture_xl:"https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
    tracklist:"https://api.deezer.com/artist/13/top?limit=50",
    type:"artist",
  },
  album:{
    id:103249,
    title:"The Eminem Show",
    cover:"https://api.deezer.com/album/103248/image",
    cover_small:"https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/56x56-000000-80-0-0.jpg",
    cover_medium:"https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/250x250-000000-80-0-0.jpg",
    cover_big:"https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/500x500-000000-80-0-0.jpg",
    cover_xl:"https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/1000x1000-000000-80-0-0.jpg",
    md5_image:"ec3c8ed67427064c70f67e5815b74cef",
    tracklist:"https://api.deezer.com/album/103248/tracks",
    type:"album",
  },
  type:"track"
  
  }])

useEffect(() => {
fetchMusic(searchResult,setStoredMusic, setIsLoading)
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
      <SearchResult isLoading={isLoading} storedMusic={storedMusic}/>

      </div>
<div className={styles.fontRed }>
  {/* {storedMusic.map((item, index)=>{
    return(
      <>
      labas</>
    )
  })} */}
</div>
    </div>
  );
}

export default App;
