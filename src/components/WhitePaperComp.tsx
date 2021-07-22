import React from "react";
import { Button } from '@material-ui/core';

const WhitePaperComp: React.FC<{}> = () => {
    return (
    <body>
        <p className="paper"> Satoshi Nakamoto's original paper is still recommended reading for anyone studying how Bitcoin works.
       Choose which translation of the paper you want to read:
</p>
<Button variant="contained" onClick={()=> window.open("https://bitcoin.org/bitcoin.pdf", "_blank")}>Original English</Button>


    </body>
    
    )
  };
  export default WhitePaperComp;