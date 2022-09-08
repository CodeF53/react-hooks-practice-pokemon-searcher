import React from "react";

function Search({searchQuery, setSearchQuery}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
