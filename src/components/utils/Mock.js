


const productos = [
    {id: '1', imagen: '', title: 'Televisor led 42 pulgadas' , description: 'hola' , stock: '11' , price: '25000'},
    {id: '2', imagen: '', title: 'Heladera ultima generacion' , description: 'hola' , stock: '21' , price: '45000'},
    {id: '3' , imagen: '', title: 'Celular Motorola x ' , description: 'hola' , stock: '19' , price: '23000'},
    {id: '4' , imagen: '', title: 'Lavarropa ultima generacion' , description: 'hola' , stock: '41' , price: '35499'}
]

export const getList = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos)
    }, 2000)
})