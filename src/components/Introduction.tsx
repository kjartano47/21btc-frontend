import React from 'react';
import WhitePaperComp from './WhitePaperComp';


const IntroComp: React.FC<{ num: number }> = ({num}) => {

  //What is Bitcoin? Here I can add components for the intro
  if(num === 1){
    return (
      
      <p>What is Bitcoin</p>
    )
  }
  
//Businesses
  if(num === 2){
    return (
      
      <p>Businesses</p>
    )
  }
  //White paper
  if(num === 3){
    return (
      
      <WhitePaperComp/>
    )
  }

    return (
      
      <div>
      Hello This is Introduction{num}
      </div>
    )
  };
  export default IntroComp;