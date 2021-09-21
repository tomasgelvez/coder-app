import React from "react";
import Count from "../Count";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const ItemDetail = ({product}) => {

console.log(product)

return(

    <div className="card" style={{width:' 18rem', padding: '4px'}}>
            <img className="card-img-top" src={product.img} alt="imagen"></img>
            <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{product.stock}</li>
                <li className="list-group-item">{product.price}</li>

            </ul>
            <button type="button" className="btn btn-success" >Buy</button>
            <button type="button" className="btn btn-danger" >Remove</button>
    </div>



)

}

export default ItemDetail;