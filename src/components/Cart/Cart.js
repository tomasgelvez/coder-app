import CartContext from "../../context/CartContex"
import { useContext,useEffect,useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { getDoc, Timestamp, writeBatch,doc, DocumentSnapshot, addDoc,collection} from "@firebase/firestore";
import { db } from "../../Services/firebase/firebase";
import UserContext from '../../context/UserContext'


//Aca creo el componente Cart

const Cart = () => {
//Aca llamo del cartContext las funciones creadas.
    const { products,removeItem,getTotal,clear } = useContext(CartContext)
    const {processingOrder,setProcessingOrder} = useState(false)
    const {user} = useContext(UserContext)
    const [total, setTotal] = useState()




    useEffect(() => {
        setTotal(getTotal())
    }, [getTotal])


    const confirmOrder = () =>{
        setProcessingOrder(true)

        const objOrder = {
            buyer: user,
            items: products,
            total: getTotal(),
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)
        const outOfStock = []

        objOrder.items.forEach((prod,i) => {
            getDoc(doc(db,'items', prod.id)).then(DocumentSnapshot => {
                if(DocumentSnapshot.data().stock >= objOrder.items[i].quantity){
                    batch.update(doc(db, 'items', DocumentSnapshot.id),{
                        stock : DocumentSnapshot.data().stock - objOrder.items[i].quantity
                    })
                }else{
                    outOfStock.push({...DocumentSnapshot.data(), id: DocumentSnapshot.id})
                }
            })
        })


        if(outOfStock.length === 0){
            addDoc(collection(db, 'compras'), objOrder).then(() =>{
                batch.commit().then(() => {
                    console.log("La orden se ejecuto con exito")
                })
            }).catch((error) =>{
                console.log("hay un error en el stock")
            }).finally(() =>{
                setProcessingOrder(false)
                clear()
            })
        }
    }




//Aca dibujo la cart, con su respectiva informacion(id,precio, cantidad,nombre e img)
    return (
        
<>

    <div>
        {products.map(product =>{
            return(
                <>
                <div className="container ">
                    <div className="row">
                        <div className="card d-flex text-aling-center" id={product.id} style={{width: "18rem"}}>
                            <img className="card-img-top" src={product.imagen} alt={product.title}></img>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"> {product.price}$</li>
                                        <li className="list-group-item">Stock: {product.stock}</li>
                                        <li className="list-group-item">Cantidad elegida: {product.quantity}</li>


                                    </ul>
                                        <div className="card-body p-3">
                                            <button href="#" className="btn btn-dark ">Comprar</button>
                                            
                                            <button onClick={() => {removeItem(product.id)}} className="removeBtn btn btn-dark">X</button>
                                        </div>
                        </div>
                    </div>

                    
                </div>
                
            </>
            )

        })

        }

    </div>
    <ul>
    {!processingOrder && products.length > 0 && <button onClick={() => confirmOrder()} className="Button">Confirmar Compra</button>}

    {(total > 0 && !processingOrder) && <h3>Total: ${total}</h3>}
    

    <button href="#" className="btn btn-dark" onClick={() =>{clear()}}>Borrar compras</button>
    </ul>
                </>
    )
}

export default Cart

