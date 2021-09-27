import { useState } from "react/cjs/react.development"





const ItemCount = ({products}) =>{
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
 

    return(
        <div align="center">
            <table>
                <tbody>
                    <tr>
                        <td align="left"><button className="Button" onClick={()=> onRemove() }>-</button></td>
                        <td align="center">{quantity}</td>
                        <td align="right"><button className="Button" onClick={()=> onAdd() }>+</button></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}



export default ItemCount