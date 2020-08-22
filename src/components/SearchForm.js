import React from "react";
import { Container, Form } from "reactstrap";


function SearchForm(props) {
  return (
    <div>
        <Form>
        <Container>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder={props.transcript} n
            id="search"
          />

          </Container>
        </Form>
      </div>
     
    
  );
}

export default SearchForm;

