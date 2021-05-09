import React from 'react';
import '../css/header.css';

const header = () => {
    return (
        <div>
            <div className="topPageGraphics d-none d-lg-flex">
                <img className="logoHeading" src={process.env.PUBLIC_URL + '/images/logoMatex.png'} alt="Matex Graphic Identifiers"></img>
            </div>
        </div>
    );
};

export default header;