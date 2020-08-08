import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Gif"
          id="search"
        />

        <button onClick={props.handleFormSubmit} className="btn btn-info mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
