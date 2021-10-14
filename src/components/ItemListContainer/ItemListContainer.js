import { useEffect, useState } from "react";

import ItemList from '../itemList/ItemList'






const productos = [

    
    {id: '3', imagen:'../img/televisor3.png' , category: 'Televisores' ,title: 'Televisor SmarTV'  , stock: ' 11' , price: 25000},
    {id: '4', imagen:'../img/televisor4.png' , category: 'Televisores' ,title: 'Televisor SONY 65 pulgadas'  , stock: ' 15' , price:  25000},

    {id: '8' , imagen: '../img/celular3.jpg', category: 'Celulares',title: 'Celular Samsung A20'  , stock: ' 17' , price:  23000},
    {id: '9' , imagen: '../img/celular4.jpg', category: 'Celulares',title: 'Celular Xiaomi' , stock: ' 31' , price: 23000},

    {id: '13' , imagen: '../img/lavarropa3.jpg', category: 'Lavarropa',title: 'Lavarropa automatico whirpool'  , stock: '  41' , price: 35499},
    {id: '15' , imagen: '../img/lavarropa5.jpg', category: 'Lavarropa',title: 'Lavarropa automatico Samsung'  , stock: '  41' , price:  35499},

    {id: '19', imagen: '../img/heladera4.png', category: 'Heladeras',title: 'Heladera Kohinoor'  , stock: ' 29' , price: 45000},
    {id: '20', imagen: '../img/heladera5.png', category: 'Heladeras',title: 'Heladera Whirpool'  , stock: ' 21' , price:  64000}


]

function getList() {
    return new Promise((resolve) =>{

        setTimeout(() => resolve(productos),2000)
    } )


}



function  ItemListContainer (){
    const [products, setProducts] = useState ([])


    useEffect(() => {
        const list = getList()
        list.then(list => {
            setProducts(list)
        })
    },[])



    return(

        <div>
            <ItemList products = {products} />
        </div>


    )
}


export default ItemListContainer