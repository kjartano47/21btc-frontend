import React from 'react';
import { Button } from '@material-ui/core';


const FrontComp: React.FC<{}> = () => {
    return (
    <body>
        <h1 className="catcher">
      Welcome to 21BTC
      </h1>
      <div className="welcome-buttons">
      <Button variant="contained">What is Money?</Button>
      <Button variant="contained">What is Bitcoin?</Button>
      <Button variant="contained">Why Bitcoin?</Button>
      </div>
    </body>
    
    )
  };
  export default FrontComp;