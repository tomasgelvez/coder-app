import React from "react";
import Item  from '../item/Item.js'





const ItemList = ({productos}) => {


    if(productos.length === 0){
        return <h3>Cargando stock...</h3>
    }





    return (
        <>
        {productos.map(producto => <Item producto={producto}/>)}
        </>
    )
}


export default ItemList