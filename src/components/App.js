import React from 'react';
import Header from './header';
import Navbar from './navbar';
import Clientes from './clientes';
import Footer from './footer';
import Promociones from './promociones';
import PopularProduts from '../pages/popularProducts';
import Login from '../pages/login';
import Register from '../pages/register';
import ProductsByBrand from '../pages/productsByBrand';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Navbar />
        <div>
          <Switch>
            <Route path="/">
              <div id="inicio">
                <Promociones/>
              </div>
              <div id="productosPopulares">
                <PopularProduts/>
              </div>
              <Clientes/>
              <div id="todosProductos">
                <ProductsByBrand/>
              </div>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
