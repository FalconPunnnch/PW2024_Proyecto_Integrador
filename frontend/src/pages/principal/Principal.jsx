import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../Producto/ProductList';
import './Principal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Principal = () => {
  return (
    <div className="App">
      <section>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src='https://wongio.vtexassets.com/assets/vtex.file-manager-graphql/images/9874659c-f6a4-4fd5-8c86-80ed372cfed1___272085a515976384294495e8a7281530.jpg' className="d-block w-100" alt="Descripción de la imagen"/>
            </div>
            <div className="carousel-item">
              <img src='https://wowslider.com/sliders/demo-80/data1/images/plumage176723_1920.jpg' className="d-block w-100" alt="Segunda imagen"/>
            </div>
            <div className="carousel-item">
              <img src='https://wowslider.com/sliders/demo-80/data1/images/nature497978_1920.jpg' className="d-block w-100" alt="tercera imagen"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
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
