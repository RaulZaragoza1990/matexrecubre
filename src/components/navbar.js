import React from 'react';
import '../css/navbar.css';
import { Link } from "react-scroll";

const navbar = () => {
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg" >
                <div className="container-fluid">
                    <a className="navbar-brand navbar-toggler" href="/">
                        <img id="logoNavbar" src={process.env.PUBLIC_URL + '/images/logoMatex.png'} alt="Matex"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item nav-icon-search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg> 
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="nav-link" 
                                    activeClass="active" 
                                    to="inicio" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-50} 
                                    duration={600}>
                                        INICIO<span className="downArrow">&#9662;</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link" 
                                    activeClass="active" 
                                    to="productosPopulares" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-70} 
                                    duration={600}>
                                        PORDUCTOS POPULARES<span className="downArrow">&#9662;</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="nav-link" 
                                    activeClass="active" 
                                    to="todosProductos" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-70} 
                                    duration={600}>
                                        TODOS LOS PRODUCTOS<span className="downArrow">&#9662;</span>
                                </Link>
                            </li>
                            <li className="nav-item nav-icon-login">
                                <div className="dropdown">
                                    <button type="button" className="icon-account" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        </svg>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                        <li><a className="dropdown-item" href="/">Action</a></li>
                                        <li><a className="dropdown-item" href="/">Another action</a></li>
                                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
  };

  export default navbar;