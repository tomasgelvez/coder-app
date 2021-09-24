import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



//Simulando promesa






//Comienza el componente
const ItemDetail = ({products}) => {

    if(!products ){
        return <h3>Cargando ultimos detalles...</h3>
    }

    return(
        <>

            <div className="card d-flex " id={products.id} style={{width: '18rem'}}>

                <img className="card-img-top" src={products.imagen} alt="Card"></img>
                    <div className="card-body">
                        <h5 className="card-title">{products.title}</h5>
                        <p className="card-text">{products.description}</p>
                    </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{products.price}</li>
                            <li className="list-group-item">{products.stock}</li>

                        </ul>
                            <div className="card-body">
                            <button className="btn btn-dark">Comprar</button>
                            <span></span>
                            <button className="btn btn-dark">Cancelar</button> 
                            
                            </div>
            </div>

        </>
    )
}


export default ItemDetail