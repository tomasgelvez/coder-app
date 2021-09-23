import { useEffect, useState } from "react";

import ItemList from '../itemList/ItemList'






const productos = [
    {id: '1', imagen:'./img/televisor1.jpg' , categoria: 'televisores' ,title: 'Televisor led 42 pulgadas' , description: 'Televisor led, ultima generacion' , stock: 'Stock: 11' , price: 'Precio : 25000'},
    {id: '2', imagen: './img/shopping.png', categoria: 'heladera',title: 'Heladera ultima generacion' , description: 'Heladera,ultima generacion' , stock: 'Stock: 21' , price: 'Precio : 45000'},
    {id: '3' , imagen: './img/celular.png', categoria: 'celulares',title: 'Celular Motorola x ' , description: 'Celular, ultima generacion' , stock: 'Stock: 19' , price: 'Precio : 23000'},
    {id: '4' , imagen: './img/lavarropa.png', categoria: 'Lavarropa',title: 'Lavarropa ultima generacion' , description: 'Lavarropa, ultima generacion' , stock: ' Stock: 41' , price: 'Precio : 35499'}
]

function getList() {
    return new Promise((resolve,reject) =>{
         
        setTimeout(() => resolve(productos))
    } )


}



function  ItemListContainer (){
    const [listProduct, setProductos] = useState ([])
    

    useEffect(() => {
        const list = getList()
        list.then(list => {
            setProductos(list)
        })
    },[])



    return(

        <div>
            <ItemList listProduct = {listProduct} />
        </div>

    )
}


export default ItemListContainer