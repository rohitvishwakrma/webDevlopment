import React from 'react'
import ShopItem from './ShopItem'
function Empty(props) {
  let {ShopItem}=props;
  return (
    <>
      {props.ShopItem === 0  && <h4>Shop itemm is Missinig here ..</h4>}
    </>
  )
}

export default Empty