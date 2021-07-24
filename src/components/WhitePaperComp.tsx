import React from "react";
import { Button } from '@material-ui/core';

const WhitePaperComp: React.FC<{}> = () => {
    return (
    <body>
        <p className="paper"> Satoshi Nakamoto's original paper is still recommended reading for anyone studying how Bitcoin works.
       Choose which translation of the paper you want to read:
</p>
<div className="paper-buttons">
<Button className="button-item" variant="outlined" onClick={()=> window.open("https://bitcoin.org/bitcoin.pdf", "_blank")}>English</Button>
<Button className="button-item" variant="outlined" onClick={()=> window.open("https://bitcoin.org/files/bitcoin-paper/bitcoin_de.pdf", "_blank")}>Deutsch</Button>
<Button className="button-item" variant="outlined" onClick={()=> window.open("https://bitcoin.org/files/bitcoin-paper/bitcoin_fr.pdf", "_blank")}>Français</Button>
<Button className="button-item" variant="outlined" onClick={()=> window.open("https://bitcoin.org/files/bitcoin-paper/bitcoin_es.pdf", "_blank")}>Español</Button>
</div>

    </body>
    
    )
  };
  export default WhitePaperComp;