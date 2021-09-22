import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



//Simulando promesa






//Comienza el componente
const ItemDetail = ({product}) => {

    if(!product ){
        return <h3>Ya no hay productos</h3>
    }

    return(

            <div className="card" id={product.id} style={{width: '18rem'}}>
                <img className="card-img-top" src={product.imagen} alt="Card"></img>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                    </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{product.price}</li>
                            <li className="list-group-item">{product.stock}</li>

                        </ul>
                            <div className="card-body">
                                <a href="#" className="card-link">Comprar</a>
                                <a href="#" className="card-link">Cancelar</a>
                            </div>
            </div>

    )
}


export default ItemDetail