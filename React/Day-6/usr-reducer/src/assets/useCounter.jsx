import React from 'react'
import { useState } from 'react';
const useCounter = (startVal=0) => {
  function Add(){
    setCount(count+1);
  }
  function Sub(){
    setCount(count-1);
  }
  function Reset(){
    setCount(0);
  }
  const [count, setCount] = useState(startVal);
  return [Add,Sub,Reset,count];
};

export default useCounter