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
    return<>

    <Header />
    <div>
        <h1> DATOS DEL COMPRADOR</h1>
        <form>
        <div>
            <label>Nombre:</label>
            <input
            type="text"
            name="nombre"
            valor={nombre}
            setValor={setNombre}
            />
        </div>

        <div>
            <label>Dirección:</label>
            <input
            type="text"
            name="direccion"
            valor={direccion}
            setValor={setDireccion}
            />
        </div>

        <div>
            <label>Celular:</label>
            <input
            type="text"
            name="celular"
            valor={celular}
            setValor={setCelular}
            />
        </div>

        <div>
            <label>DNI:</label>
            <input
            type="text"
            name="dni"
            valor={dni}
            setValor={setDni}
            />
        </div>

        <div>
            <label>Método de Pago:</label>
            <select
            name="metodoPago"
            value={metodoPago}
            setValor={setPagoId}
            >
            <option value="">Selecciona un método</option>
            <option value="tarjeta">Tarjeta de Crédito</option>
            <option value="paypal">PayPal</option>
            </select>
        </div>
        <div>
                <button type="button" className="btn btn-success"
                            onClick={ () => {
                                props.loginOnClick(username, password, paisId)
                            } }>
                            {
                                props.modo === "login"? "Login" : "Guardar"
                            }
                    </button>
                </div>
        </form>
                
    </div>
    <Footer />
    </>
}
export default CompraPage