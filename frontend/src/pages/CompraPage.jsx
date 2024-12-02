import { useState } from "react"

const CompraPage = () => {
    const [nombre, setNombre] = useState("")
    const [direccion, setDireccion] = useState("")
    const [celular, setCelular] = useState("")
    const [dni, setDni] = useState("")
    const [pagoId, setPagoId] = useState(1)

    const metodoPago = [
        { id: 1, nombre: "Tarjeta de credito/debito" },
        { id: 2, nombre: "Paypal" }
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

    return (
        <>
        <div className="container">
            
            <h1 className="mt-3"> DATOS DEL COMPRADOR</h1>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text">Nombre Y Apellidos: </span>
                    <input type="text" aria-label="First name" className="form-control"
                        name="nombre"
                        valor={nombre}
                        onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">Dirección: </span>
                    <input type="text" aria-label="First name" className="form-control"
                        name="direccion"
                        valor={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">Celular: </span>
                    <input type="text" aria-label="First name" className="form-control"
                        name="celular"
                        valor={celular}
                        onChange={(e) => setCelular(e.target.value)}
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">DNI: </span>
                    <input type="text" aria-label="First name" className="form-control"
                        name="dni"
                        valor={dni}
                        onChange={(e) => setDni(e.target.value)}
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">Metodo de Pago: </span>
                    <select className="form-select" id="inputGroupSelect01"
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

                <button type="button" class="btn btn-primary mb-3" onClick={handleGuardar}>Guardar</button>

            </form>
            
        </div>
        </>
    )
}
export default CompraPage;