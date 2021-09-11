import React from 'react';
import PopularProductsCards from '../components/popularProductsCards';
import '../css/popularProducts.css';

class popularProducts extends React.Component {
    state = {
      productos: [
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/COP_Chukum.png`,
          precio: "$344.89 MXN",
          producto: "Estucop Chukum Fino 20Kg",
          descripcion: "Mortero para acabado liso color Chukum"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/COP_Estucop Concreto Aparente.png`,
          precio: "$295.60 MXN",
          producto: "Estucop Concreto Aparetne 20Kg",
          descripcion: "Mortero para acabado tipo concreto aparente color gris"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/COP_Estucop Fino.png`,
          precio: "$273.20 MXN",
          producto: "Estucop Fino Gris 20Kg",
          descripcion: "Mortero para acabado liso color gris"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/COP_Plasticop 1000.png`,
          precio: "$402.00 - $1,700.00 MXN",
          producto: "Plasticop 1000 4 y 19Lts",
          descripcion: "Promotor de adherencia para superficies lisas"
        }

      ]
    };

    render() {
        return(
            <div className="containerProducts row row-cols-auto">
                {this.state.productos.map((producto) => (
                    <PopularProductsCards
                        imagen={producto.imagen}
                        precio={producto.precio}
                        producto={producto.producto}
                        descripcion={producto.descripcion}
                    />
                ))}
            </div>
        )
    }
}

export default popularProducts;