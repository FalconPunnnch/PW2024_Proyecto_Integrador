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
        <>
        <div className="container mt-3 mb-5">
            <div className="row">
                <div className="col-4">
                    <img src="https://via.placeholder.com/400" alt={nombre} ></img>
                </div>
                <div className="col-8">
                    <h2>{nombre}</h2>
                    <p>Precio: ${precio}</p>
                    <p>{descripcion}</p>
                    <div className="row">
                        <div className="input-group quantity-input w-auto col-4">
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
                        <div className="col-4">
                            <button className="btn btn-primary w-100 p-2 mx-2" onClick={() => navigate('/')}>
                                Agregar al Carrito
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        </>
    );
};

export default DetallesPage;
