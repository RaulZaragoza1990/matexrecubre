import React from 'react';
import '../css/navbar.css';

const navbar = () => {
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg" >
                <div className="container-fluid">
                    <a className="navbar-brand navbar-toggler" href="/">
                        <img id="logoNavbar" src={process.env.PUBLIC_URL + '/images/logoMatex.png'} alt="Matex"></img>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">INICIO<span className="downArrow">&#9662;</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">PROMOCIONES<span className="downArrow">&#9662;</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">PRODUCTOS POPULARES<span className="downArrow">&#9662;</span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    TODOS LOS PRODUCTOS<span className="downArrow">&#9662;</span>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="/prductsbybrand" >VER POR MARCA</a></li>
                                    <li><a className="dropdown-item" href="/">VER POR TIPO DE PRODUCTO</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
  };

  export default navbar;