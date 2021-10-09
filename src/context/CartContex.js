
import { useState,createContext } from "react";




const CartContext = createContext();


export const CartContextProvider = ({children}) => {
    const [products,setProducts] = useState([])
    console.log(products)
    const addItem = (item,quantity) => {
        console.log(item)
        const newProduct = {
            ...item,
            quantity: quantity

        }

        if(!isInCart(item.id)){
            setProducts([...products, newProduct])
        }else{
            const newProducts = products.map(prod =>{
                if(prod.id === item.id){
                    const newProduct ={
                        ...prod,
                        quantity:  quantity
                    }
                    return newProduct
                }else{
                    return prod
                }
            } )

            setProducts(newProducts)
        }

    }

    const removeItem = (id) => {
        const newProduct = products.filter(element => element.id !== id)
        setProducts(newProduct)
    }

    const clear = () => {
        setProducts([])
    }
    const isInCart = (id) => {
        return products.some(prod => prod.id === id)
    }

    const getTotal = () => {
        let total = 0
        products.forEach(prod => {
            total =  total +prod.price + prod.quantity
        })
        return total
    }

    const getProduct = (id) => {
        return products.find(prod => prod.id === id)
    }

    const getQuantity = () =>{
        let count = 0
        products.forEach(prod => {
            count = count + prod.quantity
        })
        return count
    }

    return(
        <CartContext.Provider 
        value={{products
            ,addItem
            ,removeItem
            ,clear
            ,isInCart
            ,getQuantity
            ,getProduct
            ,getTotal
        }}
        >
            {children}
        </CartContext.Provider>
    )
}



export default CartContext