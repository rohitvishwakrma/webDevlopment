import React from 'react'
import ShopItem from './ShopItem'
import Empty from './Empty'

function Item({Items}) {
  return (
    <>
      <ul>
        <h4> Items are</h4>
       <ShopItem> </ShopItem>
       <Empty ShopItem={Items}></Empty>
    </ul>
    </>
  )
}

export default Item
