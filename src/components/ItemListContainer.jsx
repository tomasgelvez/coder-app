import { useEffect, useState } from "react";
import ItemList from "./Items/ItemList";

const productos = [
    {id: '1', title: 'Televisor led 42 pulgadas' , description: 'hola' , stock: '11' , price: '25000'},
    {id: '2', title: 'Heladera ultimageneracion' , description: 'hola' , stock: '21' , price: '45000'},
    {id: '3', title: 'Celular Motorola x ' , description: 'hola' , stock: '19' , price: '23000'},
    {id: '4', title: 'Lavarropa ultima generacion' , description: 'hola' , stock: '41' , price: '35499'}
]

const getList = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos)
    }, 2000)
})

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