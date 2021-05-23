import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar} from 'react-bootstrap'
import logo from './bitcoin.svg.png'

const App: React.FC = () => {
  return <div className="App">
    <Navbar bg="dark" variant="dark"
    sticky="top">
    <Navbar.Brand>
      <img src={logo}/> {' '}
      Logo
    </Navbar.Brand>
    </Navbar>
    <div className="content">
    This is the content
    </div>
    </div>
};
export default App;
