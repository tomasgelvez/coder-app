import React from "react";
import { Link } from "react-router-dom";








const Item = ({producto}) =>{





    return(
        <>
    <div className="card d-flex" id={producto.id} style={{width: '18rem'}}>
        <img className="card-img-top" src={producto.imagen} alt={producto.title}></img>
            <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">{producto.description}</p>
                 <Link to={`/product/${producto.title}`} className="btn btn-dark">Ver detalles </Link> 
            </div>
    </div>

        </>
    )
}


export default Item