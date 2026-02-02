
import { useState } from 'react';
import './App.css'
import React from 'react'
import { useEffect } from 'react';
import { getPost } from './api';


const App = () => {
  const[data,setData]=useState(null);
  
  useEffect(()=>{ 
    getPost().then((posts)=>{setData(posts)});
  },[]);
  return (
    <div>
      { data ?data.map((e)=><li>{e.title}</li>) : <p> No data </p>}
    </div>
  )
}

export default App