import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";
import SearchResultContainer from "./components/SearchResultContainer";
// import Toggle from "./components/Toggle.js";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  // theming -rr
  const [darkTheme, setDarkTheme] = React.useState(false);
  // theming -rr

  const { isLoading, error, user } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* theming -rr */}
      <div className={darkTheme ? "dark-theme" : "light-theme"}>
        <Router history={history}>
          <div id="app" className="d-flex flex-column h-100">
            {/* <Container> */}
            <Row className="top">
              <Col></Col>
              <Col sm={10}>
                <NavBar></NavBar>
              </Col>
              <Col className="col3">
                <div className="button-container bg-transparent">
                  <button
                    className="btn btn-info mt-3"
                    onClick={() => setDarkTheme((prevTheme) => !prevTheme)}
                  >
                    Theme
                  </button>
                </div>
              </Col>
            </Row>
            {/* </Container> */}

            <Container className="flex-grow-1 mt-5">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profile" component={Profile} />
              </Switch>
              <Switch></Switch>
            </Container>

            <Switch>
              <SearchResultContainer />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
      {/* theming -rr */}
    </>
  );
};

export default App;
