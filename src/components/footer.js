import React from 'react';
import '../css/footer.css';

const footer = () => {
    return (
        <div>
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
                                <a className="nav-link active" href="/">VOLVER AL INICIO<span className="downArrow">&#9652;</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">CONTACTO<span className="downArrow">&#9652;</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">TEL 984 233 2253<span className="downArrow">&#9652;</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
  };

  export default footer;