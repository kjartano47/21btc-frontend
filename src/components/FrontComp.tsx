import React from 'react';
import { Button } from '@material-ui/core';
//https://material-ui.com/components/accordion/ add accordion to frontcomp

const FrontComp: React.FC<{}> = () => {
    return (
    <body>
        <h1 className="catcher">
      Welcome to 21BTC
      </h1>
      <div className="welcome-buttons">
      <Button size="large" className="test" onClick={() => { alert('clicked') }}  variant="contained">What is Money?</Button>
      <Button size="large" variant="contained">What is Bitcoin?</Button>
      <Button size="large" variant="contained">Why Bitcoin?</Button>
      </div>
    </body>
    
    )
  };
  export default FrontComp;