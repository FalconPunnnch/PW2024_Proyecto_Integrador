import { useState } from "react"

const CompraPage = () => {
    const [nombre, setNombre] = useState("")
    const [direccion, setDireccion] = useState("")
    const [celular, setCelular] = useState("")
    const [dni, setDni] = useState("")
    const [pagoId, setPagoId] = useState(1)
    
    const metodoPago = [
        {id: 1, nombre: "Tarjeta de credito/debito"},
        {id: 2, nombre: "Paypal"}
    ]

    const handleGuardar = () => {
        const datosComprador = {
            nombre,
            direccion,
            celular,
            dni,
            pagoId,
        };
        console.log("Datos guardados:", datosComprador);
    };

    return(
    <div>
        <h1> DATOS DEL COMPRADOR</h1>
        <form>
        <div>
            <label>Nombre:</label>
            <input
            type="text"
            name="nombre"
            valor={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
        </div>

        <div>
            <label>Dirección:</label>
            <input
            type="text"
            name="direccion"
            valor={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            />
        </div>

        <div>
            <label>Celular:</label>
            <input
            type="text"
            name="celular"
            valor={celular}
            onChange={(e) => setCelular(e.target.value)}
            />
        </div>

        <div>
            <label>DNI:</label>
            <input
            type="text"
            name="dni"
            valor={dni}
            onChange={(e) => setDni(e.target.value)}
            />
        </div>

        <div>
            <label>Método de Pago:</label>
            <select
                name="metodoPago"
                value={pagoId}
                onChange={(e) => setPagoId(Number(e.target.value))}
            >
                    <option value="">Selecciona un método</option>
                    {metodoPago.map((metodo) => (
                        <option key={metodo.id} value={metodo.id}>
                            {metodo.nombre}
                        </option>
                    ))}
            </select>
        </div>
       
        <button type="button" onClick={handleGuardar}>
                    Guardar
                </button>
                
        </form>
                
    </div>
    )
}
export default CompraPage