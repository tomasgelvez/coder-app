import React from "react";
import Count from "../Count";


const ItemDetail = ({producto}) => {



return(
    
    <div className="card" style={{width:' 18rem', padding: '4px'}}>
            <img className="card-img-top" src={producto.imagen} alt="imagen"></img>
            <div className="card-body">
            <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">{producto.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{producto.stock}</li>
                <li className="list-group-item">{producto.price}</li>

            </ul>
            <button type="button" className="btn btn-success" >Buy</button>
            <button type="button" className="btn btn-danger" >Remove</button>
    </div>


    
)


}

export default ItemDetail;