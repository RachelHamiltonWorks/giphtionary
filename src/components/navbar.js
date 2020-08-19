import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";
import Logo from "../components/Logo";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";

const NavBar = () => {

  const [theme, setTheme] = React.useState("light-theme");

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  // _________ WIP function that Tom was helping set up for switching between themes ________

  //get the class name from that id
  //assign that to a variable
  //we need to find a way to get "that class name" (theme) from "that id",
  // and we want to populate the classes that are tied to that id

  /*SwitchTheme = (theme) => {
    var element = document.getElementById(theme).classList.item(0);
    element.classList.remove(variable);
  } */

  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <div>
      <Navbar color="transparent" light expand="md">
        <NavbarBrand className="navbar-brand-custom" href="/"> <Logo /> </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              {!isAuthenticated && (
                <Button
                  id="qsLoginBtn"
                  onClick={() => loginWithRedirect()}
                >Log in
                </Button>
              )}
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="button" caret>
                Themes
                  </DropdownToggle >
              <DropdownMenu className="button" right>
                <DropdownItem onClick={() => document.getElementById("theme").classList.add("light-theme")}>
                  Light
                    </DropdownItem>
                <DropdownItem onClick={() => document.getElementById("theme").classList.add("dark-theme")}>
                  Dark
                    </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default NavBar;



// _________________Previous NavBar in for reference_________________
//     return (

//       <Navbar color="transparent" light expand="md">
//         <NavbarBrand href="/"><Logo /></NavbarBrand>
//         <NavbarToggler onClick={toggle} />




//         {!isAuthenticated && (

//           <Button
//             id="qsLoginBtn"
//             color="info"
//             className="btn-margin"
//             onClick={() => loginWithRedirect()}
//           >
//             Log in
//           </Button>

//         )}

// <Dropdown isOpen={dropdownOpen} toggle={toggle} className="btn mt-2">
//               <DropdownToggle className="btn btn-info" caret>
//                 Themes
//               </DropdownToggle>
//               <DropdownMenu className="btn btn-info">

//                 {/* <DropdownItem onClick={() => SwitchTheme("light-theme")}>Light</DropdownItem>
//                 <DropdownItem onClick={() => SwitchTheme("dark-theme")}>Dark</DropdownItem> */}


//                 <DropdownItem onClick={() => document.getElementById("theme").classList.add("light-theme")}>Light</DropdownItem>
//                 <DropdownItem onClick={() => document.getElementById("theme").classList.add("dark-theme")}>Dark</DropdownItem>

//               </DropdownMenu>
//             </Dropdown>


//         {isAuthenticated && (
//           <UncontrolledDropdown nav inNavbar>
//             <DropdownToggle nav caret id="profileDropDown">
//               <img
//                 src={user.picture}
//                 alt="Profile"
//                 className="nav-user-profile rounded-circle"
//                 width="50"
//               />
//             </DropdownToggle>
//             <DropdownMenu>
//               <DropdownItem header>{user.name}</DropdownItem>
//               <DropdownItem
//                 tag={RouterNavLink}
//                 to="/profile"
//                 className="dropdown-profile"
//                 activeClassName="router-link-exact-active"
//               >
//                 <FontAwesomeIcon icon="user" className="mr-3" /> Profile
//                     </DropdownItem>
//               <DropdownItem
//                 id="qsLogoutBtn"
//                 onClick={() => logoutWithRedirect()}
//               >
//                 <FontAwesomeIcon icon="power-off" className="mr-3" /> Log
//                       out
//                     </DropdownItem>
//             </DropdownMenu>
//           </UncontrolledDropdown>
//         )}

//         {isAuthenticated && (
//           <Nav
//             className="d-md-none justify-content-between"
//             navbar
//             style={{ minHeight: 170 }}
//           >
//             <NavItem>
//               <span className="user-info">
//                 <img
//                   src={user.picture}
//                   alt="Profile"
//                   className="nav-user-profile d-inline-block rounded-circle mr-3"
//                   width="50"
//                 />
//                 <h6 className="d-inline-block">{user.name}</h6>
//               </span>
//             </NavItem>
//             <NavItem>
//               <FontAwesomeIcon icon="user" className="mr-3" />
//               <RouterNavLink
//                 to="/profile"
//                 activeClassName="router-link-exact-active"
//               >
//                 Profile
//                   </RouterNavLink>
//             </NavItem>
//             <NavItem>
//               <FontAwesomeIcon icon="power-off" className="mr-3" />
//               <RouterNavLink
//                 to="#"
//                 id="qsLogoutBtn"
//                 onClick={() => logoutWithRedirect()}
//               >
//                 Log out
//                   </RouterNavLink>
//             </NavItem>
//           </Nav>
//         )}


//       </Navbar>


//     );
//   };

