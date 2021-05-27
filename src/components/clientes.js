import React from 'react';
import '../css/clientes.css';

const clientes = () => {
    return (
        <div className="clientsLogos">
            <h2 className="titulo">Nuestros Clientes</h2>
             <img src={process.env.PUBLIC_URL + '/images/LogosClientes.svg'} alt="Matex Graphic Identifiers"></img>
        </div>
    );
  };

  export default clientes;