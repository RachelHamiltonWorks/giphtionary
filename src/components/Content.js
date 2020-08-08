import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ResultList from "../components/ResultList";
// We might be able to change this to a stateless function, but it could complicate the render()
// We might also be able to create a Row component, to pass the ResultList props, for the final level in the tree
class Content extends Component {
  render(props) {
    return (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">Learning on Loop</h2>
        <Row className="d-flex justify-content-between">
          {ResultList}
            </Row>
      </div>
    );
  }
}

export default Content;
