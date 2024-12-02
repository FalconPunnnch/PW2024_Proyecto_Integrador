import React, { useState } from "react";

const CarritoPage = () => {
  const [cart, setCart] = useState([]); // Comienza con un carrito vacío

  // Cambiar la cantidad de un producto
  const changeQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  // Eliminar un producto
  const removeProduct = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calcular el total
  const calculateTotal = () =>
    cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);

  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-4 text-center">Carrito de Compras</h2>

        {cart.length === 0 ? ( // Mostrar mensaje si el carrito está vacío
          <div className="text-center">
            <p className="fs-4">¡Empieza tus compras en nuestra web!</p>
          </div>
        ) : (
          <>
            <div className="list-group">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="list-group-item d-flex align-items-start"
                >
                  <img
                    src={`https://via.placeholder.com/100?text=${item.name}`}
                    className="me-3"
                    alt={item.name}
                  />
                  <div className="flex-grow-1">
                    <h5>{item.name}</h5>
                    <p className="mb-1">
                      Precio unitario: S/.{parseFloat(item.price).toFixed(2)}
                    </p>
                    <div className="input-group quantity-input w-auto">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => changeQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="form-control text-center"
                        value={item.quantity}
                        readOnly
                        min="1"
                        style={{ maxWidth: "60px" }}
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => changeQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="btn btn-danger btn-sm mt-2"
                      onClick={() => removeProduct(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <h4>Resumen del Carrito</h4>
              <ul className="list-group mb-3">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {item.name} (x{item.quantity})
                    <span>
                      S/.{(parseFloat(item.price) * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Total</strong>
                  <strong>S/.{calculateTotal().toFixed(2)}</strong>
                </li>
              </ul>
              <button className="btn btn-success mb-5">Proceder al Pago</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CarritoPage;
