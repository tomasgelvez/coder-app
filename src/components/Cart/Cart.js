import CartContext from "../../context/CartContex"
import { useContext,useState,useRef } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import UserContext from '../../context/UserContext'
import { useHistory } from 'react-router'
import {createOrder} from '../../Services/firebase/firebase'
import Togglable from '../Toggable/Toggable'
import ContactForm from "../ContactForm/ContactForm";
import Swal from 'sweetalert2';




//Aca creo el componente Cart

const Cart = () => {
//Aca llamo del cartContext las funciones creadas.


const [processingOrder, setProcessingOrder] = useState(false)
const [contact, setContact] = useState({
    telefono: '',
    correo: '',
    direccion: '',
    cdgoPostal: ''
})
const { products, clear,removeItem, getTotal } = useContext(CartContext)
const { user } = useContext(UserContext)
const contactFormRef = useRef()
const history = useHistory()

const confirmOrder = () => {
    setProcessingOrder(true)

    const objOrder = {
        comprador: user,
        items: products,
        total: getTotal(),
        telefono: contact.telefono,
        correo: contact.correo,
        direccion: contact.direccion,
        cdgoPostal: contact.cdgoPostal
    }
     
    createOrder(objOrder).then(msg => {
        Swal.fire('Tu compra fué realizada con éxito','los datos son correctos','success')
 
    }).catch(error => {
        Swal.fire(
            'Ocurrio un error', 'error'
        )
    }).finally(() => {
        setProcessingOrder(false)
        clear()
        setContact({
            telefono: '',
            correo: '',
            direccion:'',
            cdgoPostal: ''
        })
        Swal.fire('Tu compra fué realizada con éxito','los datos son correctos','success')
        history.push('/')

    })
}



//Aca dibujo la cart, con su respectiva informacion(id,precio, cantidad,nombre e img)
    return (

<>

<div className="d-flex col-2"  >
        {products.map(product =>{
            return(
                
                <div className="container " key={product.id}>
                    <div className="row">
                        <div className="card d-flex text-aling-center" style={{width: "18rem"}}>
                            <img className="card-img-top" src={product.imagen} alt=""></img>
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
                                            <button onClick={() => {removeItem(product.id)}} className="removeBtn btn btn-dark">X</button>
                                        </div>
                        </div>
                    </div>

                    
                </div>
                
            
            )

        })

        }

    </div>
    <ul>
    
    {(!processingOrder && contact.telefono !== '' && contact.correo !== '' && contact.direccion !== '' && contact.cdgoPostal !== '') &&
                <div>
                    <h4>Telefono: {contact.telefono}</h4>
                    <h4>Correo electronico: {contact.correo}</h4>
                    <h4>Direccion: {contact.direccion}</h4>
                    <h4>Codigo postal: {contact.cdgoPostal}</h4>
                    <button onClick={() => setContact({ telefono: '', correo: '', direccion: '',cdgoPostal: ''})} className='Button' style={{backgroundColor: '#db4025'}}>Borrar datos de contacto</button>
                </div>    
            }
            {(!processingOrder && products.length) > 0 && <Togglable buttonLabelShow={(contact.telefono !== '' && contact.correo !== '' && contact.direccion !== '' && contact.cdgoPostal !== '') ? 'Editar contacto' : 'Agregar contacto'} ref={contactFormRef}>
                                                            <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
                                                          </Togglable> }

    {(getTotal() > 0 && !processingOrder) && <h3>Total: ${getTotal()}</h3>}


    <button href="#" className="btn btn-dark" onClick={() =>{clear()}}>Borrar compras</button>
    {!processingOrder && products.length > 0 && <button onClick={() => confirmOrder()} className="btn btn-dark">Confirmar Compra</button>}    
    </ul>
                </>
    )
}

export default Cart