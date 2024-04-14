
import styles from "../styles/SearchBar.module.css"

function SearchBar({searchResult, setSearchResult}) {

  const handleChange = (e) =>{
    const result = e.target.value
    setSearchResult(result);
  }


  return (
<div className={styles.outer}>
   <label  htmlFor="search">
    <input id="search" type="text" placeholder="Add your song" value={searchResult} onChange={handleChange}></input>
    </label>
   <button>SEARCH</button>
   <div>{searchResult}</div>
</div>
  );
}

export default SearchBar;