import React, {useState} from "react"
import styles from "../styles/SearchBar.module.css"

function SearchBar({searchResult, setSearchResult,}) {
const [searchInput, setSearchInput] = useState("")
  const handleChange = (e) =>{
    const result = e.target.value
    setSearchInput(result);
    
  }
const handleSubmit = ()=> {
setSearchResult(searchInput);
}

  return (
<div className={styles.outer}>
   <label  htmlFor="search">
    <input id="search" type="text" placeholder="Add your song" value={searchInput} onChange={handleChange}></input>
    </label>
   <button onClick={handleSubmit}>SEARCH</button>
   <div>{searchResult}</div>
</div>
  );
}

export default SearchBar;