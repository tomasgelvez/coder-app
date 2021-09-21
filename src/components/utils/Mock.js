
import Imagenes from '../Assets/img/images.js'


const productos = [
    {id: '1', imagen: Imagenes.Televisor1 , title: 'Televisor led 42 pulgadas' , description: ' hola' , stock: 'Stock: 11' , price: 'Precio : 25000'},
    {id: '2', imagen: Imagenes.Heladera1, title: 'Heladera ultima generacion' , description: 'hola' , stock: 'Stock: 21' , price: 'Precio : 45000'},
    {id: '3' , imagen: Imagenes.Celular1, title: 'Celular Motorola x ' , description: 'hola' , stock: 'Stock: 19' , price: 'Precio : 23000'},
    {id: '4' , imagen: Imagenes.Lavarropa1, title: 'Lavarropa ultima generacion' , description: 'hola' , stock: ' Stock: 41' , price: 'Precio : 35499'}
]

export const getList = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos)
    }, 2000)
})



export const getProduct = new Promise ((resolver) => {

    setTimeout(() => {
        resolver(productos)
    },2000)
})


