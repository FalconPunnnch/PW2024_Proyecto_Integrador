import React, { useState, useEffect } from 'react';
import './AdminProductos.css';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../Api/constants';

const AdminProductos = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/products`);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error('Error al cargar los productos');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);

    fetch(`${BASE_URL}/products/${productId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        console.log('Producto eliminado correctamente');
      } else {
        console.error('Error al eliminar el producto');
      }
    })
    .catch(error => console.error('Error en la solicitud de eliminación:', error));
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="estado-pro-container">
      <div className="navigation-links">
        <Link to="/AdminProductos">PRODUCTOS</Link>
      </div>
      <div className="search-and-filter">
        <input
          type="text"
          placeholder="Búsqueda por nombre"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <Link to={`/RegistrarProducto`}>
          <button>Registrar Producto</button>
        </Link>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>Código de Producto</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Imagen</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => (
            <tr key={product.id}>
              <td>{product.code}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td><img src={product.imageUrl} alt={product.name} width="50" /></td>
              <td>
                <Link to={`/Editar/${product.id}`}>
                  <button>Editar</button>
                </Link>
              </td>
              <td>
                <button onClick={() => handleDelete(product.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductos;
