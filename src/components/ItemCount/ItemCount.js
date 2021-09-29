import { useState } from "react/cjs/react.development"

import {Link} from 'react-router-dom'




const ItemCount = ({products,productsAdded,addProdFunction,setCount}) =>{
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

        setTimeout(() => setQuantity(0),2000)
        
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
                    <tr><td align="center" colSpan="5">
                       <td ><button className="btn btn-dark" onClick={()=>onAddtoCart()}>Agregar al carrito</button></td>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}



export default ItemCount