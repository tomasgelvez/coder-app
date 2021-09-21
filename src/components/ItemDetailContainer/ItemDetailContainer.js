import React from "react";
import { useEffect,useState } from "react";
import { getProduct } from "../utils/Mock";
import ItemDetail from "../ItemDetail/ItemDetail";


export default function ItemDetailContainer (){

    const [productos, setProductos] = useState ([])

    useEffect(() => {
        getProduct
        .then(respuesta => {
            setProductos(respuesta)
        })
        .catch(error => console.log(error))
    })

    return(
        <ItemDetail item={productos}/>
    )
}