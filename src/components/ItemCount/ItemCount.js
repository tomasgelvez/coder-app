import { useState,useEffect } from "react/cjs/react.development"
import { useContext } from "react"
import CartContext from "../../context/CartContex"


//Empiezo el componente itemCount

const ItemCount = ({product,setCount}) =>{
    const {addItem,isInCart,getProduct} = useContext(CartContext)
    const [quantity, setQuantity] = useState(0)
    

//Aca verifico si esta en el carrito que me lo muestre
    useEffect(() => {
        if(isInCart(product.id)) {
           const oldQuantity = getProduct(product.id)?.quantity
           setQuantity(oldQuantity)
        }
        return(() => {
            setQuantity(0)
        })
    }, [product, getProduct, isInCart])

//Aca sumo un producto

    const onAdd = () => {
        if(quantity < product.stock) {
            setQuantity(quantity+1)
        }
    }

//Aca resto un producto

    const onRemove = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1)
        }
    }
//Aca agrego una carta al carrito

    const onAddtoCart = () =>{
        /* const newProduct = {
            ...products,
            quantity: quantity
        } 
        addProdFunction([...productsAdded, newProduct]) */
        setCount(quantity)
        addItem(product,quantity)
        console.log(product)
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
                        <td align="left"><button className="btn btn-dark" onClick={()=> onRemove() }>-</button></td>
                        <td align="center" style={{fontSize : '20px'}}>{quantity}</td>
                        <td align="right"><button className="btn btn-dark" onClick={() => onAdd() }>+</button></td>
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