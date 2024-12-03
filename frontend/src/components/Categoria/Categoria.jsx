import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Categoria.css';
import { BASE_URL } from '../../Api/constants';

const Categoria = () => {
  const { categoria } = useParams();
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [carrito, setCarrito] = useState([]); // Estado local del carrito

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(`${BASE_URL}/products/category/${categoria}`);
        if (!response.ok) {
          throw new Error('Error al cargar los productos.');
        }
        const data = await response.json();
    
        // Convertir pricePEN a número
        const productosConPrecioNumerico = data.map(producto => ({
          ...producto,
          pricePEN: parseFloat(producto.pricePEN) || 0,
        }));
        setProductosFiltrados(productosConPrecioNumerico);
      } catch (error) {
        setError(error.message);
        console.error('Error al cargar productos:', error);
      } finally {
        setLoading(false);
      }
    };    

    fetchProductos();
  }, [categoria]);

  const añadirAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find((item) => item.id === producto.id);
      if (existe) {
        return prevCarrito.map((item) =>
          item.id === producto.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCarrito, { ...producto, quantity: 1 }];
    });
  };

  return (
    <div>
      <h2 className="TitleH2">Productos: {categoria}</h2>
      {loading && <p>Cargando productos...</p>}
      {error && <p className="error-message">{error}</p>}
      <div className="categoria">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <div key={producto.id} className="categoriacard">
              <img src={producto.imageUrl} alt={producto.name} className="categoria-image" />
              <h3>{producto.name}</h3>
              <p><strong>Código:</strong> {producto.code}</p>
              <p><strong>Stock:</strong> {producto.stock}</p>
              <p><strong>Precio (PEN):</strong> S/{parseFloat(producto.pricePEN).toFixed(2)}</p>
              <button
                className="añadircategoriacarrito"
                onClick={() => añadirAlCarrito(producto)}
              >
                Añadir al Carrito
              </button>
            </div>
          ))
        ) : (
          !loading && <p>No hay productos disponibles en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default Categoria;
