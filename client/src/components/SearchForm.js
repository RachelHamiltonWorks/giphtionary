import React from "react";
import { Container, Form, Row, Col } from "reactstrap";	
import Dictaphone from "./Dictaphone";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

function SearchForm(props) {
  const { user } = useAuth0();
  console.log(user.email);
  return (
    <div>
      <Row>
        <Col></Col>
        <Col>
          <form>
            <div className="form-group container">
              <input
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                className="input form-control"
                placeholder={props.transcript}
                id="search"
              />

              {/* <button onClick={props.handleFormSubmit} className="btn btn-info mt-3">
            Search
          </button> */}
            </div>
          </form>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default SearchForm;

//saving this for later, in case it's helpful
//<input type="text" value={transcript} onChange={e => this.toDoChange(e.target.value)}/>
