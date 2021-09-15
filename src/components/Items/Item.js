import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



 

const Item = ({producto}) => {

return(
        <>
        
        <div className="card" >
            <img className="card-img-top" src="#" alt="imagen"></img>
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
        </>
        ) 
}


export default Item