import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail";

const getProduct = () => {
    return new Promise((resolve,reject) =>{
        const productos = [
            {id: '1', imagen:'./img/televisor1.jpg' , categoria: 'Televisores' ,title: 'Televisor led 42 pulgadas' , description: 'Televisor led, ultima generacion' , stock: 'Stock: 11' , price: 'Precio : 25000'},
            {id: '2' , imagen: './img/celular.png', categoria: 'Celulares',title: 'Celular Motorola x ' , description: 'Celular, ultima generacion' , stock: 'Stock: 19' , price: 'Precio : 23000'},
            {id: '3' , imagen: './img/lavarropa.png', categoria: 'Lavarropa',title: 'Lavarropa ultima generacion' , description: 'Lavarropa, ultima generacion' , stock: ' Stock: 41' , price: 'Precio : 35499'},
            {id: '4', imagen: './img/shopping.png', categoria: 'Heladera',title: 'Heladera ultima generacion' , description: 'Heladera,ultima generacion' , stock: 'Stock: 21' , price: 'Precio : 45000'}
        ]
        setTimeout(() => resolve(productos))
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