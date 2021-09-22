import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from "../ItemDetail/ItemDetail";

const getProduct = () => {
	return new Promise((resolve,reject) => {

	const productos = [
	{id: '1', imagen:'./img/televisor1.jpg' , categoria: 'televisores' ,title: 'Televisor led 42 pulgadas' , description: ' hola' , stock: 'Stock: 11' , price: 'Precio : 25000'},
    {id: '2', imagen: './img/shopping.png', categoria: 'heladera',title: 'Heladera ultima generacion' , description: 'hola' , stock: 'Stock: 21' , price: 'Precio : 45000'},
    {id: '3' , imagen: './img/celular.png', categoria: 'Celular',title: 'Celular Motorola x ' , description: 'hola' , stock: 'Stock: 19' , price: 'Precio : 23000'},
    {id: '4' , imagen: './img/lavarropa.png', categoria: 'Lavarropa',title: 'Lavarropa ultima generacion' , description: 'hola' , stock: ' Stock: 41' , price: 'Precio : 35499'}
	]
	setTimeout(() => resolve(productos),2000)
})}

//Comienza el componente
const ItemDetailContainer = () => {
    const {itemid} = useParams()
    const [product, setProduct] = useState(undefined)



    useEffect(() => {
        const listProduct = getProduct()
        listProduct.then(result => {
            const producto = result.find(prod => prod.id === itemid )

            setProduct(producto)
        })
        return(() => {
            setProduct(undefined)
        })
    },[itemid])

    return(
        <>
            <ItemDetail producto={product} item={itemid}/>

        </>

    )


}




export default ItemDetailContainer