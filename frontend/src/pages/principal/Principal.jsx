import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../Producto/ProductList';
import './Principal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Principal = () => {
  return (
    <div className="App">
      <section>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src='https://wongio.vtexassets.com/assets/vtex.file-manager-graphql/images/9874659c-f6a4-4fd5-8c86-80ed372cfed1___272085a515976384294495e8a7281530.jpg' className="d-block w-100" alt="Descripción de la imagen" />
            </div>
            <div className="carousel-item">
              <img src='https://wongio.vtexassets.com/assets/vtex.file-manager-graphql/images/9782f240-51dd-468e-9319-34d24ec13d2c___d1604cd269426a0554562adcb80899d0.png' className="d-block w-100" alt="Segunda imagen" />
            </div>
            <div className="carousel-item">
              <img src='https://wongio.vtexassets.com/assets/vtex.file-manager-graphql/images/817d7735-13ac-4347-80e3-7f26c1efc65e___cf2ccf7d0ed492674bcffd848298e7d8.jpg' className="d-block w-100" alt="tercera imagen" />
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
        <div>
          <h1 style={{ marginBottom: '1rem' }}>Ofertas Navideñas</h1>
        </div>
        <div className='container my-4'>
          <div className="col-md-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/tottusPE/40862069_1/w=1500,h=1500,fit=pad" />
              <Card.Body>
                <Card.Title>Olla Acero Inoxidable 24 Cm</Card.Title>
                <Card.Text>
                  OLLA 24CM ACERO INOXIDABLE PU. Vidrio templado
                </Card.Text>
                <p>
                  <del style={{ color: 'gray' }}>S/ 59.90</del>{' '}
                  <span style={{ color: 'red', fontWeight: 'bold' }}>S/ 44.90</span>
                </p>
                <Button variant="primary">Detalles</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/tottusPE/40862069_1/w=1500,h=1500,fit=pad" />
              <Card.Body>
                <Card.Title>Olla Acero Inoxidable 24 Cm</Card.Title>
                <Card.Text>
                  OLLA 24CM ACERO INOXIDABLE PU. Vidrio templado
                </Card.Text>
                <p>
                  <del style={{ color: 'gray' }}>S/ 59.90</del>{' '}
                  <span style={{ color: 'red', fontWeight: 'bold' }}>S/ 44.90</span>
                </p>
                <Button variant="primary">Detalles</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/tottusPE/40862069_1/w=1500,h=1500,fit=pad" />
              <Card.Body>
                <Card.Title>Olla Acero Inoxidable 24 Cm</Card.Title>
                <Card.Text>
                  OLLA 24CM ACERO INOXIDABLE PU. Vidrio templado
                </Card.Text>
                <p>
                  <del style={{ color: 'gray' }}>S/ 59.90</del>{' '}
                  <span style={{ color: 'red', fontWeight: 'bold' }}>S/ 44.90</span>
                </p>
                <Button variant="primary">Detalles</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Principal;
