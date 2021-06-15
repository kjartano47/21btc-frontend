import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import logo from '../bitcoin.svg.png'

const NavbarComp: React.FC<{}> = () => {
    return (<div className="NavbarComp">
      <Navbar>
      <Navbar.Brand className="bitcoin-logo" href="/"> 
        <img src={logo} alt="Bitcoin " />  {' '}
      </Navbar.Brand>

      <Navbar.Toggle/>
      <Navbar.Collapse>
      <Nav >
        <NavDropdown className="navItems"  id="1" title="Introduction">
          <NavDropdown.Item  href="/introduction/individuals">Individuals</NavDropdown.Item>
          <NavDropdown.Item href="/introduction/businesses">Businesses</NavDropdown.Item>
          <NavDropdown.Divider/>
          <NavDropdown.Item href="/introduction/white-paper">White paper</NavDropdown.Item>
          </NavDropdown>
        <Nav.Link href="/resources">Resources</Nav.Link>
        <Nav.Link href="/faq">FAQ</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
      </div>
    )
  };
  export default NavbarComp;