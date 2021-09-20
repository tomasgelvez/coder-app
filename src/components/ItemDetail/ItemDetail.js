import React from "react";
import Count from "../Count";


const ItemDetail = ({productos}) => {



return(
    <>
    <div className="card" style={{width:' 18rem', padding: '4px'}}>
            <img className="card-img-top" src={productos.imagen} alt="imagen"></img>
            <div className="card-body">
            <h5 className="card-title">{productos.title}</h5>
                <p className="card-text">{productos.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{productos.stock}</li>
                <li className="list-group-item">{productos.price}</li>

            </ul>
            <button type="button" className="btn btn-success" >Buy</button>
            <button type="button" className="btn btn-danger" >Remove</button>    
    </div>


    </>
)


}

export default ItemDetail;