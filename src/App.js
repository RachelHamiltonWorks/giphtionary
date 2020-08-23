<<<<<<< Updated upstream
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";
import SearchResultContainer from "./components/SearchResultContainer";
=======
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import Loading from './components/Loading';
import NavBar from './components/navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Profile from './views/Profile';
import ExternalApi from './views/ExternalApi';
import { useAuth0 } from '@auth0/auth0-react';
import history from './utils/history';
import SearchResultContainer from './components/SearchResultContainer';
>>>>>>> Stashed changes

// styles
import "./App.css";
import "./lovecraft.css";
import "./basset.css";
// import "./dark-theme.css";
import "./undertaker.css";
import "./rave.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {

  // theming -rr
  const [theme, setTheme] = React.useState("light-theme");

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  // theming -rr

  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops, there appears to be an error. {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  
  
  return (
    <>
      {/* theming -rr */}
      <div className={theme}>


        <Router history={history}>
          <div id="app" className="d-flex flex-column h-100">
            <Row className='top'>
              <Col></Col>
              <Col sm={9}><NavBar></NavBar></Col>
              <Col className='col3'>
                <div className='button-container bg-transparent'>
                  <Dropdown isOpen={dropdownOpen} toggle={toggle} className="btn mt-2">
                    <DropdownToggle className="btn btn-info" caret>
                      Themes
                  </DropdownToggle>
                    <DropdownMenu className="btn btn-info">
                      {/* <DropdownItem header>Select a theme</DropdownItem> */}
                      <DropdownItem onClick={ () => setTheme("light-theme")}>Light</DropdownItem>
                      {/* <DropdownItem disabled>Action (disabled)</DropdownItem> */}
                      {/* <DropdownItem divider /> */}
                      <DropdownItem onClick={ () => setTheme("dark-theme")}>Dark</DropdownItem>
                      <DropdownItem onClick={ () => setTheme("rave")}>Rave</DropdownItem>
                      <DropdownItem onClick={ () => setTheme("basset")}>Basset</DropdownItem>
                      <DropdownItem onClick={ () => setTheme("lovecraft")}>Lovecraft</DropdownItem>
                      <DropdownItem onClick={ () => setTheme("undertaker")}>Undertaker</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </Col>
            </Row>

            <Container className="flex-grow-1 mt5">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/saved-words" component={ExternalApi} />
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
    </>
  );
};

export default App;