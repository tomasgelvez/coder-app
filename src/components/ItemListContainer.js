import { useEffect, useState } from "react";
import ItemList from "./Items/ItemList";
import {getList} from './utils/Mock'


function  ItemsListContainer (){
    const [productos, setProductos] = useState ([])

    useEffect(() => {
        getList
        .then(respuesta => {
            setProductos(respuesta)
        })
        .catch(error => console.log(error))
    })



    return(

        <div>
            <ItemList productos = {productos}/>
        </div>

    )
}


export default ItemsListContainer