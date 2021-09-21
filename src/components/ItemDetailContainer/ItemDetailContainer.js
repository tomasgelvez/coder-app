import React from "react";
import { useEffect,useState } from "react";
import { getProduct } from "../utils/Mock";
import ItemDetail from "../ItemDetail/ItemDetail";


export default function ItemDetailContainer (){

    const [producto, setProductos] = useState ([])

    useEffect(() => {
        getProduct
        .then(resolver => {
            const product = resolver.find(prod => prod.id === 1)
            setProductos(product)
        })
        .catch(error => console.log(error))
    })

    return(
        <ItemDetail item={producto}/>

    )

}
