import React from "react";

function SearchForm(props) {
  return (
    <div>
    <form>
      {/* <div className="form-group container"> */}
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder= {props.transcript}
          id="search"
        />
        <button onClick={props.handleFormSubmit}> Search</button>
      {/* </div> */}
    </form>
    </div>    
  );
}

export default SearchForm;

