import React from 'react';
import ProductsCards from '../components/productsCards'
import '../css/productsByBrand.css'

class ProductsByBrand extends React.Component {
    state = {
      productos: [
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/MOSECA_Masilla Mos.png`,
          precio: "$14,000 MXN",
          producto: "Moseca Masillamos",
          descripcion: "Consola Xbox Series X con capacidad de 1 TB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/Deccofloor_Fixer.png`,
          precio: "$7,200 MXN",
          producto: "Deccofloor FIxer",
          descripcion: "Consola Nintendo Switch con capacidad de 32 GB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/DeccoFloor_Microtop.png`,
          precio: "$4,500 MXN",
          producto: "Deccofloor Microtop +",
          descripcion: "Consola Nintendo Switch Lite con capacidad de 32 GB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/Plaka_Gyplast.png`,
          precio: "$8,000 MXN",
          producto: "Plaka Gyplast",
          descripcion: "Consola Xbox Series S con capacidad de 512 GB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/MOSECA_Masilla Mos.png`,
          precio: "$14,000 MXN",
          producto: "Moseca Masillamos",
          descripcion: "Consola Xbox Series X con capacidad de 1 TB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/Deccofloor_Fixer.png`,
          precio: "$7,200 MXN",
          producto: "Deccofloor FIxer",
          descripcion: "Consola Nintendo Switch con capacidad de 32 GB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/DeccoFloor_Microtop.png`,
          precio: "$4,500 MXN",
          producto: "Deccofloor Microtop +",
          descripcion: "Consola Nintendo Switch Lite con capacidad de 32 GB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/Plaka_Gyplast.png`,
          precio: "$8,000 MXN",
          producto: "Plaka Gyplast",
          descripcion: "Consola Xbox Series S con capacidad de 512 GB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/MOSECA_Masilla Mos.png`,
          precio: "$14,000 MXN",
          producto: "Moseca Masillamos",
          descripcion: "Consola Xbox Series X con capacidad de 1 TB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/Deccofloor_Fixer.png`,
          precio: "$7,200 MXN",
          producto: "Deccofloor FIxer",
          descripcion: "Consola Nintendo Switch con capacidad de 32 GB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/DeccoFloor_Microtop.png`,
          precio: "$4,500 MXN",
          producto: "Deccofloor Microtop +",
          descripcion: "Consola Nintendo Switch Lite con capacidad de 32 GB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/Plaka_Gyplast.png`,
          precio: "$8,000 MXN",
          producto: "Plaka Gyplast",
          descripcion: "Consola Xbox Series S con capacidad de 512 GB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/MOSECA_Masilla Mos.png`,
          precio: "$14,000 MXN",
          producto: "Moseca Masillamos",
          descripcion: "Consola Xbox Series X con capacidad de 1 TB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/Deccofloor_Fixer.png`,
          precio: "$7,200 MXN",
          producto: "Deccofloor FIxer",
          descripcion: "Consola Nintendo Switch con capacidad de 32 GB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/DeccoFloor_Microtop.png`,
          precio: "$4,500 MXN",
          producto: "Deccofloor Microtop +",
          descripcion: "Consola Nintendo Switch Lite con capacidad de 32 GB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/Plaka_Gyplast.png`,
          precio: "$8,000 MXN",
          producto: "Plaka Gyplast",
          descripcion: "Consola Xbox Series S con capacidad de 512 GB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/MOSECA_Masilla Mos.png`,
          precio: "$14,000 MXN",
          producto: "Moseca Masillamos",
          descripcion: "Consola Xbox Series X con capacidad de 1 TB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/Deccofloor_Fixer.png`,
          precio: "$7,200 MXN",
          producto: "Deccofloor FIxer",
          descripcion: "Consola Nintendo Switch con capacidad de 32 GB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/DeccoFloor_Microtop.png`,
          precio: "$4,500 MXN",
          producto: "Deccofloor Microtop +",
          descripcion: "Consola Nintendo Switch Lite con capacidad de 32 GB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/Plaka_Gyplast.png`,
          precio: "$8,000 MXN",
          producto: "Plaka Gyplast",
          descripcion: "Consola Xbox Series S con capacidad de 512 GB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/MOSECA_Masilla Mos.png`,
          precio: "$14,000 MXN",
          producto: "Moseca Masillamos",
          descripcion: "Consola Xbox Series X con capacidad de 1 TB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/Deccofloor_Fixer.png`,
          precio: "$7,200 MXN",
          producto: "Deccofloor FIxer",
          descripcion: "Consola Nintendo Switch con capacidad de 32 GB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/DeccoFloor_Microtop.png`,
          precio: "$4,500 MXN",
          producto: "Deccofloor Microtop +",
          descripcion: "Consola Nintendo Switch Lite con capacidad de 32 GB"
        },
        {
          imagen:
          `${process.env.PUBLIC_URL}/images/Plaka_Gyplast.png`,
          precio: "$8,000 MXN",
          producto: "Plaka Gyplast",
          descripcion: "Consola Xbox Series S con capacidad de 512 GB"
        }

      ]
    };

    render() {
        return(
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
        )
    }
}

export default ProductsByBrand;