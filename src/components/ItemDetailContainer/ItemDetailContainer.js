import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail";

const getProduct = () => {
    return new Promise((resolve,reject) =>{
        const productos = [
            {id: '1', imagen:'../img/televisor1.jpg' , category: 'Televisores' ,title: 'Televisor LG led 42 pulgadas' , description: 'Televisor led, ultima generacion' , stock: 'Stock: 11' , price: 'Precio : 25000'},
            {id: '2', imagen:'../img/televisor2.png' , category: 'Televisores' ,title: 'Televisor SAMSUNG cristal UHD' , description: 'Televisor led, ultima generacion' , stock: 'Stock: 11' , price: 'Precio : 25000'},
            {id: '3', imagen:'../img/televisor3.png' , category: 'Televisores' ,title: 'Televisor SmarTV' , description: 'Televisor led, ultima generacion' , stock: 'Stock: 11' , price: 'Precio : 25000'},
            {id: '4', imagen:'../img/televisor4.png' , category: 'Televisores' ,title: 'Televisor SONY 65 pulgadas' , description: 'Televisor led, ultima generacion' , stock: 'Stock: 11' , price: 'Precio : 25000'},
            {id: '5', imagen:'../img/televisor5.jpg' , category: 'Televisores' ,title: 'Televisor SAMSUNG curvo UHD' , description: 'Televisor led, ultima generacion' , stock: 'Stock: 11' , price: 'Precio : 25000'},
            {id: '6' , imagen: '../img/celular.png', category: 'Celulares',title: 'Celular Motorola x ' , description: 'Celular, ultima generacion' , stock: 'Stock: 19' , price: 'Precio : 23000'},
            {id: '7' , imagen: '../img/celular2.jpg', category: 'Celulares',title: 'Celular Motorola x ' , description: 'Celular, ultima generacion' , stock: 'Stock: 19' , price: 'Precio : 23000'},
            {id: '8' , imagen: '../img/celular3.jpg', category: 'Celulares',title: 'Celular Samsung A20' , description: 'Celular, ultima generacion' , stock: 'Stock: 19' , price: 'Precio : 23000'},
            {id: '9' , imagen: '../img/celular4.jpg', category: 'Celulares',title: 'Celular Xiaomi' , description: 'Celular, ultima generacion' , stock: 'Stock: 19' , price: 'Precio : 23000'},
            {id: '10' , imagen: '../img/celular5.jpg', category: 'Celulares',title: 'Celular Nokia  ' , description: 'Celular, ultima generacion' , stock: 'Stock: 19' , price: 'Precio : 23000'},
            {id: '11' , imagen: '../img/lavarropa.png', category: 'Lavarropa',title: 'Lavarropa ultima generacion' , description: 'Lavarropa, ultima generacion' , stock: ' Stock: 41' , price: 'Precio : 35499'},
            {id: '12' , imagen: '../img/lavarropa2.jpg', category: 'Lavarropa',title: 'Lavarropa Drean automatico' , description: 'Lavarropa, ultima generacion' , stock: ' Stock: 41' , price: 'Precio : 35499'},
            {id: '13' , imagen: '../img/lavarropa3.jpg', category: 'Lavarropa',title: 'Lavarropa automatico whirpool' , description: 'Lavarropas automatico whirpool WWI16CS 10 plateado' , stock: ' Stock: 41' , price: 'Precio : 35499'},
            {id: '14' , imagen: '../img/lavarropa4.jpg', category: 'Lavarropa',title: 'Lavarropa automatico Inverter BGH' , description: 'Lavarropa, ultima generacion' , stock: ' Stock: 41' , price: 'Precio : 35499'},
            {id: '15' , imagen: '../img/lavarropa5.jpg', category: 'Lavarropa',title: 'Lavarropa automatico Samsung' , description: 'Lavarropa, ultima generacion' , stock: ' Stock: 41' , price: 'Precio : 35499'},
            {id: '16', imagen: '../img/heladera1.png', category: 'Heladeras',title: 'Heladera cycle defrost Patrick ' , description: 'Heladera,ultima generacion' , stock: 'Stock: 21' , price: 'Precio : 70.000'},
            {id: '17', imagen: '../img/heladera2.png', category: 'Heladeras',title: 'Heladera GAFA' , description: 'Heladera,ultima generacion' , stock: 'Stock: 21' , price: 'Precio : 45000'},
            {id: '18', imagen: '../img/heladera3.png', category: 'Heladeras',title: 'Heladera LG' , description: 'Heladera bajo consumo' , stock: 'Stock: 21' , price: 'Precio : 45000'},
            {id: '19', imagen: '../img/heladera4.png', category: 'Heladeras',title: 'Heladera Kohinoor' , description: 'Heladera,ultima generacion' , stock: 'Stock: 21' , price: 'Precio : 45000'},
            {id: '20', imagen: '../img/heladera5.png', category: 'Heladeras',title: 'Heladera Whirpool' , description: 'Heladera,ultima generacion' , stock: 'Stock: 21' , price: 'Precio : 45000'}
        
        
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