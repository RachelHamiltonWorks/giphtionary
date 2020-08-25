import React from "react";
import {Row, Col } from "reactstrap";	
import { useAuth0} from "@auth0/auth0-react";

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
            </div>
          </form>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default SearchForm;


