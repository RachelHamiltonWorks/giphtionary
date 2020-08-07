import React from "react";

function SearchForm(props) {
  return (
    <div className="container">
    <form>
      <div className="form-group bg-dark">
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control bg-dark text-white border-white"
          placeholder="Search for a Gif"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mx-auto">
          Search
        </button>
      </div>
    </form>
    </div>
  );
}

export default SearchForm;
