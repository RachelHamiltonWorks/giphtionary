import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import API from "../utils/API";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const ProfileComponent = () => {
  const { user } = useAuth0();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    API.getWord(user.email).then((res) => {
      setUserData(res.data);
    });
  });
  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md>
          <h2>{userData.word}</h2>
          <p className="lead text-muted">{userData.email}</p>
        </Col>
      </Row>

      <ToastContainer />
    </Container>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
