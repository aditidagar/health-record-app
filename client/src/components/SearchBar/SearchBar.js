import React from "react";
import "./styles.css";


export default function SearchBar(props) {
  /* TODO: only allow searching for patients for FormFiller and FormReceiver
  *  TODO: change search according to role */
  /* TODO: make API call to return results*/
  let placeHolderText;
  if (props.searchType === "receiver") {
    placeHolderText = "Search for patients...";
  } else if (props.searchType === "filler") {
    placeHolderText = "Search for forms or patients...";
  } else {
    placeHolderText = "Search for forms..."
  }
  return(
    <form className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder={placeHolderText}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}