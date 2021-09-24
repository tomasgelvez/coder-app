import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "../itemList/ItemList";

const getProductList = () => {
    return new Promise((resolve, reject) => {
        const productos = [

            {id: '3', imagen:'../img/televisor3.png' , category: 'Televisores' ,title: 'Televisor SmarTV' , description: 'Televisor led, ultima generacion' , stock: 'Stock: 11' , price: 'Precio : 25000'},
            {id: '4', imagen:'../img/televisor4.png' , category: 'Televisores' ,title: 'Televisor SONY 65 pulgadas' , description: 'Televisor led, ultima generacion' , stock: 'Stock: 11' , price: 'Precio : 25000'},


            {id: '8' , imagen: '../img/celular3.jpg', category: 'Celulares',title: 'Celular Samsung A20' , description: 'Celular, ultima generacion' , stock: 'Stock: 19' , price: 'Precio : 23000'},
            {id: '9' , imagen: '../img/celular4.jpg', category: 'Celulares',title: 'Celular Xiaomi' , description: 'Celular, ultima generacion' , stock: 'Stock: 19' , price: 'Precio : 23000'},

            {id: '13' , imagen: '../img/lavarropa3.jpg', category: 'Lavarropa',title: 'Lavarropa automatico whirpool' , description: 'Lavarropas automatico whirpool WWI16CS 10 plateado' , stock: ' Stock: 41' , price: 'Precio : 35499'},

            {id: '15' , imagen: '../img/lavarropa5.jpg', category: 'Lavarropa',title: 'Lavarropa automatico Samsung' , description: 'Lavarropa, ultima generacion' , stock: ' Stock: 41' , price: 'Precio : 35499'},

            {id: '19', imagen: '../img/heladera4.png', category: 'Heladeras',title: 'Heladera Kohinoor' , description: 'Heladera,ultima generacion' , stock: 'Stock: 21' , price: 'Precio : 45000'},
            {id: '20', imagen: '../img/heladera5.png', category: 'Heladeras',title: 'Heladera Whirpool' , description: 'Heladera,ultima generacion' , stock: 'Stock: 21' , price: 'Precio : 45000'}


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