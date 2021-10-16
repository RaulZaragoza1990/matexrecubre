import React from 'react';
import '../css/popularProductsCards.css';

function popularProductsCards(props) {
    return (
        <div className="pop-card">
            <div className="pop-body">
                <img src={props.imagen} alt={props.producto} className="pop-image"></img>
            </div>
            <p className="pop-footer">
                <a href="/" className="btn pop-conocemas" >Conoce +</a>
            </p>
        </div>
    );
};

export default popularProductsCards;