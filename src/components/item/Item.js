import React from "react";








const Item = ({producto}) =>{





    return(
        <>
    <div className="card" id={producto.id} style={{width: '18rem'}}>
        <img className="card-img-top" src={producto.imagen} alt=""></img>
            <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">{producto.description}</p>
                <a href="#" className="btn btn-primary">INFO</a>
            </div>
    </div>

        </>
    )
}


export default Item