import React from "react";
import Item  from '../item/Item.js'





const ItemList = ({listProduct}) => {


    if(listProduct?.length === 0){
        return <h3>Cargando stock...</h3>
    }





    return (
        <>
        <div className="container d-flex justify-content-center aling-items-center ">
	        <div className="row">
                {listProduct?.map(producto =>
                (
                    <div className = "col-md-6" key={producto.id}>
                        <Item producto={producto} />
                    </div>
                ))}
            </div>

        </div>
        </>
    )
}


export default ItemList