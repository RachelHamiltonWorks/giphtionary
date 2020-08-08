import React, { Component } from "react";

import { Row, Container } from "reactstrap";

import ResultList from "../components/ResultList";
// We might be able to change this to a stateless function, but it could complicate the render()
// We might also be able to create a Row component, to pass the ResultList props, for the final level in the tree
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
