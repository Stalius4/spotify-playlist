import React, {useState} from "react"
import styles from "../styles/SearchBar.module.css"

function SearchBar({searchResult, setSearchResult,}) {
const [searchInput, setSearchInput] = useState("")
  const handleChange = (e) =>{
    const result = e.target.value
    setSearchInput(result);
    
  }
const handleSubmit = (event)=> {
  event.preventDefault()
setSearchResult(searchInput);
}

const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    handleSubmit(event); // Call handleSubmit when Enter key is pressed
  }
}
  return (<div className={styles.outer}>
    <div>logo</div>
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        value={searchInput}
        onChange={handleChange}
        onKeyPress={handleKeyPress} // Add the key press handler here
        placeholder="Search songs"
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default SearchBar;