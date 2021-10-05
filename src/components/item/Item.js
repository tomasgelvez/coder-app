import React from "react";
import { Link } from "react-router-dom";








const Item = ({products}) =>{





    return(

    <div className="card d-flex" id={products.id} style={{width: '18rem'}}>
        <img src={products.imagen} alt={products.title}></img>
            <div className="card-body">
                <h5 className="card-title">{products.title}</h5>
                <p className="card-text">{products.description}</p>
                 <Link to={`/product/${products.title}`} className="btn btn-dark">Ver detalles </Link>
            </div>
    </div>


    )
}


export default Item