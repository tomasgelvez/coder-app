import React from "react";
import Item  from '../item/Item.js'





const ItemList = ({products}) => {


    if(products?.length === 0){
        return <h3>Cargando stock...</h3>
    }





    return (
        <>
        <div className="container d-flex justify-content-center aling-items-center ">
	        <div className="row">
                {products?.map(products =>
                (
                    <div className = "col-md-6" >
                        <Item key={products.id} products={products} />
                    </div>
                ))}
            </div>

        </div>
        </>
    )
}


export default ItemList