import React, { useState } from "react";
import "./styles.css";
import { debounce, searchPlayers } from "./utils";

function AutoCompleteSearch() {
  const [searchedResult, setSearchedResult] = useState([]);

  const handleSearchText = async (e) => {
    const inputValue = e.target.value;
    if (!inputValue) return setSearchedResult([]);
    const result = await searchPlayers(inputValue);
    setSearchedResult(result);
  };

  const debouncedFunc = debounce(handleSearchText, 500);

  return (
    <div className="container">
      <input
        type="text"
        name="search"
        id="search"
        className="search"
        onChange={debouncedFunc}
      />
      {searchedResult.length > 0 ? (
        <div className="suggession-container">
          {searchedResult.map((player, idx) => (
            <p key={idx}>{player}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default AutoCompleteSearch;
