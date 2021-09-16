


const productos = [
    {id: '1', imagen: '', title: 'Televisor led 42 pulgadas' , description: ' hola' , stock: 'Stock: 11' , price: 'Precio : 25000'},
    {id: '2', imagen: '', title: 'Heladera ultima generacion' , description: 'hola' , stock: 'Stock: 21' , price: 'Precio : 45000'},
    {id: '3' , imagen: '', title: 'Celular Motorola x ' , description: 'hola' , stock: 'Stock: 19' , price: 'Precio : 23000'},
    {id: '4' , imagen: '', title: 'Lavarropa ultima generacion' , description: 'hola' , stock: ' Stock: 41' , price: 'Precio : 35499'}
]

export const getList = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos)
    }, 2000)
})



