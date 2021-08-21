import React from 'react';
import '../css/productsCards.css';

function ProductsCards(props) {
    return (
        <>
            <div className="card">
                <img src={props.imagen} className="card-img-top" alt="Prueba"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.producto}</h5>
                    <p className="card-text">{props.descripcion}</p>
                    <p className="card-price">{props.precio}</p>
                    <div className="d-inline cardFooter">
                        <a href="/" className="btn" id="conoceMas">Conoce +</a>
                        <span>|</span>
                        <a href="/" className="btn">
                            <img src={process.env.PUBLIC_URL + '/images/cart.svg'} id="cartInvoice" alt="Carrito"></img>
                        </a>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default ProductsCards;