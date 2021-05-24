import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import logo from './bitcoin.svg.png'

// interface Props{
//   title: string;
//   id: number;
// }

const App: React.FC = () => {
  return (<div className="App">
    <Navbar bg="dark" variant="dark"
    fixed="top">
    <Navbar.Brand>
      <img src={logo} />  {' '}
    
    </Navbar.Brand>
    <Nav>
      <NavDropdown id="123" title="Introduction">
        <NavDropdown.Item href="introduction/individuals">Introduction</NavDropdown.Item>
        <NavDropdown.Item href="introduction/businesses">Businesses</NavDropdown.Item>
        <NavDropdown.Divider/>
        <NavDropdown.Item href="introduction/businesses">White paper</NavDropdown.Item>
        </NavDropdown>
      <Nav.Link href="resources">Resources</Nav.Link>
      <Nav.Link href="faq">FAQ</Nav.Link>
    </Nav>
    </Navbar>
    <div className="content">
    This is the content
    </div>
    </div>
  )
};
export default App;
