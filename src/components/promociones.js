import React from 'react';
import '../css/promociones.css';

const promociones = () => {
    return (
        <>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={process.env.PUBLIC_URL + '/images/BannerDummy.png'} className="d-block w-100" alt="Imagen1"></img>
                </div>
                <div className="carousel-item">
                    <img src={process.env.PUBLIC_URL + '/images/BannerDummy2.png'} className="d-block w-100" alt="Imagen2"></img>
                </div>
                <div className="carousel-item">
                    <img src={process.env.PUBLIC_URL + '/images/BannerDummy3.png'} className="d-block w-100" alt="Imagen3"></img>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    );
  };

  export default promociones;