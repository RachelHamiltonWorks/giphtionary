import React from "react";
import { Container, Form, Row, Col } from "reactstrap";


function SearchForm(props) {
  return (
    <div>
      <Row>
        <Col></Col>
        <Col>
          <Form>
            <Container>
              <br></br>
              <br></br>
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
        </Col>
        <Col></Col>
      </Row>
    </div>


  );
}

export default SearchForm;

