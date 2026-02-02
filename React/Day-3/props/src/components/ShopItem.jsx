import React from 'react'
// let Items =[];
let Items =["banana","apple","mango","orange"]
function ShopItem() {
  return (
    <>
      {
        Items.map((item,index)=>{
          return <li key={index}>{item}</li>
        })
      }
    </>
  )
}

export default ShopItem