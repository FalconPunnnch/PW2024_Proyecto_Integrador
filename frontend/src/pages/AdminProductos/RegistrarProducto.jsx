import React, { useState, useEffect } from 'react';
import './Registrar.css';
import { BASE_URL } from '../../Api/constants';

const RegistrarProducto = () => {
  const [formData, setFormData] = useState({
    codigo: '',
    nombre: '',
    descripcion: '',
    categoria: '',
    precioPen: '',
    stock: 7,
    imagenUrl: '',
  });

  const [categorias, setCategorias] = useState([]);
  const [nuevaCategoria, setNuevaCategoria] = useState('');
  const [mostrarNuevaCategoria, setMostrarNuevaCategoria] = useState(false);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch(`${BASE_URL}/productcategory`);
        if (response.ok) {
          const data = await response.json();
          setCategorias(data);
        } else {
          console.error('Error al cargar categorías');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCategorias();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'categoria' && value === 'crear-nueva') {
      setMostrarNuevaCategoria(true);
    } else {
      setMostrarNuevaCategoria(false);
    }
  };

  const handleNuevaCategoria = async () => {
    if (!nuevaCategoria.trim()) {
      alert('El nombre de la categoría no puede estar vacío');
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/productcategory`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: nuevaCategoria }),
      });

      if (response.ok) {
        const nuevaCat = await response.json();
        setCategorias([...categorias, nuevaCat]);
        setFormData({ ...formData, categoria: nuevaCat.id });
        setNuevaCategoria('');
        setMostrarNuevaCategoria(false);
        alert('Categoría agregada con éxito');
      } else {
        alert('Error al agregar la categoría');
      }
    } catch (error) {
      console.error('Error al agregar categoría:', error);
    }
  };

  const handleRegister = async () => {
    try {
      const productData = {
        code: formData.codigo.trim(),
        name: formData.nombre.trim(),
        description: formData.descripcion.trim(),
        category_id: formData.categoria,
        pricePEN: parseFloat(formData.precioPen),
        stock: parseInt(formData.stock, 10),
        imageUrl: formData.imagenUrl.trim(),
      };

      if (!productData.code || !productData.name || !productData.category_id || !productData.pricePEN) {
        alert('Todos los campos son obligatorios');
        return;
      }

      const response = await fetch(`${BASE_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        alert('Producto registrado con éxito');
        setFormData({
          codigo: '',
          nombre: '',
          descripcion: '',
          categoria: '',
          precioPen: '',
          stock: 7,
          imagenUrl: '',
        });
      } else {
        const errorData = await response.json();
        alert(`Error al ProduRegistrarProducto el producto: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      alert('Error en el registro del producto');
    }
  };

  return (
    <div className="registrar-producto-container">
      <h2>REGISTRAR PRODUCTO</h2>
      <div className="registrar-producto">
        <div className="registrar-producto-imagen">
          {formData.imagenUrl && <img src={formData.imagenUrl} alt="Vista previa" />}
          <label>Actualizar Imagen (URL):</label>
          <input
            type="text"
            name="imagenUrl"
            value={formData.imagenUrl}
            onChange={handleChange}
            placeholder="https://example.com/imagen.jpg"
          />
        </div>
        <div className="registrar-producto-info">
          <label>Código de Producto:</label>
          <input type="text" name="codigo" value={formData.codigo} onChange={handleChange} />

          <label>Nombre:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />

          <label>Descripción:</label>
          <input type="text" name="descripcion" value={formData.descripcion} onChange={handleChange} />

          <label>Categoría:</label>
          <select name="categoria" value={formData.categoria} onChange={handleChange}>
            <option value="">Seleccione una categoría</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.name}
              </option>
            ))}
            <option value="crear-nueva">Crear nueva categoría</option>
          </select>

          {mostrarNuevaCategoria && (
            <div className="nueva-categoria">
              <input
                type="text"
                value={nuevaCategoria}
                onChange={(e) => setNuevaCategoria(e.target.value)}
                placeholder="Nueva categoría"
              />
              <button onClick={handleNuevaCategoria}>Agregar</button>
            </div>
          )}

          <label>Precio (PEN):</label>
          <input
            type="number"
            name="precioPen"
            value={formData.precioPen}
            onChange={handleChange}
          />

          <label>Stock:</label>
          <input type="number" name="stock" value={formData.stock} onChange={handleChange} />
        </div>
      </div>
      <button className="registrar-button" onClick={handleRegister}>
        REGISTRAR PRODUCTO
      </button>
    </div>
  );
};

export default RegistrarProducto;
