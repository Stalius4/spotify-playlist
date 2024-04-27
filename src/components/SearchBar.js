import React, {useState} from "react"
import styles from "../styles/SearchBar.module.css"
import spotify from "../images/spotify.svg"
import { handleAuth } from "../utilities/auth";
function SearchBar({searchValue, setSearchValue}) {
const [searchInput, setSearchInput] = useState("")
  const handleChange = (e) =>{
    const result = e.target.value
    setSearchInput(result);
    
  }
const handleSubmit = (event)=> {
  event.preventDefault()
setSearchValue(searchInput);
console.log(searchValue)
}

const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    handleSubmit(event); // Call handleSubmit when Enter key is pressed
  }
}
  return (
  
  
  <div className={styles.outer}>
    <div className={styles.inner}>
      <img onClick={handleAuth} src={spotify} alt="Login"/>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          value={searchInput}
          onChange={handleChange}
          onKeyPress={handleKeyPress} // Add the key press handler here
          placeholder="Search songs"
        />
        <button className={styles.submit} type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default SearchBar;