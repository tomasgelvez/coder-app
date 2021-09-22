import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from '../itemList/ItemList'
import {getList, getProducts} from '../utils/Mock'


function  ItemListContainer (){
    const [productos, setProductos] = useState ([])
    const {categoriaid} = useParams()

    useEffect(() => {
        const list = getProducts(categoriaid)
        list.then(list => {
            setProductos(list)
        })
    },[categoriaid])



    return(

        <div>
            <ItemList productos = {productos} categoria={categoriaid}/>
        </div>

    )
}


export default ItemListContainer