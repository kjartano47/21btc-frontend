import React from 'react';

const IntroComp: React.FC<{ num: number }> = ({num}) => {
    return (<div>
      Hello This is Introduction{num}
      </div>
    )
  };
  export default IntroComp;