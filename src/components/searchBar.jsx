import React, { useState } from "react";
import "../styles/app.css";
const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");
  const onInputChange = (event) => {
    setTerm(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };
  return (
    <>
      <div className="top search-bar ui segment">
        <form className="ui form" onSubmit={onSubmit}>
          <div className="field">
            <label>Searc Video</label>
            <input type="text" value={term} onChange={onInputChange} />
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
