import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap'; // Añadimos Form para el input de cantidad

const ProductoCard = ({ imagenUrl, nombre, precio }) => {
  const [cantidad, setCantidad] = useState(1); // 1 es la cantidad inicial de productos al agregaro al carrito
  const [añadidoAlCarrito, setAñadidoAlCarrito] = useState(false);

  // Función para manejar el cambio en el input de cantidad
  const handleCantidadChange = (event) => {
    setCantidad(Math.max(1, event.target.value)); // No permitir cantidades menores a 1
  };

  const handleAgregarAlCarrito = () => {
    setAñadidoAlCarrito(true);
  };

  return (
    <Card className="producto-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagenUrl} alt={nombre} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {precio}
        </Card.Text>
        
        {/* Input para seleccionar la cantidad */}
        <Form.Group controlId="cantidad">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            type="number"
            value={cantidad}
            onChange={handleCantidadChange}
            min="1"
            max="100"
          />
        </Form.Group>

        <Button
          variant="primary"
          onClick={handleAgregarAlCarrito}
          disabled={añadidoAlCarrito}
        >
          {añadidoAlCarrito ? `Añadido (${cantidad})` : `Agregar ${cantidad} al carrito`}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductoCard;
