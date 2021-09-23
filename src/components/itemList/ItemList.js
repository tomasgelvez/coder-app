import React from "react";
import Item  from '../item/Item.js'





const ItemList = ({listProduct}) => {


    if(listProduct?.length === 0){
        return <h3>Cargando stock...</h3>
    }





    return (
        <>
        {listProduct?.map(producto => <Item key={producto.id} producto={producto} />)}
        </>
    )
}


export default ItemList