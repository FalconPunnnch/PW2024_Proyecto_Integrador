import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import LoginFormulario from "../components/LoginFormulario"

const RegistroPage = () => {
    const [error, setError] = useState("");
    const [aceptaTerminos, setAceptaTerminos] = useState(false);
    const [autorizaDatos, setAutorizaDatos] = useState(false);

    const registrarUsuarioHandler = (username, password, email) => {
        if (!aceptaTerminos) {
            setError("Debe aceptar los términos y condiciones para registrarse.")
            return;
        }

        const usuario = {
            usuario: username,
            password: password,
            email: email,
            autorizaDatos: autorizaDatos,
        };

        sessionStorage.setItem("USUARIO", JSON.stringify(usuario));
        setError(""); // Limpiar error en caso de éxito
    };

    return (
        <>
            <Header />
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <LoginFormulario 
                        loginOnClick={registrarUsuarioHandler}
                        modo={"registro"}
                    />
                    <div className="mt-3">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="terminos"
                                checked={aceptaTerminos}
                                onChange={(e) => setAceptaTerminos(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="terminos">
                                He leído y acepto los Términos y Condiciones de compra en Wong.pe. Acepto igualmente la Política de Privacidad y Seguridad y la Política de Cookies.
                            </label>
                        </div>
                        <div className="form-check mt-2">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="autorizaDatos"
                                checked={autorizaDatos}
                                onChange={(e) => setAutorizaDatos(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="autorizaDatos">
                                Autorizo el uso de mis datos para finalidades adicionales.
                            </label>
                        </div>
                    </div>
                    {error && <div className="mt-4 alert alert-danger">{error}</div>}
                </div>
                <div className="col-md-4"></div>
            </div>
            <Footer />
        </>
    )
}

export default RegistroPage