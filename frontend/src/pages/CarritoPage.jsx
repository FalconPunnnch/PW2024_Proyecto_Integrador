import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarritoPage = () => {
      // Estado para la cantidad del producto
      const [quantity, setQuantity] = useState(1);

      // Función para cambiar la cantidad del producto
      const changeQuantity = (change) => {
            setQuantity((prevQuantity) => {
                  const newQuantity = prevQuantity + change;
                  return newQuantity < 1 ? 1 : newQuantity; // No permitir menos de 1
            });
      };

      return (
            <div className="container mt-5">
                  <h2 className="mb-4">Carrito de Compras</h2>
                  <div className="list-group">
                        {/* Producto 1 */}
                        <div className="list-group-item d-flex align-items-start">
                              <img
                                    src="https://via.placeholder.com/100"
                                    className="me-3"
                                    alt="Producto 1"
                              />
                              <div className="flex-grow-1">
                                    <h5>Producto 1</h5>
                                    <p className="mb-1">$20.00</p>
                                    <div className="input-group quantity-input w-auto">
                                          <button
                                                className="btn btn-outline-secondary"
                                                type="button"
                                                onClick={() => changeQuantity(-1)}
                                          >
                                                -
                                          </button>
                                          <input
                                                type="number"
                                                className="form-control text-center"
                                                value={quantity}
                                                readOnly
                                                min="1"
                                                style={{ maxWidth: '60px' }}
                                          />
                                          <button
                                                className="btn btn-outline-secondary"
                                                type="button"
                                                onClick={() => changeQuantity(1)}
                                          >
                                                +
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* Resumen del Carrito */}
                  <div className="mt-5">
                        <h4>Resumen del Carrito</h4>
                        <ul className="list-group mb-3">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Producto 1 (x{quantity})
                                    <span>${(20.0 * quantity).toFixed(2)}</span>
                              </li>
                        </ul>
                        <button className="btn btn-success">Proceder al Pago</button>
                  </div>
            </div>
      );
};

export default CarritoPage

