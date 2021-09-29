import { useState } from "react/cjs/react.development"

import {Link} from 'react-router-dom'
import { useContext } from "react"
import CartContext from "../../context/CartContex"




const ItemCount = ({products,productsAdded,addProdFunction,setCount}) =>{
    const {addItem} = useContext(CartContext)
    const [quantity, setQuantity] = useState(0)

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
        const newProduct = {
            ...products,
            quantity: quantity
        }
        console.log(newProduct)
        addProdFunction([...productsAdded, newProduct])
        setCount(quantity)
        setTimeout(() =>{

            setQuantity(0)

        } ,1000);
        addItem(console.log('agregue algo'))
    }

console.log(addItem)
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
                       <td align="center" colSpan="5"><button className="btn btn-dark" onClick={()=>onAddtoCart()}>Agregar al carrito</button></td>
                        
                    </tr>

                </tbody>
            </table>
        </div>
    )
}



export default ItemCount