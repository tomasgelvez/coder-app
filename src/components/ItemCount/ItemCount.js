import { useState,useEffect } from "react/cjs/react.development"
import  NotificationContext  from "../../context/NotificacionContext"
import {Link} from 'react-router-dom'
import { useContext } from "react"
import CartContext from "../../context/CartContex"




const ItemCount = ({products,setCount,addProdFunction,productsAdded}) =>{
    const {addItem,isInCart,getProduct} = useContext(CartContext)
    const [quantity, setQuantity] = useState(0)
    


    useEffect(() => {
        if(isInCart(products.id)) {
           const oldQuantity = getProduct(products.id)?.quantity
           setQuantity(oldQuantity)
        }
        return(() => {
            setQuantity(0)
        })
    }, [products, getProduct, isInCart])

    const onAdd = () => {
        if(quantity < products.stock) {
            setQuantity(quantity+1)
        }
    }

    const onRemove = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1)
        }
    }
    const onAddtoCart = () =>{
        /* const newProduct = {
            ...products,
            quantity: quantity
        } 
        addProdFunction([...productsAdded, newProduct]) */
        setCount(quantity)
        addItem(products,quantity)
        console.log(products)
        console.log(quantity)
        
         
         
            
        setTimeout(() =>{

            setQuantity(0)

        } ,1000); 

    }


    return(
        <div align="center">
            <table >
                <tbody>
                    <tr>
                        <td align="left"><button className="Button" onClick={()=> onRemove() }>-</button></td>
                        <td align="center" style={{fontSize : '20px'}}>{quantity}</td>
                        <td align="right"><button className="Button" onClick={() => onAdd() }>+</button></td>
                    </tr>
                    <tr>
                        <td align="center">
                       <button className="btn btn-dark" onClick={()=>onAddtoCart()}>Agregar al carrito</button>
                       </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}



export default ItemCount