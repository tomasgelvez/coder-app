import React, { useContext } from "react";
import { useState } from "react";




const CartContext = React.createContext();


export const CartContextProvider = ({children}) => {
    const [productsPrice , setproductsPrice] = useState(0)
    const [cartQuantity, setCartQuantity] = useState(0)
    const [products, setProducts] = useState([])

    const addItem  = (products, quantity) =>{
        const quantityCart = quantity + cartQuantity
        const priceP = productsPrice + (quantity * products.price)
        if(products.stock >= quantityCart){
            const cartProductsId = products.map(itemCart => itemCart.id)

            if(cartProductsId.includes(products.id)){
                const cartProductsReload = products.map((i) => {

                    if(i.id === products.id){
                        let quantityOld = i.quantityItem
                        return{
                            ...i,
                            quantityItem : quantity + quantityOld
                        }

                    }else{
                        return i
                    }
                })
                setProducts(cartProductsReload)
                setCartQuantity(quantityCart)
                setproductsPrice(priceP)
            }else{
                const newItem = {
                ...products,
                quantityItem : quantity
                } 
                setProducts([...products, newItem])
                setCartQuantity(quantityCart)
                setproductsPrice(priceP)
            }
        }/* else{
            alert("No hay mas stock")
        } */
    }


    const removeItem = (id) => {
        const newProduct = products.filter(element => element.id !== id)
        setProducts(newProduct)
    }

    const clear = () => {
        setProducts([])
    }
    const isInCart = (id) => {
        products.forEach(element => {
            if(element.id === id)return true
        })
        return false
    }

    return(
        <CartContext.Provider 
        value={{addItem,removeItem,clear,isInCart}}
        >
            {children}
        </CartContext.Provider>
    )
}



export default CartContext