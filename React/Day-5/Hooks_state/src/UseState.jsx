import React from 'react'
import { useState } from 'react'


function UseState() {
  const[count,setCount]= useState(0);
  return (
    <>
     <button onClick={()=>setCount(count+1)}>Increase</button>  
    </>
  )
}

export default UseState