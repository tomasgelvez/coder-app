import React from "react";
import Item  from '../Item/Item.js'





const ItemList = ({products}) => {


/*     if(products?.length === 0){
        return <h3>Cargando stock...</h3>
    }
 */




    return (
        <>
        <div className="container d-flex justify-content-center aling-items-center ">
	        <div className="row">
                {products?.map(products =>
                (
                    <div className = "col-md-3">
                        <Item  products={products} key={products.id} />
                    </div>
                ))}
            </div>

        </div>
        </>
    )
}


export default ItemList