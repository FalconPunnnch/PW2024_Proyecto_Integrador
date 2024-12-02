import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../Producto/ProductList';
import './Principal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Const de catergorías
const categories = [
  { title: "Bebidas", image: "https://productosdelimpiezalima.com/image/catalog/categorias/bebidas.jpg", link: "/ProductList" },
  { title: "Frutas y Verduras", image: "https://productosdeldia.com/cdn/shop/articles/Tips_para_saber_como_elegir_frutas_y_verduras.jpg?v=1672343945", link: "/ProductList" },
  { title: "Cuidado del Hogar", image: "https://www.cien.adexperu.org.pe/wp-content/uploads/2023/10/productos-limpieza-basicos-1-800x445.jpg", link: "/ProductList" },
  { title: "Lácteos y huevos", image: "https://imagenes.eltiempo.com/files/image_1200_600/uploads/2024/01/11/65a03ac54c17f.png", link: "/ProductList" },
  { title: "Panadería", image: "https://thefoodtech.com/wp-content/uploads/2023/10/PANADERIA-PRINCIPAL-1-828x548.jpg", link: "/ProductList" },
  { title: "Despensa", image: "https://despensasqueretanas.com/wp-content/uploads/2019/02/whatsapp-image-2024-06-03-at-11.25.00-am-600x429.jpeg", link: "/ProductList" },
  { title: "Congelados", image: "https://elcarnicero.cl/media/catalog/category/BANNERCONGELADOS.jpg", link: "/ProductList" },
  { title: "Carnes y chorizos", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo0cnBsHQvcksG9vg3sr3AF_SOk4VVYD6DDg&s", link: "/ProductList" },
];


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

      <div className="container my-4">
        <div className="d-flex flex-nowrap justify-content-start gap-3 overflow-auto">
          {categories.map((category, index) => (
            <a href={category.link} className="text-decoration-none" key={index}>
              <div className="card text-center" style={{ width: '100px', padding: '0.5rem' }}>
                <img
                  src={category.image}
                  alt={category.title}
                  style={{ height: '60px', objectFit: 'contain' }}
                />
                <div className="card-body p-1">
                  <h6 className="card-title text-dark" style={{ fontSize: '0.65rem', lineHeight: '1.1' }}>
                    {category.title}
                  </h6>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

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
                <Link to="/detalles">
                  <Button variant="primary">Detalles</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/tottusPE/40343329_1/w=1500,h=1500,fit=pad" />
              <Card.Body>
                <Card.Title>Juego de Ollas Acero Inoxidable 7 Piezas 14-16-24cm</Card.Title>
                <Card.Text>
                La marca Casa Joven ofrece un juego de ollas de acero inoxidable de 7 piezas con medidas de 14, 16 y 24 cm. 
                </Card.Text>
                <p>
                  <del style={{ color: 'gray' }}>S/ 89.90</del>{' '}
                  <span style={{ color: 'red', fontWeight: 'bold' }}>S/ 69.90</span>
                </p>
                <Link to="/detalles">
                  <Button variant="primary">Detalles</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacPE/1696165_01/w=1500,h=1500,fit=pad  " />
              <Card.Body>
                <Card.Title>Olla 16 cm Realwin Acero Transparente</Card.Title>
                <Card.Text>
                Olla de acero inoxidable con tapa de vidrio templado con respiradero y asas de metal
                </Card.Text>
                <p>
                  <del style={{ color: 'gray' }}>S/ 49.90</del>{' '}
                  <span style={{ color: 'red', fontWeight: 'bold' }}>S/ 39.90</span>
                </p>
                <Link to="/detalles">
                  <Button variant="primary">Detalles</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Principal;
