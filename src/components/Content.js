import React, { Component } from "react";

import { Row, Container } from "reactstrap";

import ResultList from "../components/ResultList";

class Content extends Component {
  render() {
    return (
      <Container>
        <Row className="d-flex justify-content-between">{ResultList}</Row>
      </Container>
    );
  }
}

export default Content;
