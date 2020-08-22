import React from "react";
import Dictaphone from "./Dictaphone";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

function SearchForm(props) {
  const { user } = useAuth0();
  console.log(user.email);
  return (
    <div>
      <form>
        <div className="form-group container">
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder={props.transcript}
            id="search"
          />

          <button onClick={props.handleFormSubmit} className="btn btn-info mt-3">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;

//saving this for later, in case it's helpful
//<input type="text" value={transcript} onChange={e => this.toDoChange(e.target.value)}/>
