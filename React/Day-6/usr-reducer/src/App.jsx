import React from 'react'
import Count from './Count'
import UseEffect from './assets/UseEffect'
import UseMemo from './assets/UseMemo'
import UseCallBack from './assets/UseCallBack'
import CustomHook from './assets/CustomHook'  
import useCounter from './assets/useCounter'
function App() {
  return (
   <>
   <h1>UseReducer-hook</h1>
    <Count></Count>
    <h2>UseEffect-hook</h2>
    <UseEffect></UseEffect> 
    <h1>UseMemo-hook</h1>
    <UseMemo></UseMemo>
    <h1>UseCallBack-hook</h1>
    <UseCallBack></UseCallBack>
    <h1>Custom-hook</h1>
    <CustomHook></CustomHook>
    <h1>useCounter-hook</h1>
    <useCounter></useCounter>
   </>
  )
}

export default App