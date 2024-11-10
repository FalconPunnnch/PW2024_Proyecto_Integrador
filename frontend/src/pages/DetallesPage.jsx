import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const DetallesPage = () => {
    const [nombre,setNombre]=useState()
    const [precio,setPrecio]=useState()
    const [descripcion,setDescripcion]=useState()
    const [cantidad, setCantidad] = useState(1)
    

    return (
            <div>
                <img src="" alt={nombre}/>
                <div>
                    <h2>{nombre}</h2>
                    <p>Precio: {precio}</p>
                    <p>{descripcion}</p>

                    <div>
                        <button onClick={handleDecrementar}>-</button>
                        <span>{cantidad}</span>
                        <button onClick={handleIncrementar}>+</button>
                    </div>

                    
                    <button onClick={()=>{navigate('/compra')}}>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
            );
        };

export default DetallesPage