
import React from 'react'
import "../components/styl.css"
function InpuBtn() {
  const handle=()=>{
    console.log("submit sucessfully")
  }
  return (
    <>
    <input type="text" name="" id="" />
    <button onClick={handle} id='btn'>Submit</button>
    </>
  )
}

export default InpuBtn