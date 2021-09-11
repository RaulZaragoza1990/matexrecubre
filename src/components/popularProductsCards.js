import React from 'react';
import '../css/popularProductsCards.css';

function popularProductsCards(props) {
    return (
        <>
            <div className="card pop-card">
                <img src={props.imagen} className="card-img-top" alt="Prueba"></img>
                <div className="d-inline pop-cardFooter">
                    <a href="/" className="btn" id="conoceMas">Conoce +</a>
                    <span>|</span>
                    <a href="/" className="btn">
                        <img src={process.env.PUBLIC_URL + '/images/cart.svg'} id="pop-cartInvoice" alt="Carrito"></img>
                    </a>
                </div>
            </div>
        </>
    );
};

export default popularProductsCards;