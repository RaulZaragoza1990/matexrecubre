import React from 'react';
import ProductsCards from '../components/productsCards';
import '../css/productsByBrand.css';

class ProductsByBrand extends React.Component {
    state = {
      productos: [
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/Blender_Hardener.png`,
          precio: "$281.05 MXN",
          producto: "Blender Hardener Bulto 20Kg",
          descripcion: "Color endurecedor para concreto."
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/Blender_Natural Stain.png`,
          precio: "$151.33 - $226.02 MXN",
          producto: "Blender Natural Stain 3.8lts",
          descripcion: "Oxidante para concreto varios colores."
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/Blender_NaturalDyes.png`,
          precio: "$8,000 MXN",
          producto: "Plaka Gyplast",
          descripcion: "Consola Xbox Series S con capacidad de 512 GB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/BYP_Brocha Premium.png`,
          precio: "$14,000 MXN",
          producto: "Moseca Masillamos",
          descripcion: "Consola Xbox Series X con capacidad de 1 TB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/BYP_Rodillo Profesional.png`,
          precio: "$7,200 MXN",
          producto: "Deccofloor FIxer",
          descripcion: "Consola Nintendo Switch con capacidad de 32 GB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/CEMPANEL_Adhepanel.png`,
          precio: "$4,500 MXN",
          producto: "Deccofloor Microtop +",
          descripcion: "Consola Nintendo Switch Lite con capacidad de 32 GB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/CEMPANEL_Biselado.png`,
          precio: "$8,000 MXN",
          producto: "Plaka Gyplast",
          descripcion: "Consola Xbox Series S con capacidad de 512 GB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/CEMPANEL_Cedar.png`,
          precio: "$402.00 - $1,700.00 MXN",
          producto: "Plasticop 1000",
          descripcion: ""
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/CEMPANEL_Liso.png`,
          precio: "$4,500 MXN",
          producto: "Deccofloor Microtop +",
          descripcion: "Consola Nintendo Switch Lite con capacidad de 32 GB"
        },
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
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/COP_Repello 3en1.png`,
          precio: "$204.81 MXN",
          producto: "Repello 3 en 1 gris 40Kg",
          descripcion: "Mortero para repellado liso color gris"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/Tesla_Bahia Principe.png`,
          precio: "$14,000 MXN",
          producto: "Moseca Masillamos",
          descripcion: "Consola Xbox Series X con capacidad de 1 TB"
        }
      ]
    };

    render() {
        return(
          <>
            <header className="subtitle">
              <h2>Compra con Nosotros</h2>
            </header>
            <div className="containerProducts row row-cols-auto">
                {this.state.productos.map((producto) => (
                    <ProductsCards
                        imagen={producto.imagen}
                        precio={producto.precio}
                        producto={producto.producto}
                        descripcion={producto.descripcion}
                    />
                ))}
            </div>
          </>
        )
    }
}

export default ProductsByBrand;