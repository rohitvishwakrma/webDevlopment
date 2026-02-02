import React, { useReducer } from 'react'
// useRdecuer fnc
const initialState =0;
const reducer = (CureenState,action)=>{
  // switch(action){
  //   case "Add":
  //     return CureenState+1;
  //   case "Sub":
  //     return CureenState-1;
  //   default :
  //     return CureenState;
  // }
  if(action==="Add"){
    return CureenState+1;
  }
  if(action==="Sub"){
    return CureenState-1;
  }
  return CureenState;

}



function Count() {
  const[state,dispatch]=useReducer(reducer,initialState);
  console.log(state);
  return (
    <>
    <h2>Count is  {state}</h2>
    <button onClick={()=>dispatch("Add")}>+</button> 
    <button onClick={()=>dispatch("Sub")}>-</button>
    </>
  )
}

export default Count