import React from "react";
import Dictaphone from "./Dictaphone"


function SearchForm(props) {
  return (
    <div>
    <form>
    {/* //give this contianer display of flex */}
      <div className="form-group container">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder= {props.transcript}
          id="search"
        />
        
{/* //take button out of div, replace with dictaphone component */}
        <button onClick={props.handleFormSubmit} className="btn btn-info mt-3">
          Search
        </button>
        
    
      </div>
    </form>
    </div>    
  );
}

export default SearchForm;

