import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail";

const getProduct = () => {
    return new Promise((resolve,reject) =>{
        const productos = [

            {id: '3', imagen:'../img/televisor3.png' , category: 'Televisores' ,title: 'Televisor SmarTV'  , stock: 'Stock: 11' , price: 'Precio : 25000'},
            {id: '4', imagen:'../img/televisor4.png' , category: 'Televisores' ,title: 'Televisor SONY 65 pulgadas'  , stock: 'Stock: 11' , price: 'Precio : 25000'},

            {id: '8' , imagen: '../img/celular3.jpg', category: 'Celulares',title: 'Celular Samsung A20'  , stock: 'Stock: 19' , price: 'Precio : 23000'},
            {id: '9' , imagen: '../img/celular4.jpg', category: 'Celulares',title: 'Celular Xiaomi' , stock: 'Stock: 19' , price: 'Precio : 23000'},

            {id: '13' , imagen: '../img/lavarropa3.jpg', category: 'Lavarropa',title: 'Lavarropa automatico whirpool'  , stock: ' Stock: 41' , price: 'Precio : 35499'},
            {id: '15' , imagen: '../img/lavarropa5.jpg', category: 'Lavarropa',title: 'Lavarropa automatico Samsung'  , stock: ' Stock: 41' , price: 'Precio : 35499'},

            {id: '19', imagen: '../img/heladera4.png', category: 'Heladeras',title: 'Heladera Kohinoor'  , stock: 'Stock: 25' , price: 'Precio : 45000'},
            {id: '20', imagen: '../img/heladera5.png', category: 'Heladeras',title: 'Heladera Whirpool'  , stock: 'Stock: 25' , price: 'Precio : 64000'}

        ]
        setTimeout(() => resolve(productos),2000)
    } )
}

//Comienza el componente
function ItemDetailContainer() {
    const { title } = useParams()
    const [products, setProducts] = useState(undefined)
    useEffect(() => {
        const listProducts = getProduct()
        listProducts.then(result => {
        const product = result.find(prod => prod.title === title)
        setProducts(product)
    })
    return (() => {
        setProducts(undefined)
    })
    }, [title])

    return (
        <>
            <ItemDetail products={products}  />
        </>
    );
}




export default ItemDetailContainer