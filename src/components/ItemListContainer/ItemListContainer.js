import { useEffect, useState } from "react";
import ItemList from '../itemList/ItemList'
import {getList} from '../utils/Mock'


function  ItemListContainer (){
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


export default ItemListContainer