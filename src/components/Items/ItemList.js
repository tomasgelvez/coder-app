import React from "react";
import Item from './Item.js'


const ItemList = ({product}) => {
  return(
    <>
      {product.map(product=> <Item key={product.id} item={product} />


      )}

    </>
  )
}


export default ItemList