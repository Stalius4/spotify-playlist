import styles from "../styles/SearchResult.module.css"
import React from 'react';
import Track from "./Track";
function SearchResult({ storedMusic}) {
  
  return (
    <div>
<Track storedMusic={storedMusic}></Track>
  </div>
  );
}

export default SearchResult;