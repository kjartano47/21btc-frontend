import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import logo from '../bitcoin.svg.png'

const NavbarComp: React.FC<{}> = () => {
    return (<div className="App">
      <Navbar bg="dark" variant="dark"
      fixed="top" expand="sm">
      <Navbar.Brand>
        <img src={logo} alt="Bitcoin " />  {' '}
      </Navbar.Brand>

      <Navbar.Toggle/>
      <Navbar.Collapse>
      <Nav >
        <NavDropdown className="navItems"  id="1" title="Introduction">
          <NavDropdown.Item  href="introduction/individuals">Introduction</NavDropdown.Item>
          <NavDropdown.Item href="introduction/businesses">Businesses</NavDropdown.Item>
          <NavDropdown.Divider/>
          <NavDropdown.Item href="introduction/businesses">White paper</NavDropdown.Item>
          </NavDropdown>
        <Nav.Link href="resources">Resources</Nav.Link>
        <Nav.Link href="faq">FAQ</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
      </div>
    )
  };
  export default NavbarComp;