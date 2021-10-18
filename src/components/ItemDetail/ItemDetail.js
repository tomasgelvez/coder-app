import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ItemCount from "../ItemCount/ItemCount";



//Comienza el componente
const ItemDetail = ({product,productsAdded,addProdFunction}) => {

    const [count, setCount] = useState(0)

    if(!product ){
        return <h3>Cargando ultimos detalles...</h3>
    }


    return(
        <>
            <div className="container">
            <div className="row">
            <div className="card d-flex text-aling-center  " id={product.id} style={{width: '18rem'}}>

                <img className="card-img-top" src={product.imagen} alt="Card"></img>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                    </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{product.price}</li>
                            <li className="list-group-item">Stock :{product.stock}</li>

                        </ul>
                            <ItemCount products={product} setCount={setCount}/>

            </div>
            </div>
            </div>

        </>
    )
}


export default ItemDetail

