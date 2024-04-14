
import './App.css';
import SearchBar from "./components/SearchBar"
import Track from "./components/Track"
import TrackList from "./components/TrackList"
import Playlist from './components/Playlist';
import SearchResult from './components/SearchResult';
function App() {
  return (
    <div className="App">
  <Track/>
  <TrackList/>
  <Playlist/>
  <SearchResult/>
  <SearchBar/>
    </div>
  );
}

export default App;
