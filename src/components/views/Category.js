import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "../itemList/ItemList";

const getProductList = () => {
    return new Promise((resolve, reject) => {
        const productos = [
            {id: '1', imagen:'../img/televisor1.jpg' , category: 'Televisores' ,title: 'Televisor led 42 pulgadas' , description: 'Televisor led, ultima generacion' , stock: 'Stock: 11' , price: 'Precio : 25000'},
            {id: '2' , imagen: '../img/celular.png', category: 'Celulares',title: 'Celular Motorola x ' , description: 'Celular, ultima generacion' , stock: 'Stock: 19' , price: 'Precio : 23000'},
            {id: '3' , imagen: '../img/lavarropa.png', category: 'Lavarropa',title: 'Lavarropa ultima generacion' , description: 'Lavarropa, ultima generacion' , stock: ' Stock: 41' , price: 'Precio : 35499'},
            {id: '4', imagen: '../img/shopping.png', category: 'Heladeras',title: 'Heladera ultima generacion' , description: 'Heladera,ultima generacion' , stock: 'Stock: 21' , price: 'Precio : 45000'}
        ]


        setInterval(() => resolve(productos))
    })
}


function Category(){

    const {name} = useParams()
    const [products, setProducts] = useState(undefined)

    useEffect(() => {
        const listProducts = getProductList()
        listProducts.then(result => {
            const product = result.filter(prod => prod.category === name)
            console.log('soy product' + product)
            setProducts(product)
        })

        return(() => {
            setProducts(undefined)
        })
    },[name])


    return(
        <>
            <div className="views container">
                <h1>{name}</h1>
                <ItemList listProduct={products}/>
            </div>
        </>
    )
}

export default Category