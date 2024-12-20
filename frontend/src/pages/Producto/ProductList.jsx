import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/Product/ProductCard.jsx';
import './ProductList.css';
import { BASE_URL } from '../../Api/constants.js';


const ProductList = ({ limit, showAll = true, className }) => { // Recibe className como prop
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error al cargar los productos:', error));
  }, []);

  const displayedProducts = showAll ? products : products.slice(0, limit);

  return (
    <div className={`product-grid ${className}`}>
      {displayedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
