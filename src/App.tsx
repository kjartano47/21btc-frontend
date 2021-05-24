import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import logo from './bitcoin.svg.png'
import NavbarComp from './components/NavbarComp';


const App: React.FC = () => {
  return (<div className="App">
    <NavbarComp/>
    <div className="content">
    This is the content
    </div>
    </div>
  )
};
export default App;
