import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import NavbarComp from './components/NavbarComp';
import {Route , Switch} from "react-router-dom";
import Introduction from './components/Introduction';
import FrontComp from './components/FrontComp'

const App: React.FC = () => {
  return (<div className="App">
    <NavbarComp/>
    <Switch>
      {/* Introduction */}
      <Route path='/introduction/individuals'>
        <Introduction num={1} />
      </Route>

      {/* Businesses */}
      <Route path='/introduction/businesses'>
        <Introduction num={2}/>
      </Route>

      {/* White paper */}
      <Route path='/introduction/white-paper'>
        <Introduction num={3}/>
      </Route>

      {/* Main Page */}
      <Route path='/'>
        <FrontComp/>
      </Route>
    </Switch>
    </div>
  )
};
export default App;
