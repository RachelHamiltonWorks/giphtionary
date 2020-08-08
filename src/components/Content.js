import React, { Component } from "react";

<<<<<<< HEAD
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
=======
import { Row, Container } from "reactstrap";
>>>>>>> 15abccaa09e08e5c1c4db7b64204e45fe2c0d902

import ResultList from "../components/ResultList";

class Content extends Component {
<<<<<<< HEAD
  render(props) {
    return (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">Learning on Loop</h2>
        <Row className="d-flex justify-content-between">
          {ResultList}
            </Row>
      </div>
=======
  render() {
    return (
      <Container>
        <Row className="d-flex justify-content-between">{ResultList}</Row>
      </Container>
>>>>>>> 15abccaa09e08e5c1c4db7b64204e45fe2c0d902
    );
  }
}

export default Content;
