import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Navbar from './navbar';
import Login from '../pages/login';
import Register from '../pages/register';
import ProductsByBrand from '../pages/productsByBrand';
import ProductsByType from '../pages/productsByType';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Navbar />

        <div className="container">
          <Switch>
            <Route path="/prductsbybrand">
              <ProductsByBrand />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
