import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../components/Logo";
import { useAuth0 } from "@auth0/auth0-react";

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    
      <Navbar color="transparent" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {isAuthenticated && (
            <NavItem>
              <NavLink
                tag={RouterNavLink}
                to="/external-api"
                exact
                activeClassName="router-link-exact-active"
              >
                External API
                  </NavLink>
            </NavItem>
          )}
        </Collapse>

        {!isAuthenticated && (

          <Button
            id="qsLoginBtn"
            color="info"
            className="btn-margin"
            onClick={() => loginWithRedirect()}
          >
            Log in
          </Button>

        )}


        <Logo />

        {isAuthenticated && (
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret id="profileDropDown">
              <img
                src={user.picture}
                alt="Profile"
                className="nav-user-profile rounded-circle"
                width="50"
              />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>{user.name}</DropdownItem>
              <DropdownItem
                tag={RouterNavLink}
                to="/profile"
                className="dropdown-profile"
                activeClassName="router-link-exact-active"
              >
                <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                    </DropdownItem>
              <DropdownItem
                id="qsLogoutBtn"
                onClick={() => logoutWithRedirect()}
              >
                <FontAwesomeIcon icon="power-off" className="mr-3" /> Log
                      out
                    </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        )}

        {/* {!isAuthenticated && (


          <Button
            id="qsLoginBtn"
            color="info"
            block
            onClick={() => loginWithRedirect({})}
          >
            Log in
          </Button>


        )} */}
        {isAuthenticated && (
          <Nav
            className="d-md-none justify-content-between"
            navbar
            style={{ minHeight: 170 }}
          >
            <NavItem>
              <span className="user-info">
                <img
                  src={user.picture}
                  alt="Profile"
                  className="nav-user-profile d-inline-block rounded-circle mr-3"
                  width="50"
                />
                <h6 className="d-inline-block">{user.name}</h6>
              </span>
            </NavItem>
            <NavItem>
              <FontAwesomeIcon icon="user" className="mr-3" />
              <RouterNavLink
                to="/profile"
                activeClassName="router-link-exact-active"
              >
                Profile
                  </RouterNavLink>
            </NavItem>
            <NavItem>
              <FontAwesomeIcon icon="power-off" className="mr-3" />
              <RouterNavLink
                to="#"
                id="qsLogoutBtn"
                onClick={() => logoutWithRedirect()}
              >
                Log out
                  </RouterNavLink>
            </NavItem>
          </Nav>
        )}


      </Navbar>
    
  
  );
};

export default NavBar;