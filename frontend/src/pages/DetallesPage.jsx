import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DetallesPage = () => {
    const [nombre, setNombre] = useState("Producto");
    const [precio, setPrecio] = useState(100);
    const [descripcion, setDescripcion] = useState("Descripción o Características del Producto");
    const [cantidad, setCantidad] = useState(1);

    const navigate = useNavigate();


    const [quantity, setQuantity] = useState(1);

    // Función para cambiar la cantidad del producto
    const changeQuantity = (change) => {
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity + change;
            return newQuantity < 1 ? 1 : newQuantity; // No permitir menos de 1
        });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://via.placeholder.com/400" alt={nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{nombre}</h5>
                            <p>Precio: ${precio}</p>
                            <p className="card-text">{descripcion}</p>
                        </div>
                        <div>
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



                    <button className="btn btn-primary w-100 p-2 mx-2" onClick={() => navigate('/compra')}>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetallesPage;
