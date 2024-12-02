import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../Producto/ProductList';
import './Principal.css';

const Principal = () => {
  return (
    <div className="App">
      <section>
        <img className="imagenuwu" src="https://wongio.vtexassets.com/assets/vtex.file-manager-graphql/images/9874659c-f6a4-4fd5-8c86-80ed372cfed1___272085a515976384294495e8a7281530.jpg" alt="Descripción de la imagen" />
      </section>
      <div className="product-container">
        <div className="product-header">
          <h2 className="product-title">Nuevos Productos</h2>
          <Link to="/ProductList" className="view-all">ver todo &gt;</Link>
        </div>
        <ProductList limit={12} showAll={false} className="two-columns" />
      </div>
    </div>
  );
}

export default Principal;
